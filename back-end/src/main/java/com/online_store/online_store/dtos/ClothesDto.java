package com.online_store.online_store.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ClothesDto {
    private String clothesType;
    private String brand;
    private Long price;
    private String color;
    private String gender;
    private Integer size;
}