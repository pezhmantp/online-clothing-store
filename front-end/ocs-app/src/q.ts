import { gql } from "@apollo/client";

const q1 = gql`
  query GetAllClothes {
    getAllClothes {
        imageUris
        clothes {
            clothesId
            clothesType
            brand
            price
            color
            gender
        }
    }
}
`;
const q2=gql`
query GetClothesById($clothesId: Float) {
    getClothesById(clothesId: $clothesId) {
        imageUris
        clothes {
            clothesId
            clothesType
            brand
            price
            color
            gender
        }
    }
}
`;

const q3=gql`
query GetFilteredResult($brandsStr:[String],$minPrice: Float,$maxPrice: Float,$size: Int,$color: String,$clothesType:String,$gender:String) {
    getFilteredResult(brandsStr:$brandsStr,minPrice: $minPrice,maxPrice: $maxPrice,size: $size,color: $color,clothesType: $clothesType,gender: $gender) {
        imageUris
        clothes {
            clothesId
            clothesType
            brand
            price
            color
            gender
        }
    }
}
`;







