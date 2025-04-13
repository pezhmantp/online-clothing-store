/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query GetAllClothes {\n    getAllClothes {\n        imageUris\n        clothes {\n            clothesId\n            clothesType\n            brand\n            price\n            color\n            gender\n        }\n    }\n}\n": typeof types.GetAllClothesDocument,
    "\nquery GetClothesById($clothesId: Float) {\n    getClothesById(clothesId: $clothesId) {\n        imageUris\n        clothes {\n            clothesId\n            clothesType\n            brand\n            price\n            color\n            gender\n        }\n    }\n}\n": typeof types.GetClothesByIdDocument,
    "\nquery GetFilteredResult($brandsStr:[String],$minPrice: Float,$maxPrice: Float,$size: Int,$color: String,$clothesType:String,$gender:String) {\n    getFilteredResult(brandsStr:$brandsStr,minPrice: $minPrice,maxPrice: $maxPrice,size: $size,color: $color,clothesType: $clothesType,gender: $gender) {\n        imageUris\n        clothes {\n            clothesId\n            clothesType\n            brand\n            price\n            color\n            gender\n        }\n    }\n}\n": typeof types.GetFilteredResultDocument,
};
const documents: Documents = {
    "\n  query GetAllClothes {\n    getAllClothes {\n        imageUris\n        clothes {\n            clothesId\n            clothesType\n            brand\n            price\n            color\n            gender\n        }\n    }\n}\n": types.GetAllClothesDocument,
    "\nquery GetClothesById($clothesId: Float) {\n    getClothesById(clothesId: $clothesId) {\n        imageUris\n        clothes {\n            clothesId\n            clothesType\n            brand\n            price\n            color\n            gender\n        }\n    }\n}\n": types.GetClothesByIdDocument,
    "\nquery GetFilteredResult($brandsStr:[String],$minPrice: Float,$maxPrice: Float,$size: Int,$color: String,$clothesType:String,$gender:String) {\n    getFilteredResult(brandsStr:$brandsStr,minPrice: $minPrice,maxPrice: $maxPrice,size: $size,color: $color,clothesType: $clothesType,gender: $gender) {\n        imageUris\n        clothes {\n            clothesId\n            clothesType\n            brand\n            price\n            color\n            gender\n        }\n    }\n}\n": types.GetFilteredResultDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllClothes {\n    getAllClothes {\n        imageUris\n        clothes {\n            clothesId\n            clothesType\n            brand\n            price\n            color\n            gender\n        }\n    }\n}\n"): (typeof documents)["\n  query GetAllClothes {\n    getAllClothes {\n        imageUris\n        clothes {\n            clothesId\n            clothesType\n            brand\n            price\n            color\n            gender\n        }\n    }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery GetClothesById($clothesId: Float) {\n    getClothesById(clothesId: $clothesId) {\n        imageUris\n        clothes {\n            clothesId\n            clothesType\n            brand\n            price\n            color\n            gender\n        }\n    }\n}\n"): (typeof documents)["\nquery GetClothesById($clothesId: Float) {\n    getClothesById(clothesId: $clothesId) {\n        imageUris\n        clothes {\n            clothesId\n            clothesType\n            brand\n            price\n            color\n            gender\n        }\n    }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery GetFilteredResult($brandsStr:[String],$minPrice: Float,$maxPrice: Float,$size: Int,$color: String,$clothesType:String,$gender:String) {\n    getFilteredResult(brandsStr:$brandsStr,minPrice: $minPrice,maxPrice: $maxPrice,size: $size,color: $color,clothesType: $clothesType,gender: $gender) {\n        imageUris\n        clothes {\n            clothesId\n            clothesType\n            brand\n            price\n            color\n            gender\n        }\n    }\n}\n"): (typeof documents)["\nquery GetFilteredResult($brandsStr:[String],$minPrice: Float,$maxPrice: Float,$size: Int,$color: String,$clothesType:String,$gender:String) {\n    getFilteredResult(brandsStr:$brandsStr,minPrice: $minPrice,maxPrice: $maxPrice,size: $size,color: $color,clothesType: $clothesType,gender: $gender) {\n        imageUris\n        clothes {\n            clothesId\n            clothesType\n            brand\n            price\n            color\n            gender\n        }\n    }\n}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;