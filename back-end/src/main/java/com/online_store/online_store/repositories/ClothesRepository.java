package com.online_store.online_store.repositories;

import com.online_store.online_store.models.Clothes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClothesRepository extends JpaRepository<Clothes, Long> {
    Clothes findByClothesId(Long id);
}