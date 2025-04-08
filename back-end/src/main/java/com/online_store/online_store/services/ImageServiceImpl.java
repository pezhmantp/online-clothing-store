package com.online_store.online_store.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;

import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class ImageServiceImpl implements ImageService {


    private Path fileStorageLocation;

    public ImageServiceImpl() {
        this.fileStorageLocation= Paths.get("/OCS/back-end/clothesImages").toAbsolutePath();
        try{
            Files.createDirectories(this.fileStorageLocation);
        }
        catch (Exception e)
        {
            throw new RuntimeException();
        }
    }

    @Override
    public Resource retrieveImage(String fileName) throws MalformedURLException {
        Path filePath = this.fileStorageLocation.resolve(fileName).normalize();
        System.out.println("//////// " + filePath);
        Resource resource = new UrlResource(filePath.toUri());
        if (resource.exists()) {
            return resource;
        } else {
            return null;
        }
    }
}