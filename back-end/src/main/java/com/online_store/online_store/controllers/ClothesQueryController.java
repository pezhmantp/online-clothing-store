package com.online_store.online_store.controllers;

import com.online_store.online_store.dtos.ClothesResponse;
import com.online_store.online_store.models.Clothes;
import com.online_store.online_store.services.ClothesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
//import org.springframework.security.access.annotation.Secured;
//import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.ArrayList;
import java.util.List;

@Controller
public class ClothesQueryController {

    @Autowired
    private ClothesService clothesService;


//    @PreAuthorize("isAuthenticated()")
    @QueryMapping
    public List<ClothesResponse> getAllClothes() {

        return clothesService.getAllClothes();
    }
    @QueryMapping
    public ClothesResponse getClothesById(@Argument Long clothesId) {

        return clothesService.findClothesWithImages(clothesId);
    }
}
