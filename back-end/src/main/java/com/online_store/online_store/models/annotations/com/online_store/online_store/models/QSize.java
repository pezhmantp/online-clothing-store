package com.online_store.online_store.models.annotations.com.online_store.online_store.models;

import com.online_store.online_store.models.Size;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.PathMetadata;
import com.querydsl.core.types.dsl.EntityPathBase;
import com.querydsl.core.types.dsl.NumberPath;

import javax.annotation.processing.Generated;

import static com.querydsl.core.types.PathMetadataFactory.forVariable;


/**
 * QSize is a Querydsl query type for Size
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QSize extends EntityPathBase<Size> {

    private static final long serialVersionUID = -1569962536L;

    public static final QSize size = new QSize("size1");

    public final NumberPath<Long> sizeId = createNumber("sizeId", Long.class);

    public final NumberPath<Integer> sizeNo = createNumber("sizeNo", Integer.class);

    public QSize(String variable) {
        super(Size.class, forVariable(variable));
    }

    public QSize(Path<? extends Size> path) {
        super(path.getType(), path.getMetadata());
    }

    public QSize(PathMetadata metadata) {
        super(Size.class, metadata);
    }

}

