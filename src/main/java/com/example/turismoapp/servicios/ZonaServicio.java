package com.example.turismoapp.servicios;

import com.example.turismoapp.modelos.Zona;
import com.example.turismoapp.repositorios.ZonaRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ZonaServicio {

    //Repositorio
    @Autowired
    ZonaRepositorio objetoZonaRepositorio;

    //CREAR

    public Zona registrarZona(Zona datosARegistrar ) throws Exception{
        try{
            return(this.objetoZonaRepositorio.save(datosARegistrar));

        }catch (Exception error){
            throw new Exception(error.getMessage());
        }
    }

    //MODIFICAR

    public Zona modificarZona(Integer id, Zona datosAModificar)throws Exception{
        try{

            //buscar que la empresa que tiene el id que envia el usuario exista en BD
            Optional<Zona> ZonaEncontrada=this.objetoZonaRepositorio.findById(id);
            //pregunto si lo que busque esta vacio (QUE NO ESTA)
            if(ZonaEncontrada.isEmpty()){
                throw new Exception("Empresa no encontrada");
            }
            //Rutina POR SI SI LA ENCONTRE
            //1.Convierto el opcional en la entidad respectiva
            Zona ZonaQueExiste=ZonaEncontrada.get();

            //2. A la empresa que existe le cambio la informacion que el usuario necesita
            ZonaQueExiste.setDescripcion(datosAModificar.getDescripcion());

            //3. Guardar la informacion que se acaba de editar (SET)
            return (this.objetoZonaRepositorio.save(ZonaQueExiste));


        }catch(Exception error){
            throw new Exception(error.getMessage());
        }
    }

    //BUSCAR TODAS LAS ZONAS
    public List<Zona> buscarTodasZonas() throws Exception{
        try{
            List<Zona>listaZonas= this.objetoZonaRepositorio.findAll();
            return listaZonas;

        }catch(Exception error){
            throw new Exception(error.getMessage());
        }
    }

    //BUSCAR UNA SOLA ZONA
    public Zona buscarZonaPorId(Integer id) throws Exception{
        try{
            Optional<Zona> ZonaOpcional= this.objetoZonaRepositorio.findById(id);
            if(ZonaOpcional.isEmpty()){
                throw new Exception("Empresa no encontrada");
            }
            return ZonaOpcional.get();
        }catch(Exception error){
            throw new Exception(error.getMessage());
        }
    }

    //METODO ELIMINAR
    public boolean eliminarZona(Integer id) throws  Exception{
        try{

            Optional<Zona> zonaOpcional=this.objetoZonaRepositorio.findById(id);

            if(zonaOpcional.isPresent()){
                this.objetoZonaRepositorio.deleteById(id);
                return true;
            }else{
                throw new Exception("Zona no encontrada");
            }


        }catch(Exception error){
            throw new Exception(error.getMessage());
        }
    }


}
