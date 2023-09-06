$(document).ready( ( ) => {


    const list = () => {

        $.ajax(
        {
            url: 'http://localhost:8080/zonas',
            type: 'GET',
            dataType: 'json',
            success: function(res){
                let data = '';
                res.forEach(element =>{
                    data+= `
                    <tr alumnoId = ${element.id} >

                        <td> ${element.id} </td>
                        <td> ${element.nombre} </td>
                        <td> ${element.descripcion} </td>

                        <td> <button id="btn-details" class=" btn btn-warning " > Detalles  </button> </td>

                        <td> <button id="btn-delete" class=" btn btn-danger " > Eliminar  </button> </td>


                        
                        <td> <button id="btn-edit" class=" btn btn-info " > Editar  </button> </td>


                    </tr>
                    `
                });
    
                $('#tbody').html(data)
            }
        }
        )

    }


    const save = () =>{
        $('#agregar').on('click', function(){
            const datosAlumno = {
                nombre:$('#nombre').val(),
                descripcion:$('#descripcion').val(),

            }

            $.ajax({
                url:'http://localhost:8080/zonas',
                contentType: 'application/json',
                type: 'POST',
                data: JSON.stringify(datosAlumno),
                dataType: 'json',
                success: (data) =>{
                    $('#messages').html('Alumno Creado').css('display','block')

                    list();
                    reset();


                    console.log('Alumno registraro');
                }
            })




        })
    }


    // detalles del alumno


    const details = () => {
        $(document).on('click', '#btn-details' ,function(){
            let btnDetails = $(this)[0].parentElement.parentElement;
            let id = $(btnDetails).attr('alumnoId');
            
            $.ajax({
                url:'http://localhost:8080/zonas/'+ id,
                type: 'GET',
                dataType: 'json',
                success: (res) => {
                    let data = `
                        Nombre - ${res.nombre} - Descripcion - ${res.descripcion} <br></br>
                        <button id="btn-limpiar" class=" btn btn-warning " > Limpiar </button>
                    `

                    let alumno = $('#alumno-details').html(data);
                    $('#btn-limpiar').on('click', () => {
                        alumno.html('');
                    })
                }
            })

        })
    }





    // metodo para eliminar alumno

    const deleteAlumno = () => {
        $(document).on('click', '#btn-delete' , function () {

            if(confirm('Seguro que quiere eliminar ? ' )){





                let btnDetails = $(this)[0].parentElement.parentElement;
                let id = $(btnDetails).attr('alumnoId');
                console.log(id);
    
                $.ajax({
                    url:'http://localhost:8080/zonas/'+id,
                    type: 'DELETE',
                    dataType: 'json',
                    success: (res) => {
                        $('#messages').html('Usuario Eliminado').css('display','block');
                        list();
                    }
    
                })




            }







        })
    }


    //Rellenar los datos del alimno en el formulario

    const rellenarAlumno = () =>{
        $(document).on('click', '#btn-edit', function(){

            let btnDetails = $(this)[0].parentElement.parentElement;
            let id = $(btnDetails).attr('alumnoId');
            console.log(id);

            $('#agregar').hide();
            $('#editar').show();

            $.ajax({
                url: 'http://localhost:8080/zonas/'+id,
                type: 'GET',
                dataType: 'json',
                success: (res) => {
                    $('#id').val(res.id);
                    $('#nombre').val(res.nombre);
                    $('#descripcion').val(res.descripcion);
                }
            })

        })

    }


    //Metodo para modificar los datos

    const editAlumno = () => {
        $('#editar').on('click',function(){
            let id = $('#id').val();

            $('#agregar').css('display','none');
            $('#editar').css('display','block');

            const datosAlumno = {
                nombre:$('#nombre').val(),
                descripcion:$('#descripcion').val(),

            }

            $.ajax({
                
                url: 'http://localhost:8080/zonas/'+id,
                contentType: 'spplication/json',
                type: 'PUT',
                data:JSON.stringify(datosAlumno),
                dataType: 'json',
                success: (res) =>{
                    $('#messages').html('Alumno modificado').css('display','block');
                    $('#editar').css('display','none');
                    $('#agregar').css('display','block');

                    reset();
                    list();
                }

            })
            
        })
    }


    //metodo para limpiar el formulario
    const reset = () => {

        $('#nombre').val(''),
        $('#descripcion').val('')
        
    }

    //LLamadas a la funcion

    list();
    save();
    details();
    deleteAlumno();
    rellenarAlumno();
    editAlumno();

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










