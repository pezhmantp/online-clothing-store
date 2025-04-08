package com.online_store.online_store.services;

import org.springframework.core.io.Resource;

import java.net.MalformedURLException;

public interface ImageService {
    Resource retrieveImage(String fileName) throws MalformedURLException;
}
