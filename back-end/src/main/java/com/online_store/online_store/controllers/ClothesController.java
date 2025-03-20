package com.online_store.online_store.controllers;

import com.online_store.online_store.dtos.ClothesDto;
import com.online_store.online_store.services.ClothesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/clothes")
public class ClothesController {
    @Autowired
    private ClothesService clothesService;

    @PostMapping
    public ResponseEntity<?> add(@RequestBody ClothesDto clothesDto){
        try {
            Long id= clothesService.saveClothes(clothesDto);
            return new ResponseEntity<>(id, HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
