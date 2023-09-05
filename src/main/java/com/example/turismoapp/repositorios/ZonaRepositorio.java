package com.example.turismoapp.repositorios;

import com.example.turismoapp.modelos.Zona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ZonaRepositorio extends JpaRepository<Zona,Integer> {
}
