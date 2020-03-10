// Array de POST
    var postVideos = [];
    var localStorage = window.localStorage;

if (localStorage.getItem('postVideos') == null) {
    postVideos = [
        {
            titulo: "Marcha de las Antorchas",
            urlCaratula: "img/1.jpg" ,
            canal: "Fuera JOH" ,
            visualizaciones: "19k" ,
            duracion: "35:25" ,
            subido: "19 hours ago" ,
        }
    ];

    var postVideos = localStorage.setItem('postVideos' , JSON.stringify(postVideos));
    var postVideos = JSON.parse(localStorage.getItem('postVideos'))
} else {
    var postVideos = JSON.parse(localStorage.getItem('postVideos'));
}

// Array de canales
var canales = [
    {

        canal: "Fuera JOH" ,
        descripcion: "Canal de Videos de marchas"
    } ,
    {
        canal: "Anime Cool" ,
        descripcion: "Canal de videos de anime Cool"
    } ,
    {
        canal: "Queen" ,
        descripcion: " Rey de la Bachata"
    } ,
    {
        canal: "LAX News" ,
        descripcion: "News of Ventura and Oxnard District"
    } ,
    {
        canal: 'Series' ,
        descripcion: 'News about some series that want to out in neflix'
    }
];


// Funcion listar Campos
function limpiaCasillas () {
    let titulo = document.querySelector('#txt-titulo').value = '';
    let urlCaratula = document.querySelector('#txt-url').value = '';
    let visualizaciones = document.querySelector('#txt-visualizaciones').value = '';
    let duracion = document.querySelector('#txt-duracion').value = '';
    let subido = document.querySelector('#txt-subida').value = '';  
}

function verifCampos(etiqueta) {
    if(etiqueta.value == '') {
        etiqueta.classList.remove('success');
        etiqueta.classList.add('danger');
        return true;
    } else {
        etiqueta.classList.remove('danger');
        etiqueta.classList.add('success');
        return false;
    }

}
// Configurando select de canales
function listarCanales () {
    document.querySelector('#data-canales').innerHTML = `<option value="#">Seleccione un Canal</option>`;
    for (let i=0; i<canales.length;i++) {
        document.querySelector('#data-canales').innerHTML += `
            <option value="${ canales[i].canal }">${ canales[i].canal }</option>
        `;
    }
}

listarCanales();


// Configuracion de listar canales ya almacenados en la base de datos localstorage
function listarPostGuardados () {
    document.getElementById('mostrar-videos').innerHTML = '';
    for (let cosa=0; cosa<postVideos.length; cosa++) {
        document.getElementById('mostrar-videos').innerHTML += `
        <div class="col-lg-2 col-md-4 col-sm-12 col-xs-12">
            <div class="body mt-3">
                <p id="titulo-video" class="text-white">${ postVideos[cosa].titulo } <br>    
                    <span class="bg-dark text-white pl-2 pr-2">${ postVideos[cosa].duracion }</span>
                </p>
                <img src="/${postVideos[cosa].urlCaratula}" class="img-fluid">
                <p class="font-weight-bold">
                    ${ postVideos[cosa].titulo }
                </p>
                <p id="titulo-footer" class="text-gray"> 
                    ${ postVideos[cosa].canal }
                    <br>
                    ${ postVideos[cosa].visualizaciones } | ${ postVideos[cosa].subido }
                </p>
            </div>
        </div>`;
    }
}

listarPostGuardados();

// Configuracion de guardado de video

function guardarPostVideo () {
    let titulo = document.querySelector('#txt-titulo').value;
    let urlCaratula = document.querySelector('#txt-url').value;
    let canal = document.querySelector('#data-canales').value; 
    let visualizaciones = document.querySelector('#txt-visualizaciones').value;
    let duracion = document.querySelector('#txt-duracion').value;
    let subido = document.querySelector('#txt-subida').value; 
    console.log(titulo);
    let postVideo = 
    {
        titulo: titulo ,
        urlCaratula: urlCaratula ,
        canal: canal ,
        visualizaciones: visualizaciones ,
        duracion: duracion ,
        subido: subido
    };

    postVideos.push(postVideo);
    limpiaCasillas();
    listarCanales();
    listarPostGuardados();
}