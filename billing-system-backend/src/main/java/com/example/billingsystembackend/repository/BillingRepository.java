package com.example.billingsystembackend.repository;

import com.example.billingsystembackend.entity.Billing;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BillingRepository extends JpaRepository<Billing, Long> {
}
