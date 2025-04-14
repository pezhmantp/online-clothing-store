package com.online_store.online_store.models.annotations.com.online_store.online_store.models;

import com.online_store.online_store.models.Clothes;
import com.online_store.online_store.models.Image;
import com.online_store.online_store.models.Size;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.PathMetadata;
import com.querydsl.core.types.dsl.*;

import javax.annotation.processing.Generated;

import static com.querydsl.core.types.PathMetadataFactory.forVariable;


/**
 * QClothes is a Querydsl query type for Clothes
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QClothes extends EntityPathBase<Clothes> {

    private static final long serialVersionUID = 201065233L;

    public static final QClothes clothes = new QClothes("clothes");

    public final StringPath brand = createString("brand");

    public final NumberPath<Long> clothesId = createNumber("clothesId", Long.class);

    public final StringPath clothesType = createString("clothesType");

    public final StringPath color = createString("color");

    public final StringPath gender = createString("gender");

    public final ListPath<Image, QImage> images = this.<Image, QImage>createList("images", Image.class, QImage.class, PathInits.DIRECT2);

    public final NumberPath<Long> price = createNumber("price", Long.class);

    public final ListPath<Size, QSize> sizes = this.<Size, QSize>createList("sizes", Size.class, QSize.class, PathInits.DIRECT2);

    public QClothes(String variable) {
        super(Clothes.class, forVariable(variable));
    }

    public QClothes(Path<? extends Clothes> path) {
        super(path.getType(), path.getMetadata());
    }

    public QClothes(PathMetadata metadata) {
        super(Clothes.class, metadata);
    }

}

