package com.example.billingsystembackend.controller;

import com.example.billingsystembackend.entity.Order;
import com.example.billingsystembackend.entity.Store;
import com.example.billingsystembackend.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class OrderController {

    @Autowired
    OrderRepository orderRepository;

    @PostMapping("/postNewOrder")
    public List<Order> postNewOrder(@RequestBody List<Order> newOrder){

        return orderRepository.saveAll(newOrder);
    }

    @GetMapping("/getOrder")
    public List<Order> getOrder(){
        return orderRepository.findAll();
    }

    @GetMapping("/getOrderById/{orderId}")
    public Optional<Order> getItemById(@PathVariable Long orderId){
        return orderRepository.findById(orderId);
    }

    @DeleteMapping("/deleteOrderById/{orderId}")
    public String deleteOrderById(@PathVariable Long orderId){
        orderRepository.deleteById(orderId);
        return "Order with id " +orderId+ " has been deleted success.";
    }
}
