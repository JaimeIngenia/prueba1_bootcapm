package com.example.turismoapp.controladores;

import com.example.turismoapp.modelos.Zona;
import com.example.turismoapp.servicios.ZonaServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("zonas")
public class ZonaControlador {

    @Autowired
    ZonaServicio objetoZonaServicio;
    //METODO CREAR
    @PostMapping
    public ResponseEntity<?> registrarZona(@RequestBody Zona datosZona){
        try{

            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(objetoZonaServicio.registrarZona(datosZona));

        }catch(Exception error){
            return  ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(error.getMessage());

        }
    }

    //METODO MODIFICAR

    @PutMapping("/{id}")
    public ResponseEntity<?> editarEmpresa(@RequestBody Zona datosNuevosZona, @PathVariable Integer id){
        try{

            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(objetoZonaServicio.modificarZona(id,datosNuevosZona));

        }catch(Exception error){
            return  ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(error.getMessage());

        }
    }


    //METODO BUSCAR TODAS
    @GetMapping
    public ResponseEntity<?> buscarTodasZonas(){
        try{

            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(objetoZonaServicio.buscarTodasZonas());

        }catch(Exception error){
            return  ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(error.getMessage());

        }
    }

    //METODO BUSCAR SOLO UNA

    @GetMapping("/{id}")
    public ResponseEntity<?> buscarUnaZona(@PathVariable Integer id){
        try{

            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(objetoZonaServicio.buscarZonaPorId(id));

        }catch(Exception error){
            return  ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(error.getMessage());

        }
    }

    //METODO ELIMINAR ZONA

    @DeleteMapping("/{id}")
    public ResponseEntity<?> borrarZona(@PathVariable Integer id){
        try{
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(objetoZonaServicio.eliminarZona(id));

        }catch(Exception error){
            return  ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(error.getMessage());

        }
    }

}
