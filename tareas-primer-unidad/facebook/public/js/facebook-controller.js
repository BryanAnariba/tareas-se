//window.onload = () => {
    var postsFacebook = [];
    var users = [];
    var localStorage = window.localStorage;

    // INFORMACION EN LOCALSTORAGE DE FACEBOOK
    if (localStorage.getItem('facebook') == null) {
        var postsFacebook = [
            {
                usuario: "Test User" ,
                post: "Test Post of this platform, whatever --->" ,
                fecha: "11/01/2012"
            },
            {
                usuario: "Test User" ,
                post: "Test Post of this platform, whatever --->" ,
                fecha: "11/01/2012"
            }
        ];
        postsFacebook = localStorage.setItem('facebook', JSON.stringify(postsFacebook));
        postsFacebook = JSON.parse(localStorage.getItem('facebook'));
    } else {
        postsFacebook = JSON.parse(localStorage.getItem('facebook'));
    }
    
    // INFORMACION EN LOCALSTORAGE DE USUARIOS DE FACEBOOK
    if (localStorage.getItem('users') == null ) {
        var users = [
            {
                firstname: "Bryan Ariel",
                lastname: "Sanchez Anariba"
            } ,
            {
                firstname: "Erick David" ,
                lastname: "Jimenez Anariba"
            } ,
            {
                firstname: "Asrael" ,
                lastname: "Morningstar"
            }
        ];
        users = localStorage.setItem('users' , JSON.stringify(users));
        users = JSON.parse(localStorage.getItem('users'));
    } else {
        users = JSON.parse(localStorage.getItem('users'));
    }

    // limpiar casillas
    function limpiaCasillas(selector) {
        selector.value = '';
    }

    // Insertar un usuario
    function insertarUsuario() {
        let firstname = document.querySelector('#firstname');
        let lastname = document.querySelector('#lastname');
        let user = {
            firstname: firstname.value ,
            lastname: lastname.value
        };
        users.push(user);
        users = localStorage.setItem('users' , JSON.stringify(users));
        //users = JSON.parse(localStorage.getItem('users'));
        limpiaCasillas(firstname);
        limpiaCasillas(lastname);
        listadoUsuarios();
    };
    // Generar Lista de publicaciones
    function listadoPublicaciones () {
        document.getElementById('post-facebook').innerHTML = `
            <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="card">
                    <div class="card-header" style="background-color: #fff;">
                        <h3>Agregar Post</h3>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="form-group">
                                <select class="form-control" id="selecciona-usuario">

                                </select>
                            </div>
                            <div class="form-group">
                                <textarea id="post" cols="30" rows="5" class="form-control" placeholder="¿Que estas pensando?">
                                    
                                </textarea>
                            </div>
                            <div class="form-group">
                                <input type="date" name="" id="fecha" class="form-control">
                            </div>
                    </div>
                    <div class="card-footer" style="background-color: #fff;">
                        <input type="button" id="btn-save-post" onclick="insertaPublicacion()" class="btn btn-success" value="Post">
                    </div>
                </div>
            </div>
        `;
        for (let i=0;i<postsFacebook.length; i++) {
            document.getElementById('post-facebook').innerHTML += `
                <div class="col-lg-4 col-md-6 col-sm-12 mt-4">
                    <div class="card">
                        <div class="card-header" style="background-color: #fff;">
                            <span><img src="/img/cuenta.png" width="40" style="border: 2px solid gray; border-radius: 50%;"> <strong>  ${ postsFacebook[i].usuario } </strong> (${ postsFacebook[i].fecha })</span>
                        </div>
                        <div class="card-body">
                            <p>
                                ${ postsFacebook[i].post }
                            </p>
                        </div>
                        <div class="card-footer" style="background-color: #fff;">
                            
                        </div>
                    </div>
                </div>
            `;
        }
    }
    listadoPublicaciones();

    // Genear lista de usuarios ------->  AL FINAL NO SE POR QUE NO FUNCIONA ANTES
    function listadoUsuarios() {
        document.querySelector('#selecciona-usuario').innerHTML = ``;
        for (let i=0; i<users.length; i++) {
            document.querySelector('#selecciona-usuario').innerHTML += `
                <option value="${ users[i].firstname } ${ users[i].lastname }">${ users[i].firstname } ${ users[i].lastname }</option>
            `;
        }
    }
    listadoUsuarios();

    // Insertar publicaciones
    function insertaPublicacion () {
        let usuario = document.getElementById('selecciona-usuario'); 
        let post = document.getElementById('post');
        let fecha = document.getElementById('fecha');
        
        let postFacebook = {
            usuario: usuario.value ,
            post: post.value ,
            fecha: fecha.value
        }
        postsFacebook.push(postFacebook);
        postsFacebook = localStorage.setItem('facebook',JSON.stringify(postsFacebook));
        postsFacebook = JSON.parse(localStorage.getItem('facebook'));
        limpiaCasillas(post);
        listadoPublicaciones();
        listadoUsuarios();
    }


