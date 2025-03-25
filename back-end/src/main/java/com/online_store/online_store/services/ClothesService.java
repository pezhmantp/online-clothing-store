package com.online_store.online_store.services;

import com.online_store.online_store.dtos.ClothesDto;
import com.online_store.online_store.models.Clothes;

import java.util.List;

public interface ClothesService {
    Long saveClothes(ClothesDto clothesDto);
    Long saveClothes(Clothes clothes);
    Clothes findClothes(Long clothesId);
    List<Clothes> getAllClothes();
}
