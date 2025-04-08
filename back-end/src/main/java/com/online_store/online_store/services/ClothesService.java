package com.online_store.online_store.services;

import com.online_store.online_store.dtos.ClothesDto;
import com.online_store.online_store.dtos.ClothesResponse;
import com.online_store.online_store.models.Clothes;

import java.util.List;

public interface ClothesService {
    Long saveClothes(ClothesDto clothesDto);
    Long saveClothes(Clothes clothes);
    Boolean deleteClothes(Long clothesId);
    Clothes findClothes(Long clothesId);
    ClothesResponse findClothesWithImages(Long clothesId);
//    List<Clothes> getAllClothes();
    List<ClothesResponse> getAllClothes();
}
