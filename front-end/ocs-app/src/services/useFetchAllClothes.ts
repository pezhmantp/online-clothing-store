import { useQuery } from '@apollo/client';
import React from 'react'
import { GetAllClothesDocument } from '../gql/graphql';
import secureLocalStorage from 'react-secure-storage';
import { useSelector } from 'react-redux';

export default function useFetchAllClothes() {
  
  const {loading, data} = useQuery(GetAllClothesDocument,{
  context: { headers: { authorization: `Bearer ${secureLocalStorage.getItem("access_token")}` } }
});
function getData()
{
  return data;
}
return{getData}
}
