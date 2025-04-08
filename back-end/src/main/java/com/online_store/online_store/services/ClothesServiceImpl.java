package com.online_store.online_store.services;

import com.online_store.online_store.dtos.ClothesDto;
import com.online_store.online_store.dtos.ClothesResponse;
import com.online_store.online_store.models.Clothes;
import com.online_store.online_store.models.Image;
import com.online_store.online_store.models.Size;
import com.online_store.online_store.repositories.ClothesRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.ArrayList;
import java.util.List;

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

        }
        return 0L;
    }
    @Override
    public Long saveClothes(Clothes clothes) {
        try {
            clothesRepository.save(clothes);
            return clothes.getClothesId();
        }
        catch (Exception e){
            log.error(e.getMessage());

        }
        return 0L;
    }

    @Override
    public Boolean deleteClothes(Long clothesId) {
        try {
           clothesRepository.deleteById(clothesId);
           return true;
        }
        catch (Exception e)
        {
            log.error(e.getMessage());
        }
        return false;
    }

    @Override
    public Clothes findClothes(Long clothesId) {
        try {
            Clothes clothes= clothesRepository.findByClothesId(clothesId);
            return clothes;
        }
        catch (Exception e){
            log.error(e.getMessage());

        }
        return null;
    }

    @Override
    public List<ClothesResponse> getAllClothes() {
        List<Clothes> clothesList= clothesRepository.findAll();
        return mapToResponseDTO(clothesList);
    }
//    @Override
//    public List<Clothes> getAllClothes() {
//        List<Clothes> clothesList= clothesRepository.findAll();
//        return clothesList;
//    }
    private String generateImageUri(String imageName)
    {
        return ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/image/").path(imageName).toUriString();
    }
    private List<ClothesResponse> mapToResponseDTO(List<Clothes> clothes)
    {
        List<ClothesResponse> clothesResponses=new ArrayList<>();
        clothes.forEach(s->{
            List<String> imageUris=new ArrayList<>();
            s.getImages().forEach(image -> {
                imageUris.add(generateImageUri(image.getName()));
            });
            ClothesResponse clothesResponse=new ClothesResponse();
            clothesResponse.setImageUris(imageUris);
            clothesResponse.setClothes(s);
            clothesResponses.add(clothesResponse);
        });
        return clothesResponses;
    }
    @Override
    public ClothesResponse findClothesWithImages(Long clothesId) {
        Clothes clothes = clothesRepository.findByClothesId(clothesId);
        if(clothes == null)
        {
            return null;
        }
        List<Image> images = clothes.getImages();
        List<String> imageUris=new ArrayList<>();
        //System.out.println("########################### photosNames.size: " + photos.size());
        if(images.size() > 0)
        {

            images.forEach(p -> imageUris.add(
                    ServletUriComponentsBuilder.fromCurrentContextPath()
                            .path("/image/").path(p.getName()).toUriString()
            ));

            //  System.out.println("fetchImg2 : " + images);
            ClothesResponse clothesResponse=new ClothesResponse();
            clothesResponse.setClothes(clothes);
            clothesResponse.setImageUris(imageUris);
            return clothesResponse;
        }
        return null;
    }
    private Clothes mapClothesDtoToClothes(ClothesDto clothesDto)
    {
        List<Size> sizes=new ArrayList<>();
        sizes.add(new Size((Integer) clothesDto.getSize()));
        Clothes clothes=new Clothes();
        clothes.setClothesType(clothesDto.getClothesType());
        clothes.setBrand(clothesDto.getBrand());
        clothes.setGender(clothesDto.getGender());
        clothes.setColor(clothesDto.getColor());
        clothes.setPrice(clothesDto.getPrice());
        clothes.setSizes(sizes);
//        clothes.setMaterial(clothesDto.getMaterial());
        return clothes;
    }
}
