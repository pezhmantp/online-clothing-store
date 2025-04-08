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




