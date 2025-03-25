package com.online_store.online_store.controllers;

import com.online_store.online_store.models.Clothes;
import com.online_store.online_store.services.ClothesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.ArrayList;
import java.util.List;

@Controller
//@CrossOrigin("http://localhost:3000")
public class ClothesQueryController {

    @Autowired
    private ClothesService clothesService;
    @QueryMapping
    public List<Clothes> getAllClothes() {

        return clothesService.getAllClothes();
    }
}
