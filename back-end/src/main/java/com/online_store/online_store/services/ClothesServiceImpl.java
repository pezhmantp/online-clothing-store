package com.online_store.online_store.services;

import com.online_store.online_store.dtos.ClothesDto;
import com.online_store.online_store.models.Clothes;
import com.online_store.online_store.repositories.ClothesRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClothesServiceImpl implements ClothesService{
    private static final Logger log= LoggerFactory.getLogger(ClothesServiceImpl.class);
    @Autowired
    private ClothesRepository clothesRepository;
    public Long saveClothes(ClothesDto clothesDto) {
        try {
            Clothes clothes = clothesRepository.save(mapClothesDtoToClothes(clothesDto));
            return clothes.getClothesId();
        }
        catch (Exception e){
            log.error(e.getMessage());
            return 0L;
        }
    }
    @Override
    public Long saveClothes(Clothes clothes) {
        try {
            clothesRepository.save(clothes);
            return clothes.getClothesId();
        }
        catch (Exception e){
            log.error(e.getMessage());
            return 0L;
        }
    }
    @Override
    public Clothes findClothes(Long clothesId) {
        try {
            Clothes clothes= clothesRepository.findByClothesId(clothesId);
            return clothes;
        }
        catch (Exception e){
            log.error(e.getMessage());
            return  null;
        }

    }
    private Clothes mapClothesDtoToClothes(ClothesDto clothesDto)
    {
        Clothes clothes=new Clothes();
        clothes.setClothesType(clothesDto.getClothesType());
        clothes.setBrand(clothesDto.getBrand());
        clothes.setGender(clothesDto.getGender());
        clothes.setColor(clothesDto.getColor());
        clothes.setPrice(clothesDto.getPrice());
//        clothes.setMaterial(clothesDto.getMaterial());
        return clothes;
    }
}
