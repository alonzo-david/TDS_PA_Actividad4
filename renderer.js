//window.comunicacion.registroValido('OK')

window.comunicacion.inicioCorrecto(function (event, args) {
    console.log(args)
})

let boton_solicitud = document.getElementById('consultar')


let input_filtro = document.getElementById('filtro')
let input_alto = document.getElementById('alto')
let input_ancho = document.getElementById('ancho')


let imagen_respuesta = document.getElementById('respuesta')


boton_solicitud.addEventListener('click', realizarSolicitud)

function realizarSolicitud() {
    let filtro_vacio = input_filtro.value
    let alto_vacio = input_alto.value
    let ancho_vacio = input_ancho.value

    var endPoint = ""

    if (alto_vacio == '' && ancho_vacio == '' && filtro_vacio == '') {
        endPoint = `https://cataas.com/cat?json=true`;

    } else if (alto_vacio != '' && ancho_vacio == '' && filtro_vacio == '') {
        endPoint = `https://cataas.com/cat?height=${alto_vacio}&json=true`;        
    } else if (alto_vacio == '' && ancho_vacio != '' && filtro_vacio == '') {
        endPoint = `https://cataas.com/cat?width=${ancho_vacio}&json=true`; 
    } else if (alto_vacio == '' && ancho_vacio == '' && filtro_vacio != '') {
        endPoint = `https://cataas.com/cat?filter=${filtro_vacio}&json=true`; 
    } else if (alto_vacio != '' && ancho_vacio != '' && filtro_vacio == '') {
        endPoint = `https://cataas.com/cat?height=${alto_vacio}&width=${ancho_vacio}&json=true`; 
    } else if (alto_vacio != '' && ancho_vacio == '' && filtro_vacio != '') {
        endPoint = `https://cataas.com/cat?height=${alto_vacio}&filter=${filtro_vacio}&json=true`; 
    } else if (alto_vacio == '' && ancho_vacio != '' && filtro_vacio != '') {
        endPoint = `https://cataas.com/cat?width=${ancho_vacio}&filter=${filtro_vacio}&json=true`; 
    } else {
        endPoint = `https://cataas.com/cat?height=${alto_vacio}&width=${ancho_vacio}&filter=${filtro_vacio}&json=true`;         
    }


    fetch(endPoint)
        .then(response => response.json())
        .then(gato => {
            console.log(gato)
            imagen_respuesta.setAttribute('src', `https://cataas.com/${gato.url}`)
            //boton_editar.innerHTML = gato.id
        })
}

