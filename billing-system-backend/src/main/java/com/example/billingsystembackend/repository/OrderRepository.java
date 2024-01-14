package com.example.billingsystembackend.repository;

import com.example.billingsystembackend.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
