let url="http://localhost:8080/zonas/7"


let data={
    nombre:"prueba"
}

data=JSON.stringify(data)

let peticion={
    method:"DELETE",
    //body:data,
    /*headers: {
        "Content-Type": "application/json" // Establece la cabecera Content-Type a application/json
    }*/
}

fetch(url,peticion)
.then((respuesta)=>{
    return respuesta.json()
})
.then((respuesta)=>{
    console.log(respuesta)
})