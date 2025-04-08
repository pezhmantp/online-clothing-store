/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Clothes = {
  __typename?: 'Clothes';
  brand?: Maybe<Scalars['String']['output']>;
  clothesId?: Maybe<Scalars['ID']['output']>;
  clothesType?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  images?: Maybe<Array<Maybe<Image>>>;
  price?: Maybe<Scalars['Float']['output']>;
  sizes?: Maybe<Array<Maybe<Size>>>;
};

export type ClothesResponse = {
  __typename?: 'ClothesResponse';
  clothes?: Maybe<Clothes>;
  imageUris?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Image = {
  __typename?: 'Image';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getAllClothes?: Maybe<Array<Maybe<ClothesResponse>>>;
  getClothesById?: Maybe<ClothesResponse>;
};


export type QueryGetClothesByIdArgs = {
  clothesId?: InputMaybe<Scalars['Float']['input']>;
};

export type Size = {
  __typename?: 'Size';
  size?: Maybe<Scalars['Int']['output']>;
  sizeId?: Maybe<Scalars['ID']['output']>;
};

export type GetAllClothesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllClothesQuery = { __typename?: 'Query', getAllClothes?: Array<{ __typename?: 'ClothesResponse', imageUris?: Array<string | null> | null, clothes?: { __typename?: 'Clothes', clothesId?: string | null, clothesType?: string | null, brand?: string | null, price?: number | null, color?: string | null, gender?: string | null } | null } | null> | null };

export type GetClothesByIdQueryVariables = Exact<{
  clothesId?: InputMaybe<Scalars['Float']['input']>;
}>;


export type GetClothesByIdQuery = { __typename?: 'Query', getClothesById?: { __typename?: 'ClothesResponse', imageUris?: Array<string | null> | null, clothes?: { __typename?: 'Clothes', clothesId?: string | null, clothesType?: string | null, brand?: string | null, price?: number | null, color?: string | null, gender?: string | null } | null } | null };


export const GetAllClothesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllClothes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllClothes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imageUris"}},{"kind":"Field","name":{"kind":"Name","value":"clothes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clothesId"}},{"kind":"Field","name":{"kind":"Name","value":"clothesType"}},{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllClothesQuery, GetAllClothesQueryVariables>;
export const GetClothesByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClothesById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"clothesId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getClothesById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"clothesId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"clothesId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imageUris"}},{"kind":"Field","name":{"kind":"Name","value":"clothes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clothesId"}},{"kind":"Field","name":{"kind":"Name","value":"clothesType"}},{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}}]}}]}}]}}]} as unknown as DocumentNode<GetClothesByIdQuery, GetClothesByIdQueryVariables>;