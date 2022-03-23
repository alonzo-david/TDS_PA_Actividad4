//window.comunicacion.registroValido('OK')

window.comunicacion.inicioCorrecto(function(event, args){
    console.log(args)
})

let boton_solicitud = document.getElementById('consultar')
let input_tipo = document.getElementById('tipo')
let input_filtro = document.getElementById('filtro')
let imagen_respuesta = document.getElementById('respuesta')
boton_solicitud.addEventListener('click', realizarSolicitud)

function realizarSolicitud(){
    let tipo_vacio = input_tipo.value 
    let filtro_vacio = input_filtro.value 
    if(tipo_vacio == '' && filtro_vacio == ''){
        fetch('https://cataas.com/cat?json=true')
            .then(response => response.json())
            .then(gato => {
                console.log(gato)
                imagen_respuesta.setAttribute('src',`https://cataas.com/${gato.url}`)
                boton_editar.innerHTML = gato.id
            })
    }else if(tipo_vacio == '' && filtro_vacio != ''){
        fetch(`https://cataas.com/cat?filter=${filtro_vacio}&json=true`)
        .then(response => response.json())
        .then(gato => {
            console.log(gato)
            imagen_respuesta.setAttribute('src',`https://cataas.com/${gato.url}`)
        })
    }else if(tipo_vacio != '' && filtro_vacio == ''){
        fetch(`https://cataas.com/cat?type=${tipo_vacio}&json=true`)
        .then(response => response.json())
        .then(gato => {
            console.log(gato)
            imagen_respuesta.setAttribute('src',`https://cataas.com/${gato.url}`)
        })
    }else{
        fetch(`https://cataas.com/cat?type=${tipo_vacio}&filter=${filtro_vacio}&json=true`)
        .then(response => response.json())
        .then(gato => {
            console.log(gato)
            imagen_respuesta.setAttribute('src',`https://cataas.com/${gato.url}`)
        })
    }
}

