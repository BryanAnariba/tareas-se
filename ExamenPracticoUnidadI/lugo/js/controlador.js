
var usuarios = [];
var categorias = [];
var localStorage = window.localStorage;

///-----------------------------------------------USUARIOS
if (localStorage.getItem('usuarios') == null) {
    usuarios = [
        {
            nombre:"Pedro",
            apellido:"Martinez",
            ordenes:[
                {
                    nombreProducto:"Producto 1",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    cantidad:2,
                    precio:49.99
                },
                {
                    nombreProducto:"Producto 2",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    cantidad:2,
                    precio:49.99
                }
            ]
        },
        {
            nombre:"Juan",
            apellido:"Perez",
            ordenes:[
                {
                    nombreProducto:"Producto 3",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    cantidad:2,
                    precio:49.99
                },
                {
                    nombreProducto:"Producto 4",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    cantidad:2,
                    precio:49.99
                },
                {
                    nombreProducto:"Producto 5",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    cantidad:3,
                    precio:79.99
                }
            ]
        },
        {
            nombre:"Maria",
            apellido:"Rodriguez",
            ordenes:[
                {
                    nombreProducto:"Producto 5",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    cantidad:2,
                    precio:49.99
                },
                {
                    nombreProducto:"Producto 6",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    cantidad:2,
                    precio:49.99
                },{
                    nombreProducto:"Producto 7",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    cantidad:2,
                    precio:49.99
                }
            ]
        }
    ];
    usuarios = localStorage.setItem('usuarios' , JSON.stringify(usuarios));
    usuarios = JSON.parse(localStorage.getItem('usuarios'));
    console.log(usuarios);
} else {    
    usuarios = JSON.parse(localStorage.getItem('usuarios'));
    console.log(usuarios);
}


///-----------------------------------------------CATEGORIAS
if (localStorage.getItem('categorias') == null) {
    categorias = [
        {
            nombreCategoria:"Farmacias",
            descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
            color:"#9482C4",
            icono:"fab fa-angellist",
            empresas:[
                {
                    nombreEmpresa: "Empresa 1",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto Farmancia 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto Farmancia 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto Farmancia 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto Farmancia 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 2",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 3",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                }
            ]
        },
        {
            nombreCategoria:"Restaurantes",
            descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
            color:"#9482C4",
            icono:"fab fa-angellist",
            empresas:[
                {
                    nombreEmpresa: "Empresa 1",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 2",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 3",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                }
            ]
        },
        {
            nombreCategoria:"Salud",
            descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
            color:"#000000",
            icono:"fab fa-angellist",
            empresas:[
                {
                    nombreEmpresa: "Empresa 1",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 2",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 3",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                }
            ]
        },
        {
            nombreCategoria:"Café",
            descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
            color:"#CC61B5",
            icono:"fab fa-angellist",
            empresas:[
                {
                    nombreEmpresa: "Empresa 1",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 2",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 3",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                }
            ]
        },
        {
            nombreCategoria:"Bebidas",
            descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
            color:"#9482C4",
            icono:"fab fa-angellist",
            empresas:[
                {
                    nombreEmpresa: "Empresa 1",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 2",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 3",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                }
            ]
        }
    ];

    categorias = localStorage.setItem('categorias' , JSON.stringify(categorias));
    categorias = JSON.parse(localStorage.getItem('categorias'));
    console.log(categorias)
} else {
    categorias = JSON.parse(localStorage.getItem('categorias'));
    console.log(categorias);
}

// Generando listas de categorias para pintarlas en pantalla ya estilizadas
function pintandoCategoriasLugo () {
    //console.log('Works');
        document.getElementById('contenedor-categorias').innerHTML = ``;
    for(let i=0;i<categorias.length;i++) {
        document.getElementById('contenedor-categorias').innerHTML += `
        <div class="col-lg-3 col-md-4 col-sm-6 mt-2">
            <div id="card-item" class="card" style="background: ${categorias[i].color};" onclick="infoCategorias(${ i })">
                <div class="row">
                    <div class="col mx-auto text-center m-3">
                        <i class="${categorias[i].icono}" style="font-size: 100px;"></i>
                    </div>
                    <div class="col">

                    </div>
                </div>
                <div class="row m-3 mt-4">
                    <section class="col">
                        <h3 class="text-white font-weight-bolder">${categorias[i].nombreCategoria}</h3>
                        <p class="text-white" style="font-size: 18px;">
                            ${categorias[i].empresas.length} Comercios
                        </p>
                    </section>
                </div>
            </div>
        </div>
        `;
    }
}
pintandoCategoriasLugo();

// Generando Usuarios 
function listaUsuarios() { 
    document.getElementById('usuarioActual').innerHTML = '';
    for (let i=0;i<usuarios.length;i++) {
        document.getElementById('usuarioActual').innerHTML += 
        `<option value="${ i }">${ usuarios[i].nombre } ${ usuarios[i].apellido }</option>`;
    }
}

listaUsuarios();

// Onchange para seleccionar un usuario
function cambiarUsuario () {
    let usuarioSeleccionado = document.querySelector('#usuarioActual').value;
    return usuarioSeleccionado;
}

// Ver Ordenes de un usuario con el boton de ver ordenes
function verOrdenes() {
    let usuario = cambiarUsuario();
    console.log(usuario);

    // Header Modal
    document.querySelector('#modalUserLabel').innerHTML = `${usuarios[usuario].nombre} , Estas Son Tus Ordenes.`;
    // Zona de Productos
    console.log(usuarios[usuario].ordenes.length);
    document.querySelector('#zona-productos').innerHTML = '';
    for(let i=0;i<usuarios[usuario].ordenes.length;i++) {
        document.querySelector('#zona-productos').innerHTML += `
            <p>
                <h3 style="color: #563D7C; font-weight: bold;">${ usuarios[usuario].ordenes[i].nombreProducto }</h3>
            </p>
            <p style="font-size: 18px;">
                ${usuarios[usuario].ordenes[i].descripcion}
            </p>
            <p class="ml-auto">
                <b style="font-size: 25px">$${usuarios[usuario].ordenes[i].precio}</b>
            </p>
            <hr>
        `;
    }
}

// Ver info sobre categorias
function infoCategorias(idCategoria) {
    document.getElementById('zona-categorias').innerHTML = ``;
    $('#modalCategorias').modal('show');
        //console.log(categorias[idCategoria].nombreCategoria);
        document.getElementById('header-categorias').innerHTML = `${ categorias[idCategoria].nombreCategoria }`;
        
        for(let i=0;i<categorias[idCategoria].empresas.length;i++) {
            const productosPintar = categorias[idCategoria].empresas[i];
            let productos = '';
            for(let j=0;j<productosPintar.productos.length;j++) {
                productos += `
                    <div class="row p-2">
                        <div class="col-lg-7">
                            <h4 style="color:#563D7C;">${ productosPintar.productos[j].nombreProducto }</h4>
                        </div>
                        <div class="col-lg-5">
                            <input type="button" class="btn btn-secondary" onclick="pedir(${ idCategoria } , ${ i } ,${ j })" value="Pedir">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8">
                            <p>${ productosPintar.productos[j].descripcion }</p>
                        </div>
                        <div class="col-lg-4 ml-auto">
                            <b>$ ${ productosPintar.productos[j].precio }</b>
                        </div>
                    </div>
                    
                `;
            }
            document.getElementById('zona-categorias').innerHTML += `
                <div class="col-lg-6 col-sm-12 mt-2">
                    <div class="card" style="border-radius:12px">
                        <section>
                            <img src="img/banner.jpg" class="img-fluid" style="border-radius: 12px"/>
                            <h3 style="color: #fff; font-weight:bolder;">${ categorias[idCategoria].empresas[i].nombreEmpresa }</h3>
                        </section>
                        <section>
                            ${ productos }
                        </section>
                    </div>
                </div>
            `;
        }
};

// Funcion para pedir orden a los usuarios
function pedir (idCategoria , idEmpresa , idProducto) {
    console.log(idEmpresa)
    console.log(idProducto)
    $('#modalPedidos').modal('show');

    var nombreProduct = categorias[idCategoria].empresas[idEmpresa].productos[idProducto].nombreProducto;
    var description = categorias[idCategoria].empresas[idEmpresa].productos[idProducto].descripcion;
    var valor = categorias[idCategoria].empresas[idEmpresa].productos[idProducto].precio;
    document.getElementById('zona-pedidos').innerHTML =`
        <h3>${ categorias[idCategoria].empresas[idEmpresa].productos[idProducto].nombreProducto }</h3><br>
        <p>${ categorias[idCategoria].empresas[idEmpresa].productos[idProducto].descripcion }</p><br>
        <div class="row">
            <div class="col-lg-4">
                Cantidad A Solicitar : 
            </div>
            <div class="col-lg-8">
                <input type="text" class="form-control" id="txt-cantidad" />    
            </div>
        </div>
        <div class="row">
            <div class="col-lg-10 mr-auto">
                
            </div>
            <div class="col-lg-2"><br>
            <b>$ ${ categorias[idCategoria].empresas[idEmpresa].productos[idProducto].precio }</b>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" onclick="agregarPedido('${nombreProduct}','${description}',${valor})" 
            class="btn btn-secondary">
            Procesar Orden</button>
        </div>
    `;
}

// Funcion para agregar un producto nuevo a un usuario 
function agregarPedido(nombreProduct,description,valor) {
    let cantidad = document.getElementById('txt-cantidad').value;
    console.log(cantidad);
    console.log(nombreProduct);
    console.log(description);
    console.log(valor);
    let usuario = cambiarUsuario();
    console.log(usuario);

    let orden =
        {
            nombreProducto:nombreProduct,
            descripcion: description,
            cantidad: cantidad,
            precio: valor
        };
    usuarios[usuario].ordenes.push(orden);
    usuarios = localStorage.setItem('usuarios' , JSON.stringify(usuarios));
    usuarios = JSON.parse(localStorage.getItem('usuarios'));
    pintandoCategoriasLugo();
    listaUsuarios();
    $('#modalPedidos').modal('hide');
    $('#modalCategorias').modal('hide');
}

// creando una nueva categoria
function crearCategoria() {
    $('#modalPedidos').modal('hide');
    $('#modalCategorias').modal('hide');
    $('#modalCreacionCategoria').modal('show');

}

function guardar() {
    let txtnombre = document.getElementById('txt-nombre').value;
    let txtdescripcion = document.getElementById('txt-descripcion').value;
    let txtcolor = document.getElementById('txt-color').value;
    let txticono = document.getElementById('txt-icono').value;
    let categoria = 
    {
        nombreCategoria:txtnombre,
        descripcion:txtdescripcion,
        color:txtcolor,
        icono:txticono,
        empresas:[]
    };
    categorias.push(categoria);
    categorias = localStorage.setItem('categorias',JSON.stringify(categorias));
    categorias = JSON.parse(localStorage.getItem('categorias'));
    pintandoCategoriasLugo();
    $('#modalPedidos').modal('hide');
    $('#modalCategorias').modal('hide');
    $('#modalCreacionCategoria').modal('show');
}