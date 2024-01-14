package com.example.billingsystembackend.repository;

import com.example.billingsystembackend.entity.Store;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface StoreRepository extends JpaRepository<Store, Long> {
    List<Store> findBySPname(String spname);
}
