package com.online_store.online_store.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "clothes_tbl")
public class Clothes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "clothes_id")
    private Long clothesId;
    @Column(name = "clothes_type")
    private String clothesType;
    @Column(name = "brand")
    private String brand;
    @Column(name = "price")
    private Long price;
    @Column(name = "color")
    private String color;
    @Column(name = "gender")
    private String gender;
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "clothes_id")
    private List<Size> sizes;
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "clothes_id")
    private List<Image> images;
}
