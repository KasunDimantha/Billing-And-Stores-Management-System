package com.example.billingsystembackend.controller;


import com.example.billingsystembackend.entity.Billing;
import com.example.billingsystembackend.entity.Store;
import com.example.billingsystembackend.repository.BillingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class BillingController {

    @Autowired
    BillingRepository billingRepository;

    @PostMapping("/postNewBill")
    public List<Billing> postNewBill(@RequestBody List<Billing> newBill){

        return billingRepository.saveAll(newBill);
    }

    @GetMapping("/getBill")
    public List<Billing> getBill(){
        return billingRepository.findAll();
    }

    @GetMapping("/getBillById/{billId}")
    public Optional<Billing> getBillById(@PathVariable Long billId){
        return billingRepository.findById(billId);
    }

    @DeleteMapping("/deleteBillById/{billId}")
    public String deleteBillById(@PathVariable Long billId){
        billingRepository.deleteById(billId);
        return "BIll with id " +billId+ " has been deleted success.";
    }
}
