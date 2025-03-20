package com.online_store.online_store.controllers;

import com.online_store.online_store.models.Clothes;
import com.online_store.online_store.models.Image;
import com.online_store.online_store.services.ClothesService;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/image")
public class ImageController {
    private static String imageDirectory = System.getProperty("user.dir") + "/clothesImages/";
    @Autowired
    private ClothesService clothesService;
    private List<Image> images = new ArrayList<>();

    @PostMapping(consumes = "multipart/form-data")
    public ResponseEntity<?> addImage(@RequestParam("file1") MultipartFile[] file1, @RequestParam("clothesId") Long clothesId) {
        makeDirectory(imageDirectory);

        for (MultipartFile file : file1) {
            String fileName = UUID.randomUUID().toString() +file.getName().concat(".").concat(FilenameUtils.getExtension(file.getOriginalFilename()));
            Path fileNamePath = Paths.get(imageDirectory, fileName);
            try {
                Files.write(fileNamePath, file.getBytes());
                Image image = new Image();
                image.setName(fileName);
                images.add(image);
            }
            catch (IOException ex) {
                return new ResponseEntity<>("Image is not uploaded", HttpStatus.BAD_REQUEST);
            }
        }
        Clothes clothes = clothesService.findClothes(clothesId);
        clothes.setImages(images);
        clothesService.saveClothes(clothes);
        images.clear();
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    private void makeDirectory(String imageDirectory) {
        File directory = new File(imageDirectory);
        if (!directory.exists()) {
            directory.mkdir();
        }
    }
}
