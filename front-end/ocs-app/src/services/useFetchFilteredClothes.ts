import { useLazyQuery, useQuery } from '@apollo/client';
import React from 'react'
import { GetAllClothesDocument, GetFilteredResultDocument } from '../gql/graphql';
import secureLocalStorage from 'react-secure-storage';
import { useSelector } from 'react-redux';

export default function useFetchFilteredClothes () {
  const selector=useSelector((state:any) => state.clothes.clothesFilter);
  const { loading, data } = useQuery(
    GetFilteredResultDocument,
    {
      variables: {
        brandsStr: selector.brand,
        minPrice: selector.minPrice,
        maxPrice: selector.maxPrice,
        size: selector.size,
        color: selector.color,
        clothesType: selector.type,
        gender: selector.gender
      },
      context: {
        headers: {
          authorization: `Bearer ${secureLocalStorage.getItem(
            "access_token"
          )}`,
        },
      },
    }
  );
function getData()
{
  return data;
}
return{getData}
}
