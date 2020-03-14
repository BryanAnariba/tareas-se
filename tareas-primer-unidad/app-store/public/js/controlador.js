var appStore = [];
var localStorage =window.localStorage;

if (localStorage.getItem('appStore') == null) {
    appStore = [
        {
            nombreCategoria: "Categoria 0",
            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
            aplicaciones: [
            {
                codigo: 1,
                nombre: "App 1",
                precio: "0.49",
                descripcion: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                icono: "img/app-icons/1.webp",
                instalada: false,
                app: "app/demo.apk",
                calificacion: 3,
                descargas: 1000,
                desarrollador: "Desarrollador 1",
                imagenes: [
                    "img/app-screenshots/1.webp",
                    "img/app-screenshots/2.webp",
                    "img/app-screenshots/3.webp"
                ],
                comentarios: [
                {
                    comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                    calificacion: 2,
                    fecha: "12/12/2012",
                    usuario: "Juan"
                },
                {
                    comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    calificacion: 1,
                    fecha: "12/12/2012",
                    usuario: "Pedro"
                },
                {
                    comentario: "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
                    calificacion: 4,
                    fecha: "12/12/2012",
                    usuario: "Maria"
                }
                ]
            },
            {
                codigo: 2,
                nombre: "App 2",
                precio: "0.3",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                icono: "img/app-icons/2.webp",
                instalada: false,
                app: "app/demo.apk",
                calificacion: 4,
                descargas: 1000,
                desarrollador: "Desarrollador 2",
                imagenes: [
                    "img/app-screenshots/1.webp",
                    "img/app-screenshots/2.webp",
                    "img/app-screenshots/3.webp"
                ],
                comentarios: [
                    {
                        comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        calificacion: 2,
                        fecha: "12/12/2012",
                        usuario: "Juan"
                    },
                    {
                        comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        calificacion: 3,
                        fecha: "12/12/2012",
                        usuario: "Pedro"
                    },
                    {
                        comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                        calificacion: 3,
                        fecha: "12/12/2012",
                        usuario: "Maria"
                    }
                ]
            },
            {
                codigo: 3,
                nombre: "App 3",
                precio: "1.50",
                descripcion: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                icono: "img/app-icons/3.webp",
                instalada: false,
                app: "app/demo.apk",
                calificacion: 3,
                descargas: 1000,
                desarrollador: "Desarrollador 1",
                imagenes: [
                    "img/app-screenshots/1.webp",
                    "img/app-screenshots/2.webp",
                    "img/app-screenshots/3.webp"
                ],
                comentarios: [
                {
                    comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                    calificacion: 2,
                    fecha: "12/12/2012",
                    usuario: "Juan"
                },
                {
                    comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    calificacion: 1,
                    fecha: "12/12/2012",
                    usuario: "Pedro"
                },
                {
                    comentario: "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
                    calificacion: 4,
                    fecha: "12/12/2012",
                    usuario: "Maria"
                }
                ]
            },{
                codigo: 4,
                nombre: "App 4",
                precio: "1.50",
                descripcion: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                icono: "img/app-icons/4.webp",
                instalada: false,
                app: "app/demo.apk",
                calificacion: 3,
                descargas: 1000,
                desarrollador: "Desarrollador 1",
                imagenes: [
                    "img/app-screenshots/1.webp",
                    "img/app-screenshots/2.webp",
                    "img/app-screenshots/3.webp"
                ],
                comentarios: [
                {
                    comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                    calificacion: 2,
                    fecha: "12/12/2012",
                    usuario: "Juan"
                },
                {
                    comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    calificacion: 1,
                    fecha: "12/12/2012",
                    usuario: "Pedro"
                },
                {
                    comentario: "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
                    calificacion: 4,
                    fecha: "12/12/2012",
                    usuario: "Maria"
                }
                ]
            }
            ]
        },
        {
            nombreCategoria: "Categoria 1",
            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
            aplicaciones: [
            {
                codigo: 11,
                nombre: "App 11",
                precio: "1.50",
                descripcion: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                icono: "img/app-icons/11.webp",
                instalada: false,
                app: "app/demo.apk",
                calificacion: 3,
                descargas: 1000,
                desarrollador: "Desarrollador 1",
                imagenes: [
                    "img/app-screenshots/1.webp",
                    "img/app-screenshots/2.webp",
                    "img/app-screenshots/3.webp"
                ],
                comentarios: [
                {
                    comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                    calificacion: 2,
                    fecha: "12/12/2012",
                    usuario: "Juan"
                },
                {
                    comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    calificacion: 1,
                    fecha: "12/12/2012",
                    usuario: "Pedro"
                },
                {
                    comentario: "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
                    calificacion: 4,
                    fecha: "12/12/2012",
                    usuario: "Maria"
                }
                ]
            },
            {
                codigo: 12,
                nombre: "App 12",
                precio: "0.3",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                icono: "img/app-icons/12.webp",
                instalada: false,
                app: "app/demo.apk",
                calificacion: 4,
                descargas: 1000,
                desarrollador: "Desarrollador 2",
                imagenes: [
                    "img/app-screenshots/1.webp",
                    "img/app-screenshots/2.webp",
                    "img/app-screenshots/3.webp"
                ],
                comentarios: [
                    {
                        comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        calificacion: 2,
                        fecha: "12/12/2012",
                        usuario: "Juan"
                    },
                    {
                        comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        calificacion: 3,
                        fecha: "12/12/2012",
                        usuario: "Pedro"
                    },
                    {
                        comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                        calificacion: 3,
                        fecha: "12/12/2012",
                        usuario: "Maria"
                    }
                ]
            },{
                codigo: 13,
                nombre: "App 13",
                precio: "1.50",
                descripcion: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                icono: "img/app-icons/13.webp",
                instalada: false,
                app: "app/demo.apk",
                calificacion: 3,
                descargas: 1000,
                desarrollador: "Desarrollador 1",
                imagenes: [
                    "img/app-screenshots/1.webp",
                    "img/app-screenshots/2.webp",
                    "img/app-screenshots/3.webp"
                ],
                comentarios: [
                {
                    comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                    calificacion: 2,
                    fecha: "12/12/2012",
                    usuario: "Juan"
                },
                {
                    comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    calificacion: 1,
                    fecha: "12/12/2012",
                    usuario: "Pedro"
                },
                {
                    comentario: "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
                    calificacion: 4,
                    fecha: "12/12/2012",
                    usuario: "Maria"
                }
                ]
            },{
                codigo: 14,
                nombre: "App 14",
                precio: "1.50",
                descripcion: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                icono: "img/app-icons/14.webp",
                instalada: false,
                app: "app/demo.apk",
                calificacion: 3,
                descargas: 1000,
                desarrollador: "Desarrollador 14",
                imagenes: [
                    "img/app-screenshots/1.webp",
                    "img/app-screenshots/2.webp",
                    "img/app-screenshots/3.webp"
                ],
                comentarios: [
                {
                    comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                    calificacion: 2,
                    fecha: "12/12/2012",
                    usuario: "Juan"
                },
                {
                    comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    calificacion: 1,
                    fecha: "12/12/2012",
                    usuario: "Pedro"
                },
                {
                    comentario: "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
                    calificacion: 4,
                    fecha: "12/12/2012",
                    usuario: "Maria"
                }
                ]
            }]
        },
        {
            nombreCategoria: "Categoria 2",
            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
            aplicaciones: [
            {
                codigo: 21,
                nombre: "App 21",
                precio: "1.50",
                descripcion: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                icono: "img/app-icons/1.webp",
                instalada: false,
                app: "app/demo.apk",
                calificacion: 3,
                descargas: 1000,
                desarrollador: "Desarrollador 1",
                imagenes: [
                    "img/app-screenshots/1.webp",
                    "img/app-screenshots/2.webp",
                    "img/app-screenshots/3.webp"
                ],
                comentarios: [
                {
                    comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                    calificacion: 2,
                    fecha: "12/12/2012",
                    usuario: "Juan"
                },
                {
                    comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    calificacion: 1,
                    fecha: "12/12/2012",
                    usuario: "Pedro"
                },
                {
                    comentario: "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
                    calificacion: 4,
                    fecha: "12/12/2012",
                    usuario: "Maria"
                }
                ]
            },{
                codigo: 23,
                nombre: "App 22",
                precio: "1.50",
                descripcion: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                icono: "img/app-icons/26.webp",
                instalada: false,
                app: "app/demo.apk",
                calificacion: 3,
                descargas: 1000,
                desarrollador: "Desarrollador 23",
                imagenes: [
                    "img/app-screenshots/1.webp",
                    "img/app-screenshots/2.webp",
                    "img/app-screenshots/3.webp"
                ],
                comentarios: [
                {
                    comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                    calificacion: 2,
                    fecha: "12/12/2012",
                    usuario: "Juan"
                },
                {
                    comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    calificacion: 1,
                    fecha: "12/12/2012",
                    usuario: "Pedro"
                },
                {
                    comentario: "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
                    calificacion: 4,
                    fecha: "12/12/2012",
                    usuario: "Maria"
                }
                ]
            },
            {
                codigo: 23,
                nombre: "App 23",
                precio: "0.3",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                icono: "img/app-icons/23.webp",
                instalada: false,
                app: "app/demo.apk",
                calificacion: 4,
                descargas: 1000,
                desarrollador: "Desarrollador 2",
                imagenes: [
                    "img/app-screenshots/1.webp",
                    "img/app-screenshots/2.webp",
                    "img/app-screenshots/3.webp"
                ],
                comentarios: [
                    {
                        comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        calificacion: 2,
                        fecha: "12/12/2012",
                        usuario: "Juan"
                    },
                    {
                        comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        calificacion: 3,
                        fecha: "12/12/2012",
                        usuario: "Pedro"
                    },
                    {
                        comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                        calificacion: 3,
                        fecha: "12/12/2012",
                        usuario: "Maria"
                    }
                ]
            },
            {
                codigo: 24,
                nombre: "App 24",
                precio: "0.3",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                icono: "img/app-icons/24.webp",
                instalada: false,
                app: "app/demo.apk",
                calificacion: 4,
                descargas: 1000,
                desarrollador: "Desarrollador 2",
                imagenes: [
                    "img/app-screenshots/1.webp",
                    "img/app-screenshots/2.webp",
                    "img/app-screenshots/3.webp"
                ],
                comentarios: [
                    {
                        comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        calificacion: 2,
                        fecha: "12/12/2012",
                        usuario: "Juan"
                    },
                    {
                        comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        calificacion: 3,
                        fecha: "12/12/2012",
                        usuario: "Pedro"
                    },
                    {
                        comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                        calificacion: 3,
                        fecha: "12/12/2012",
                        usuario: "Maria"
                    }
                ]
            }]
        },
        {
            nombreCategoria: "Categoria 3",
            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
            aplicaciones: [
            {
                codigo: 31,
                nombre: "App 31",
                precio: "1.50",
                descripcion: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                icono: "img/app-icons/31.webp",
                instalada: false,
                app: "app/demo.apk",
                calificacion: 3,
                descargas: 1000,
                desarrollador: "Desarrollador 1",
                imagenes: [
                    "img/app-screenshots/1.webp",
                    "img/app-screenshots/2.webp",
                    "img/app-screenshots/3.webp"
                ],
                comentarios: [
                {
                    comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                    calificacion: 2,
                    fecha: "12/12/2012",
                    usuario: "Juan"
                },
                {
                    comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    calificacion: 1,
                    fecha: "12/12/2012",
                    usuario: "Pedro"
                },
                {
                    comentario: "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
                    calificacion: 4,
                    fecha: "12/12/2012",
                    usuario: "Maria"
                }
                ]
            },
            {
                codigo: 32,
                nombre: "App 32",
                precio: "0.3",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                icono: "img/app-icons/32.webp",
                instalada: false,
                app: "app/demo.apk",
                calificacion: 4,
                descargas: 1000,
                desarrollador: "Desarrollador 2",
                imagenes: [
                    "img/app-screenshots/1.webp",
                    "img/app-screenshots/2.webp",
                    "img/app-screenshots/3.webp"
                ],
                comentarios: [
                    {
                        comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        calificacion: 2,
                        fecha: "12/12/2012",
                        usuario: "Juan"
                    },
                    {
                        comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        calificacion: 3,
                        fecha: "12/12/2012",
                        usuario: "Pedro"
                    },
                    {
                        comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                        calificacion: 3,
                        fecha: "12/12/2012",
                        usuario: "Maria"
                    }
                ]
            },
            {
                codigo: 33,
                nombre: "App 33",
                precio: "1.50",
                descripcion: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                icono: "img/app-icons/33.webp",
                instalada: false,
                app: "app/demo.apk",
                calificacion: 3,
                descargas: 1000,
                desarrollador: "Desarrollador 1",
                imagenes: [
                    "img/app-screenshots/1.webp",
                    "img/app-screenshots/2.webp",
                    "img/app-screenshots/3.webp"
                ],
                comentarios: [
                {
                    comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                    calificacion: 2,
                    fecha: "12/12/2012",
                    usuario: "Juan"
                },
                {
                    comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    calificacion: 1,
                    fecha: "12/12/2012",
                    usuario: "Pedro"
                },
                {
                    comentario: "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
                    calificacion: 4,
                    fecha: "12/12/2012",
                    usuario: "Maria"
                }
                ]
            },
            {
                codigo: 34,
                nombre: "App 34",
                precio: "1.50",
                descripcion: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                icono: "img/app-icons/34.webp",
                instalada: false,
                app: "app/demo.apk",
                calificacion: 3,
                descargas: 1000,
                desarrollador: "Desarrollador 1",
                imagenes: [
                    "img/app-screenshots/1.webp",
                    "img/app-screenshots/2.webp",
                    "img/app-screenshots/3.webp"
                ],
                comentarios: [
                {
                    comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                    calificacion: 2,
                    fecha: "12/12/2012",
                    usuario: "Juan"
                },
                {
                    comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    calificacion: 1,
                    fecha: "12/12/2012",
                    usuario: "Pedro"
                },
                {
                    comentario: "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
                    calificacion: 4,
                    fecha: "12/12/2012",
                    usuario: "Maria"
                }
                ]
            }]
        },
        {
            nombreCategoria: "Categoria 4",
            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
            aplicaciones: [
            {
                codigo: 41,
                nombre: "App 41",
                precio: "1.50",
                descripcion: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                icono: "img/app-icons/41.webp",
                instalada: false,
                app: "app/demo.apk",
                calificacion: 3,
                descargas: 1000,
                desarrollador: "Desarrollador 1",
                imagenes: [
                    "img/app-screenshots/1.webp",
                    "img/app-screenshots/2.webp",
                    "img/app-screenshots/3.webp"
                ],
                comentarios: [
                {
                    comentario: "Quos numquam neque ani1amet consectetur adipisicing elit. Dolore, modi!",
                    calificacion: 1,
                    fecha: "12/12/2012",
                    usuario: "Pedro"
                },
                {
                    comentario: "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
                    calificacion: 4,
                    fecha: "12/12/2012",
                    usuario: "Maria"
                }
                ]
            },
            {
                codigo: 42,
                nombre: "App 42",
                precio: "0.3",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                icono: "img/app-icons/42.webp",
                instalada: false,
                app: "app/demo.apk",
                calificacion: 4,
                descargas: 1000,
                desarrollador: "Desarrollador 2",
                imagenes: [
                    "img/app-screenshots/1.webp",
                    "img/app-screenshots/2.webp",
                    "img/app-screenshots/3.webp"
                ],
                comentarios: [
                    {
                        comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        calificacion: 2,
                        fecha: "12/12/2012",
                        usuario: "Juan"
                    },
                    {
                        comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        calificacion: 3,
                        fecha: "12/12/2012",
                        usuario: "Pedro"
                    },
                    {
                        comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                        calificacion: 3,
                        fecha: "12/12/2012",
                        usuario: "Maria"
                    }
                ]
            }]
        },
    ];
    appStore = localStorage.setItem('appStore' ,JSON.stringify(appStore));
    appStore = JSON.parse(localStorage.getItem('appStore'));
    console.log(appStore);
} else {
    appStore = JSON.parse(localStorage.getItem('appStore'));
    console.log(appStore);
};

// Generando Listado de Categorias
function genearaCategorias () {
    document.getElementById('category').innerHTML = `<option value="#">Seleccione una Categoria</option>`;
    for (let i=0;i<appStore.length;i++) {
        document.querySelector('#category').innerHTML += `
            <option value="${ i }">${ appStore[i].nombreCategoria }</option>
        `;
    }
};
genearaCategorias ();

// Seleccionar una categoria
function selectionCategory (tagValue) {
    console.log(tagValue.value); //con esto sabremos el VALOR del option para pintar valores
    let tagVal = tagValue.value;
    if(tagVal == "#"){
        document.getElementById('apps-container').innerHTML = ``;
    }
    console.log(appStore[tagVal].aplicaciones);
    document.getElementById('apps-container').innerHTML = ``;
    for (let i=0;i<appStore[tagVal].aplicaciones.length; i++) {
        let calificacion = appStore[tagVal].aplicaciones[i].calificacion;
        let estrellitas = '';
        //console.log(calificacion); 
        for(k=1;k<=5;k++) {
            if (k>0 && k<=calificacion) {
                estrellitas += `
                    <i class="fa fa-star" style="color: #FFBC35"></i>
                `;
            } else {
                estrellitas += `
                <i class="far fa-star" style="color: #FFBC35"></i>
                `;
            }
        }

        // precio free
        let notificacionPrecio = '';
        if (appStore[tagVal].aplicaciones[i].precio < 0.5) {
            notificacionPrecio = 'Free'
        } else {
            notificacionPrecio = appStore[tagVal].aplicaciones[i].precio;
        }
        document.getElementById('apps-container').innerHTML += `
        <div class="col-lg-2 col-md-3 col-sm-6">
            <div    id="aplicacion-store" onclick="contenidoApp(${tagVal},${i})" 
                    class="card animated flipInY" 
                    data-toggle="modal" 
                    data-target="#modalApp">
                <div class="card-body">
                    <section>
                        <img src="/${appStore[tagVal].aplicaciones[i].icono}" class="img-fluid">
                    </section>
                    <section id="estrellitas">
                        <h4>${ appStore[tagVal].aplicaciones[i].nombre }</h4>
                        <span>Desarrollador 1</span>
                        ${ estrellitas}
                        <br>
                        <h4>${notificacionPrecio}</h4>
                    </section>
                    
                </div>
            </div>
        </div>
        `;
    }
}

function contenidoApp (idCategoria,idAplicacion) {
    document.getElementById('comentarios-usuario').innerHTML = ``;

    console.log(appStore[idCategoria].aplicaciones[idAplicacion]);
    for(let i=0;i<appStore[idCategoria].aplicaciones[idAplicacion].imagenes.length;i++) {
        document.getElementById('carousel-imagenes').innerHTML += `
            <div class="carousel-item active">
                <img src="/${appStore[idCategoria].aplicaciones[idAplicacion].imagenes[i]}" class="d-block w-100" alt="...">
            </div>
        `;
    }
    document.getElementById('img-app').innerHTML = `<img src="${appStore[idCategoria].aplicaciones[idAplicacion].icono}" width="80px"/>`;
    document.getElementById('datos-app').innerHTML = `
        <h4>${appStore[idCategoria].aplicaciones[idAplicacion].nombre}</h4>
        <p>${appStore[idCategoria].aplicaciones[idAplicacion].descripcion}</p>
        <h4>${appStore[idCategoria].aplicaciones[idAplicacion].precio}</h4>
    `;

    // Zona de las estrellitas
    let estrellas = '';
    for(k=1;k<=5;k++) {
        if (k>0 && k<=appStore[idCategoria].aplicaciones[idAplicacion].calificacion) {// ojo solo es puntuacion
            estrellas += `
                <i class="fa fa-star" style="color: #55BD25"></i>
            `;
        } else {
            estrellas += `
            <i class="far fa-star" style="color: #55BD25"></i>
            `;
        }
    }
    document.getElementById('calificacion').innerHTML = `${estrellas} ${appStore[idCategoria].aplicaciones[idAplicacion].calificacion}`

    // Zona de comentarios
    for(let i=0;i<appStore[idCategoria].aplicaciones[idAplicacion].comentarios.length;i++) {
        document.getElementById('comentarios-usuario').innerHTML += `
            <div class="row">
                <div class="col-lg-4">
                    <img src="/img/user.webp" />
                </div>
                <br>
                <div class="col-lg-8">
                    <p><b>${appStore[idCategoria].aplicaciones[idAplicacion].comentarios[i].usuario}</b></p>
                    <p>${appStore[idCategoria].aplicaciones[idAplicacion].comentarios[i].comentario}</p>
                </div>
            </div>        
        `;
    }
}

// Formulario para agregar una nueva aplicacion

function genCategories () {
    document.getElementById('select-category').innerHTML = `<option value="#">Seleccione una Categoria</option>`;
    for (let i=0;i<appStore.length;i++) {
        document.querySelector('#select-category').innerHTML += `
            <option value="${ i }">${ appStore[i].nombreCategoria }</option>
        `;
    }
};
genCategories ();

function saveApp () {
    let category = document.getElementById('select-category').value;
    console.log(category);
    let codigo = document.getElementById('codigo').value;
    let nombre = document.getElementById('nombre').value;
    let precio = document.getElementById('precio').value;
    let descripcion = document.getElementById('descripcion').value;
    let icono = document.getElementById('icono').value;
    let desarrollador = document.getElementById('desarrollador').value;
    let nuevaApp = {
        codigo: codigo ,
        nombre: nombre ,
        precio: precio ,
        descripcion: descripcion ,
        icono: icono ,
        instalada: false ,
        app: "app/demo.apk" ,
        calificacion: 0 ,
        descargas: 0 ,
        desarrollador: desarrollador ,
        imagenes: [] ,
        comentarios: []
    };
    console.log(appStore[category].aplicaciones);
    appStore[category].aplicaciones.push(nuevaApp);
    appStore = localStorage.setItem('appStore' , JSON.stringify(appStore));
    appStore = JSON.parse(localStorage.getItem('appStore'));

}