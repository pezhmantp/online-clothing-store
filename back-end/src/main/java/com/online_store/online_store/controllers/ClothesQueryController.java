package com.online_store.online_store.controllers;

import com.online_store.online_store.dtos.ClothesResponse;
import com.online_store.online_store.models.Clothes;
import com.online_store.online_store.repositories.SearchCriteria;
import com.online_store.online_store.repositories.SearchOperation;
import com.online_store.online_store.services.ClothesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
//import org.springframework.security.access.annotation.Secured;
//import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.ArrayList;
import java.util.HashMap;
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
    @QueryMapping
    public List<ClothesResponse> getFilteredResult(@Argument List<String> brandsStr,@Argument Long minPrice,@Argument Long maxPrice,@Argument Integer size,
                                              @Argument String color, @Argument String clothesType, @Argument String gender) {

         System.out.println("????????? " + brandsStr);
        List<String> brands = brandsStr;
//    System.out.println("????????? " + brandsStr.length());
//    if(brandsStr.length()>0)
//    {
//
//        String [] tempStr=brandsStr.split("&");
//        for(String w:tempStr)
//        {
//            brands.add(w.substring(6));
//        }
//    }

        HashMap<String, SearchCriteria> hashMap = new HashMap<String,SearchCriteria>();
//
//        brands.add("vans");
//       brands.add("adidas");
        List<Long> price=new ArrayList<>();
//    price.add(1000L);
        price.add(minPrice);
//    price.add(3000L);
        price.add(maxPrice);
        hashMap.put("price",new SearchCriteria(price, SearchOperation.BETWEEN));
//
        hashMap.put("size",new SearchCriteria(size,SearchOperation.EQUAL));
        hashMap.put("brand",new SearchCriteria(brands,SearchOperation.EQUAL));
//       // hashMap.put("brand",new SearchCriteria("vvv",SearchOperation.EQUAL));
        hashMap.put("color",new SearchCriteria(color,SearchOperation.EQUAL));
        hashMap.put("clothesType",new SearchCriteria(clothesType,SearchOperation.EQUAL));
        hashMap.put("gender",new SearchCriteria(gender,SearchOperation.EQUAL));
        List<ClothesResponse> clothesResponseList= clothesService.getFilteredResult(hashMap);
        return clothesResponseList;
    }
}
