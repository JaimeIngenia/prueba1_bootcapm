$(document).ready( ( ) => {

  $.ajax(
    {
        url: 'http://localhost:8080/zonas',
        type: 'GET',
        dataType: 'json',
        success: function(res){
            let data = '';
            res.forEach(element =>{
                data+= `
                <tr>
                    <td> ${element.id} </td>
                    <td> ${element.nombre} </td>
                    <td> ${element.descripcion} </td>
                </tr>
                `
            });

            $('#tbody').html(data)
        }
    }
  )




})












// let url="http://localhost:8080/zonas"
// let peticion={
//     method:"GET"
// }

// fetch(url,peticion)
// .then(function(respuesta){
//     return respuesta
// })
// .then(function(respuesta){
//     console.log(respuesta)
// })


// let url="http://localhost:8080/empresas"
// let peticion={
//     method:"GET"
// }

// fetch(url,peticion)
// .then(function(respuesta){
//     return respuesta.json()
// })
// .then(function(respuesta){
//     console.log(respuesta)
// })










