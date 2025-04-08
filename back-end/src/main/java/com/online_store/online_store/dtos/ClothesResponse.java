package com.online_store.online_store.dtos;

import com.online_store.online_store.models.Clothes;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ClothesResponse {
    private Clothes clothes;
    private List<String> imageUris;
}


