package com.online_store.online_store.services;

import com.online_store.online_store.dtos.ClothesDto;
import com.online_store.online_store.dtos.ClothesResponse;
import com.online_store.online_store.models.*;
import com.online_store.online_store.models.annotations.com.online_store.online_store.models.QClothes;
import com.online_store.online_store.models.annotations.com.online_store.online_store.models.QImage;
import com.online_store.online_store.models.annotations.com.online_store.online_store.models.QSize;
import com.online_store.online_store.repositories.ClothesRepository;
import com.online_store.online_store.repositories.SearchCriteria;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.jpa.impl.JPAQuery;
import jakarta.persistence.EntityManager;
import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.ExpressionUtils;
import jakarta.persistence.PersistenceContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
public class ClothesServiceImpl implements ClothesService{
    private static final Logger log= LoggerFactory.getLogger(ClothesServiceImpl.class);
    @PersistenceContext
    private EntityManager entityManager;
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

    @Override
    public List<ClothesResponse> getFilteredResult(HashMap<String, SearchCriteria> hashMap) {
        JPAQuery<Clothes> query = new JPAQuery<Clothes>(entityManager);
        // JPQLQuery query = new JPAQuery(entityManager);
        BooleanBuilder predicate = new BooleanBuilder();
        QClothes clothes = QClothes.clothes;
        QImage image = QImage.image;
        QSize size = QSize.size;
        // predicate.and(size.sizeNo.eq(41));
        //   predicate.and(shoe.brand.eq("vans"));
        hashMap.forEach((key,value)->{
            if (value.getValue() != null)
            {
                // System.out.println("+++ " + value.getValue().getClass().getName());
                switch (key)
                {
                    case "price" : {
                        System.out.println(key);
                        ArrayList l=(ArrayList) value.getValue();
                        if(l.get(0) != null && l.get(1) != null) {
                            predicate.and(clothes.price.between((Long) l.get(0), (Long) l.get(1)));
                        }
                        break;
                    }
                    case "size" : {
                        predicate.and(size.sizeNo.eq((Integer) value.getValue()));
                        break;
                    }
                    case "color": {
                        predicate.and(clothes.color.eq((String) value.getValue()));
                        break;
                    }
                    case "clothesType": {
                        predicate.and(clothes.clothesType.eq((String) value.getValue()));
                        break;
                    }
                    case "gender": {
                        predicate.and(clothes.gender.eq((String) value.getValue()));
                        break;
                    }
                    case "brand" : {
                      //  System.out.println(key);
                        List<Predicate> predicates=new ArrayList<Predicate>();
                       // System.out.println("(((((( " + value.getValue());
                       List<String> l= (List<String>) value.getValue();
                       l.forEach((i)->{
                          predicates.add(clothes.brand.eq(i));
                       });

                        predicate.and(ExpressionUtils.anyOf(predicates));
                      //  predicates.forEach((i) -> {

                      //  });

                        break;
                    }

                }
            }
        });

        List<Clothes> filteredShoes = query
                .from(clothes)
                .leftJoin(clothes.sizes, size)
                .where(predicate)
                .fetch();

        filteredShoes.forEach(i->{
            System.out.println(i.getClothesId() +" "+i.getSizes() + " " + i.getBrand());
        });

        return mapToResponseDTO(filteredShoes);

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
        ClothesResponse clothesResponse=new ClothesResponse();
        clothesResponse.setClothes(clothes);
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

            clothesResponse.setImageUris(imageUris);
//            return clothesResponse;
        }
        return clothesResponse;
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
