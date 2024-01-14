package com.example.billingsystembackend.controller;


import com.example.billingsystembackend.entity.Store;
import com.example.billingsystembackend.repository.StoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:5173")
public class StoreController {

    @Autowired
    StoreRepository storeRepository;

    @PostMapping("/postNewItem")
    public List<Store> postNewAddress(@RequestBody List<Store> newItem){
        return storeRepository.saveAll(newItem);
    }

    @GetMapping("/getItems")
    public List<Store> getItems(){
        return storeRepository.findAll();
    }

    @GetMapping("/getItemById/{storeId}")
    public Optional<Store> getItemById(@PathVariable Long storeId){

        return storeRepository.findById(storeId);
    }

    @GetMapping("/getItemByName/{storeName}")
    public List<Store> getItemByName(@PathVariable List<String> name) {
        return storeRepository.findBySPname(name.toString());
    }

    @DeleteMapping("/deleteItemById/{storeId}")
    public String deleteItemById(@PathVariable Long storeId){
        storeRepository.deleteById(storeId);
        return "Address with id " +storeId+ " has been deleted success.";
    }

    @PutMapping("/updateStoreById/{storeId}")
    public Optional<Store> updateStoreById(@RequestBody Store newStore, @PathVariable Long storeId){
        return  storeRepository.findById(storeId)
                .map(store -> {
                    store.setSPname(newStore.getSPname());
                    store.setSquentity(newStore.getSquentity());
                    store.setSgetprice(newStore.getSgetprice());
                    store.setSsellprice(newStore.getSsellprice());
                    return storeRepository.save(store);
                });
    }
}
