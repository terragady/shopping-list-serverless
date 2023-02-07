import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ObjectId: any;
};

export type DeleteManyPayload = {
  __typename?: 'DeleteManyPayload';
  deletedCount: Scalars['Int'];
};

export type InsertManyPayload = {
  __typename?: 'InsertManyPayload';
  insertedIds: Array<Maybe<Scalars['ObjectId']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteManyShoppingLists?: Maybe<DeleteManyPayload>;
  deleteManyToDos?: Maybe<DeleteManyPayload>;
  deleteManyZPolskis?: Maybe<DeleteManyPayload>;
  deleteOneShoppingList?: Maybe<ShoppingList>;
  deleteOneToDo?: Maybe<ToDo>;
  deleteOneZPolski?: Maybe<ZPolski>;
  insertManyShoppingLists?: Maybe<InsertManyPayload>;
  insertManyToDos?: Maybe<InsertManyPayload>;
  insertManyZPolskis?: Maybe<InsertManyPayload>;
  insertOneShoppingList?: Maybe<ShoppingList>;
  insertOneToDo?: Maybe<ToDo>;
  insertOneZPolski?: Maybe<ZPolski>;
  replaceOneShoppingList?: Maybe<ShoppingList>;
  replaceOneToDo?: Maybe<ToDo>;
  replaceOneZPolski?: Maybe<ZPolski>;
  updateManyShoppingLists?: Maybe<UpdateManyPayload>;
  updateManyToDos?: Maybe<UpdateManyPayload>;
  updateManyZPolskis?: Maybe<UpdateManyPayload>;
  updateOneShoppingList?: Maybe<ShoppingList>;
  updateOneToDo?: Maybe<ToDo>;
  updateOneZPolski?: Maybe<ZPolski>;
  upsertOneShoppingList?: Maybe<ShoppingList>;
  upsertOneToDo?: Maybe<ToDo>;
  upsertOneZPolski?: Maybe<ZPolski>;
};


export type MutationDeleteManyShoppingListsArgs = {
  query?: InputMaybe<ShoppingListQueryInput>;
};


export type MutationDeleteManyToDosArgs = {
  query?: InputMaybe<ToDoQueryInput>;
};


export type MutationDeleteManyZPolskisArgs = {
  query?: InputMaybe<ZPolskiQueryInput>;
};


export type MutationDeleteOneShoppingListArgs = {
  query: ShoppingListQueryInput;
};


export type MutationDeleteOneToDoArgs = {
  query: ToDoQueryInput;
};


export type MutationDeleteOneZPolskiArgs = {
  query: ZPolskiQueryInput;
};


export type MutationInsertManyShoppingListsArgs = {
  data: Array<ShoppingListInsertInput>;
};


export type MutationInsertManyToDosArgs = {
  data: Array<ToDoInsertInput>;
};


export type MutationInsertManyZPolskisArgs = {
  data: Array<ZPolskiInsertInput>;
};


export type MutationInsertOneShoppingListArgs = {
  data: ShoppingListInsertInput;
};


export type MutationInsertOneToDoArgs = {
  data: ToDoInsertInput;
};


export type MutationInsertOneZPolskiArgs = {
  data: ZPolskiInsertInput;
};


export type MutationReplaceOneShoppingListArgs = {
  data: ShoppingListInsertInput;
  query?: InputMaybe<ShoppingListQueryInput>;
};


export type MutationReplaceOneToDoArgs = {
  data: ToDoInsertInput;
  query?: InputMaybe<ToDoQueryInput>;
};


export type MutationReplaceOneZPolskiArgs = {
  data: ZPolskiInsertInput;
  query?: InputMaybe<ZPolskiQueryInput>;
};


export type MutationUpdateManyShoppingListsArgs = {
  query?: InputMaybe<ShoppingListQueryInput>;
  set: ShoppingListUpdateInput;
};


export type MutationUpdateManyToDosArgs = {
  query?: InputMaybe<ToDoQueryInput>;
  set: ToDoUpdateInput;
};


export type MutationUpdateManyZPolskisArgs = {
  query?: InputMaybe<ZPolskiQueryInput>;
  set: ZPolskiUpdateInput;
};


export type MutationUpdateOneShoppingListArgs = {
  query?: InputMaybe<ShoppingListQueryInput>;
  set: ShoppingListUpdateInput;
};


export type MutationUpdateOneToDoArgs = {
  query?: InputMaybe<ToDoQueryInput>;
  set: ToDoUpdateInput;
};


export type MutationUpdateOneZPolskiArgs = {
  query?: InputMaybe<ZPolskiQueryInput>;
  set: ZPolskiUpdateInput;
};


export type MutationUpsertOneShoppingListArgs = {
  data: ShoppingListInsertInput;
  query?: InputMaybe<ShoppingListQueryInput>;
};


export type MutationUpsertOneToDoArgs = {
  data: ToDoInsertInput;
  query?: InputMaybe<ToDoQueryInput>;
};


export type MutationUpsertOneZPolskiArgs = {
  data: ZPolskiInsertInput;
  query?: InputMaybe<ZPolskiQueryInput>;
};

export type Query = {
  __typename?: 'Query';
  shoppingList?: Maybe<ShoppingList>;
  shoppingLists: Array<Maybe<ShoppingList>>;
  toDo?: Maybe<ToDo>;
  toDos: Array<Maybe<ToDo>>;
  zPolski?: Maybe<ZPolski>;
  zPolskis: Array<Maybe<ZPolski>>;
};


export type QueryShoppingListArgs = {
  query?: InputMaybe<ShoppingListQueryInput>;
};


export type QueryShoppingListsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<ShoppingListQueryInput>;
  sortBy?: InputMaybe<ShoppingListSortByInput>;
};


export type QueryToDoArgs = {
  query?: InputMaybe<ToDoQueryInput>;
};


export type QueryToDosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<ToDoQueryInput>;
  sortBy?: InputMaybe<ToDoSortByInput>;
};


export type QueryZPolskiArgs = {
  query?: InputMaybe<ZPolskiQueryInput>;
};


export type QueryZPolskisArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<ZPolskiQueryInput>;
  sortBy?: InputMaybe<ZPolskiSortByInput>;
};

export type ShoppingList = {
  __typename?: 'ShoppingList';
  _id: Scalars['ObjectId'];
  addedBy: Scalars['String'];
  done: Scalars['Boolean'];
  product: Scalars['String'];
};

export type ShoppingListInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  addedBy: Scalars['String'];
  done: Scalars['Boolean'];
  product: Scalars['String'];
};

export type ShoppingListQueryInput = {
  AND?: InputMaybe<Array<ShoppingListQueryInput>>;
  OR?: InputMaybe<Array<ShoppingListQueryInput>>;
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['ObjectId']>;
  _id_gte?: InputMaybe<Scalars['ObjectId']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  _id_lt?: InputMaybe<Scalars['ObjectId']>;
  _id_lte?: InputMaybe<Scalars['ObjectId']>;
  _id_ne?: InputMaybe<Scalars['ObjectId']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  addedBy?: InputMaybe<Scalars['String']>;
  addedBy_exists?: InputMaybe<Scalars['Boolean']>;
  addedBy_gt?: InputMaybe<Scalars['String']>;
  addedBy_gte?: InputMaybe<Scalars['String']>;
  addedBy_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  addedBy_lt?: InputMaybe<Scalars['String']>;
  addedBy_lte?: InputMaybe<Scalars['String']>;
  addedBy_ne?: InputMaybe<Scalars['String']>;
  addedBy_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  done?: InputMaybe<Scalars['Boolean']>;
  done_exists?: InputMaybe<Scalars['Boolean']>;
  done_ne?: InputMaybe<Scalars['Boolean']>;
  product?: InputMaybe<Scalars['String']>;
  product_exists?: InputMaybe<Scalars['Boolean']>;
  product_gt?: InputMaybe<Scalars['String']>;
  product_gte?: InputMaybe<Scalars['String']>;
  product_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  product_lt?: InputMaybe<Scalars['String']>;
  product_lte?: InputMaybe<Scalars['String']>;
  product_ne?: InputMaybe<Scalars['String']>;
  product_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum ShoppingListSortByInput {
  AddedbyAsc = 'ADDEDBY_ASC',
  AddedbyDesc = 'ADDEDBY_DESC',
  ProductAsc = 'PRODUCT_ASC',
  ProductDesc = 'PRODUCT_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type ShoppingListUpdateInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  addedBy?: InputMaybe<Scalars['String']>;
  addedBy_unset?: InputMaybe<Scalars['Boolean']>;
  done?: InputMaybe<Scalars['Boolean']>;
  done_unset?: InputMaybe<Scalars['Boolean']>;
  product?: InputMaybe<Scalars['String']>;
  product_unset?: InputMaybe<Scalars['Boolean']>;
};

export type ToDo = {
  __typename?: 'ToDo';
  _id: Scalars['ObjectId'];
  addedBy: Scalars['String'];
  done: Scalars['Boolean'];
  product: Scalars['String'];
};

export type ToDoInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  addedBy: Scalars['String'];
  done: Scalars['Boolean'];
  product: Scalars['String'];
};

export type ToDoQueryInput = {
  AND?: InputMaybe<Array<ToDoQueryInput>>;
  OR?: InputMaybe<Array<ToDoQueryInput>>;
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['ObjectId']>;
  _id_gte?: InputMaybe<Scalars['ObjectId']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  _id_lt?: InputMaybe<Scalars['ObjectId']>;
  _id_lte?: InputMaybe<Scalars['ObjectId']>;
  _id_ne?: InputMaybe<Scalars['ObjectId']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  addedBy?: InputMaybe<Scalars['String']>;
  addedBy_exists?: InputMaybe<Scalars['Boolean']>;
  addedBy_gt?: InputMaybe<Scalars['String']>;
  addedBy_gte?: InputMaybe<Scalars['String']>;
  addedBy_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  addedBy_lt?: InputMaybe<Scalars['String']>;
  addedBy_lte?: InputMaybe<Scalars['String']>;
  addedBy_ne?: InputMaybe<Scalars['String']>;
  addedBy_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  done?: InputMaybe<Scalars['Boolean']>;
  done_exists?: InputMaybe<Scalars['Boolean']>;
  done_ne?: InputMaybe<Scalars['Boolean']>;
  product?: InputMaybe<Scalars['String']>;
  product_exists?: InputMaybe<Scalars['Boolean']>;
  product_gt?: InputMaybe<Scalars['String']>;
  product_gte?: InputMaybe<Scalars['String']>;
  product_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  product_lt?: InputMaybe<Scalars['String']>;
  product_lte?: InputMaybe<Scalars['String']>;
  product_ne?: InputMaybe<Scalars['String']>;
  product_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum ToDoSortByInput {
  AddedbyAsc = 'ADDEDBY_ASC',
  AddedbyDesc = 'ADDEDBY_DESC',
  ProductAsc = 'PRODUCT_ASC',
  ProductDesc = 'PRODUCT_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type ToDoUpdateInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  addedBy?: InputMaybe<Scalars['String']>;
  addedBy_unset?: InputMaybe<Scalars['Boolean']>;
  done?: InputMaybe<Scalars['Boolean']>;
  done_unset?: InputMaybe<Scalars['Boolean']>;
  product?: InputMaybe<Scalars['String']>;
  product_unset?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateManyPayload = {
  __typename?: 'UpdateManyPayload';
  matchedCount: Scalars['Int'];
  modifiedCount: Scalars['Int'];
};

export type ZPolski = {
  __typename?: 'ZPolski';
  _id: Scalars['ObjectId'];
  addedBy: Scalars['String'];
  done: Scalars['Boolean'];
  product: Scalars['String'];
};

export type ZPolskiInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  addedBy: Scalars['String'];
  done: Scalars['Boolean'];
  product: Scalars['String'];
};

export type ZPolskiQueryInput = {
  AND?: InputMaybe<Array<ZPolskiQueryInput>>;
  OR?: InputMaybe<Array<ZPolskiQueryInput>>;
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['ObjectId']>;
  _id_gte?: InputMaybe<Scalars['ObjectId']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  _id_lt?: InputMaybe<Scalars['ObjectId']>;
  _id_lte?: InputMaybe<Scalars['ObjectId']>;
  _id_ne?: InputMaybe<Scalars['ObjectId']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  addedBy?: InputMaybe<Scalars['String']>;
  addedBy_exists?: InputMaybe<Scalars['Boolean']>;
  addedBy_gt?: InputMaybe<Scalars['String']>;
  addedBy_gte?: InputMaybe<Scalars['String']>;
  addedBy_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  addedBy_lt?: InputMaybe<Scalars['String']>;
  addedBy_lte?: InputMaybe<Scalars['String']>;
  addedBy_ne?: InputMaybe<Scalars['String']>;
  addedBy_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  done?: InputMaybe<Scalars['Boolean']>;
  done_exists?: InputMaybe<Scalars['Boolean']>;
  done_ne?: InputMaybe<Scalars['Boolean']>;
  product?: InputMaybe<Scalars['String']>;
  product_exists?: InputMaybe<Scalars['Boolean']>;
  product_gt?: InputMaybe<Scalars['String']>;
  product_gte?: InputMaybe<Scalars['String']>;
  product_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  product_lt?: InputMaybe<Scalars['String']>;
  product_lte?: InputMaybe<Scalars['String']>;
  product_ne?: InputMaybe<Scalars['String']>;
  product_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum ZPolskiSortByInput {
  AddedbyAsc = 'ADDEDBY_ASC',
  AddedbyDesc = 'ADDEDBY_DESC',
  ProductAsc = 'PRODUCT_ASC',
  ProductDesc = 'PRODUCT_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type ZPolskiUpdateInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  addedBy?: InputMaybe<Scalars['String']>;
  addedBy_unset?: InputMaybe<Scalars['Boolean']>;
  done?: InputMaybe<Scalars['Boolean']>;
  done_unset?: InputMaybe<Scalars['Boolean']>;
  product?: InputMaybe<Scalars['String']>;
  product_unset?: InputMaybe<Scalars['Boolean']>;
};

export type AddFromPolandVariables = Exact<{
  done?: InputMaybe<Scalars['Boolean']>;
  product: Scalars['String'];
  addedBy: Scalars['String'];
}>;


export type AddFromPoland = { __typename?: 'Mutation', insertOneZPolski?: { __typename?: 'ZPolski', _id: any, addedBy: string, done: boolean, product: string } | null };

export type AddShoppingListVariables = Exact<{
  done?: InputMaybe<Scalars['Boolean']>;
  product: Scalars['String'];
  addedBy: Scalars['String'];
}>;


export type AddShoppingList = { __typename?: 'Mutation', insertOneShoppingList?: { __typename?: 'ShoppingList', _id: any, addedBy: string, done: boolean, product: string } | null };

export type AddToDoVariables = Exact<{
  done?: InputMaybe<Scalars['Boolean']>;
  product: Scalars['String'];
  addedBy: Scalars['String'];
}>;


export type AddToDo = { __typename?: 'Mutation', insertOneToDo?: { __typename?: 'ToDo', _id: any, addedBy: string, done: boolean, product: string } | null };

export type DeleteFromPolandVariables = Exact<{
  _id: Scalars['ObjectId'];
}>;


export type DeleteFromPoland = { __typename?: 'Mutation', deleteOneZPolski?: { __typename?: 'ZPolski', _id: any, addedBy: string, done: boolean, product: string } | null };

export type DeleteManyFromPolandsVariables = Exact<{ [key: string]: never; }>;


export type DeleteManyFromPolands = { __typename?: 'Mutation', deleteManyZPolskis?: { __typename?: 'DeleteManyPayload', deletedCount: number } | null };

export type DeleteManyShoppingListsVariables = Exact<{ [key: string]: never; }>;


export type DeleteManyShoppingLists = { __typename?: 'Mutation', deleteManyShoppingLists?: { __typename?: 'DeleteManyPayload', deletedCount: number } | null };

export type DeleteManyToDosVariables = Exact<{ [key: string]: never; }>;


export type DeleteManyToDos = { __typename?: 'Mutation', deleteManyToDos?: { __typename?: 'DeleteManyPayload', deletedCount: number } | null };

export type DeleteShoppingListVariables = Exact<{
  _id: Scalars['ObjectId'];
}>;


export type DeleteShoppingList = { __typename?: 'Mutation', deleteOneShoppingList?: { __typename?: 'ShoppingList', _id: any, addedBy: string, done: boolean, product: string } | null };

export type DeleteToDoVariables = Exact<{
  _id: Scalars['ObjectId'];
}>;


export type DeleteToDo = { __typename?: 'Mutation', deleteOneToDo?: { __typename?: 'ToDo', _id: any, addedBy: string, done: boolean, product: string } | null };

export type FromPolandVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type FromPoland = { __typename?: 'Query', zPolskis: Array<{ __typename?: 'ZPolski', _id: any, addedBy: string, done: boolean, product: string } | null> };

export type ShoppingListsVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type ShoppingLists = { __typename?: 'Query', shoppingLists: Array<{ __typename?: 'ShoppingList', _id: any, addedBy: string, done: boolean, product: string } | null> };

export type ToDosVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type ToDos = { __typename?: 'Query', toDos: Array<{ __typename?: 'ToDo', _id: any, addedBy: string, done: boolean, product: string } | null> };

export type UpdateShoppingListVariables = Exact<{
  _id: Scalars['ObjectId'];
  done: Scalars['Boolean'];
  product?: InputMaybe<Scalars['String']>;
  addedBy?: InputMaybe<Scalars['String']>;
}>;


export type UpdateShoppingList = { __typename?: 'Mutation', updateOneShoppingList?: { __typename?: 'ShoppingList', _id: any, addedBy: string, done: boolean, product: string } | null };

export type UpdateFromPolandVariables = Exact<{
  _id: Scalars['ObjectId'];
  done: Scalars['Boolean'];
  product?: InputMaybe<Scalars['String']>;
  addedBy?: InputMaybe<Scalars['String']>;
}>;


export type UpdateFromPoland = { __typename?: 'Mutation', updateOneZPolski?: { __typename?: 'ZPolski', _id: any, addedBy: string, done: boolean, product: string } | null };

export type UpdateToDoVariables = Exact<{
  _id: Scalars['ObjectId'];
  done: Scalars['Boolean'];
  product?: InputMaybe<Scalars['String']>;
  addedBy?: InputMaybe<Scalars['String']>;
}>;


export type UpdateToDo = { __typename?: 'Mutation', updateOneToDo?: { __typename?: 'ToDo', _id: any, addedBy: string, done: boolean, product: string } | null };


export const AddFromPolandDocument = gql`
    mutation AddFromPoland($done: Boolean = false, $product: String!, $addedBy: String!) {
  insertOneZPolski(data: {done: $done, product: $product, addedBy: $addedBy}) {
    _id
    addedBy
    done
    product
  }
}
    `;
export type AddFromPolandMutationFn = Apollo.MutationFunction<AddFromPoland, AddFromPolandVariables>;

/**
 * __useAddFromPoland__
 *
 * To run a mutation, you first call `useAddFromPoland` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddFromPoland` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addFromPoland, { data, loading, error }] = useAddFromPoland({
 *   variables: {
 *      done: // value for 'done'
 *      product: // value for 'product'
 *      addedBy: // value for 'addedBy'
 *   },
 * });
 */
export function useAddFromPoland(baseOptions?: Apollo.MutationHookOptions<AddFromPoland, AddFromPolandVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddFromPoland, AddFromPolandVariables>(AddFromPolandDocument, options);
      }
export type AddFromPolandHookResult = ReturnType<typeof useAddFromPoland>;
export type AddFromPolandMutationResult = Apollo.MutationResult<AddFromPoland>;
export type AddFromPolandMutationOptions = Apollo.BaseMutationOptions<AddFromPoland, AddFromPolandVariables>;
export const AddShoppingListDocument = gql`
    mutation AddShoppingList($done: Boolean = false, $product: String!, $addedBy: String!) {
  insertOneShoppingList(data: {done: $done, product: $product, addedBy: $addedBy}) {
    _id
    addedBy
    done
    product
  }
}
    `;
export type AddShoppingListMutationFn = Apollo.MutationFunction<AddShoppingList, AddShoppingListVariables>;

/**
 * __useAddShoppingList__
 *
 * To run a mutation, you first call `useAddShoppingList` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddShoppingList` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addShoppingList, { data, loading, error }] = useAddShoppingList({
 *   variables: {
 *      done: // value for 'done'
 *      product: // value for 'product'
 *      addedBy: // value for 'addedBy'
 *   },
 * });
 */
export function useAddShoppingList(baseOptions?: Apollo.MutationHookOptions<AddShoppingList, AddShoppingListVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddShoppingList, AddShoppingListVariables>(AddShoppingListDocument, options);
      }
export type AddShoppingListHookResult = ReturnType<typeof useAddShoppingList>;
export type AddShoppingListMutationResult = Apollo.MutationResult<AddShoppingList>;
export type AddShoppingListMutationOptions = Apollo.BaseMutationOptions<AddShoppingList, AddShoppingListVariables>;
export const AddToDoDocument = gql`
    mutation AddToDo($done: Boolean = false, $product: String!, $addedBy: String!) {
  insertOneToDo(data: {done: $done, product: $product, addedBy: $addedBy}) {
    _id
    addedBy
    done
    product
  }
}
    `;
export type AddToDoMutationFn = Apollo.MutationFunction<AddToDo, AddToDoVariables>;

/**
 * __useAddToDo__
 *
 * To run a mutation, you first call `useAddToDo` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddToDo` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addToDo, { data, loading, error }] = useAddToDo({
 *   variables: {
 *      done: // value for 'done'
 *      product: // value for 'product'
 *      addedBy: // value for 'addedBy'
 *   },
 * });
 */
export function useAddToDo(baseOptions?: Apollo.MutationHookOptions<AddToDo, AddToDoVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddToDo, AddToDoVariables>(AddToDoDocument, options);
      }
export type AddToDoHookResult = ReturnType<typeof useAddToDo>;
export type AddToDoMutationResult = Apollo.MutationResult<AddToDo>;
export type AddToDoMutationOptions = Apollo.BaseMutationOptions<AddToDo, AddToDoVariables>;
export const DeleteFromPolandDocument = gql`
    mutation DeleteFromPoland($_id: ObjectId!) {
  deleteOneZPolski(query: {_id: $_id}) {
    _id
    addedBy
    done
    product
  }
}
    `;
export type DeleteFromPolandMutationFn = Apollo.MutationFunction<DeleteFromPoland, DeleteFromPolandVariables>;

/**
 * __useDeleteFromPoland__
 *
 * To run a mutation, you first call `useDeleteFromPoland` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFromPoland` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFromPoland, { data, loading, error }] = useDeleteFromPoland({
 *   variables: {
 *      _id: // value for '_id'
 *   },
 * });
 */
export function useDeleteFromPoland(baseOptions?: Apollo.MutationHookOptions<DeleteFromPoland, DeleteFromPolandVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFromPoland, DeleteFromPolandVariables>(DeleteFromPolandDocument, options);
      }
export type DeleteFromPolandHookResult = ReturnType<typeof useDeleteFromPoland>;
export type DeleteFromPolandMutationResult = Apollo.MutationResult<DeleteFromPoland>;
export type DeleteFromPolandMutationOptions = Apollo.BaseMutationOptions<DeleteFromPoland, DeleteFromPolandVariables>;
export const DeleteManyFromPolandsDocument = gql`
    mutation DeleteManyFromPolands {
  deleteManyZPolskis(query: {done: true}) {
    deletedCount
  }
}
    `;
export type DeleteManyFromPolandsMutationFn = Apollo.MutationFunction<DeleteManyFromPolands, DeleteManyFromPolandsVariables>;

/**
 * __useDeleteManyFromPolands__
 *
 * To run a mutation, you first call `useDeleteManyFromPolands` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyFromPolands` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyFromPolands, { data, loading, error }] = useDeleteManyFromPolands({
 *   variables: {
 *   },
 * });
 */
export function useDeleteManyFromPolands(baseOptions?: Apollo.MutationHookOptions<DeleteManyFromPolands, DeleteManyFromPolandsVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyFromPolands, DeleteManyFromPolandsVariables>(DeleteManyFromPolandsDocument, options);
      }
export type DeleteManyFromPolandsHookResult = ReturnType<typeof useDeleteManyFromPolands>;
export type DeleteManyFromPolandsMutationResult = Apollo.MutationResult<DeleteManyFromPolands>;
export type DeleteManyFromPolandsMutationOptions = Apollo.BaseMutationOptions<DeleteManyFromPolands, DeleteManyFromPolandsVariables>;
export const DeleteManyShoppingListsDocument = gql`
    mutation DeleteManyShoppingLists {
  deleteManyShoppingLists(query: {done: true}) {
    deletedCount
  }
}
    `;
export type DeleteManyShoppingListsMutationFn = Apollo.MutationFunction<DeleteManyShoppingLists, DeleteManyShoppingListsVariables>;

/**
 * __useDeleteManyShoppingLists__
 *
 * To run a mutation, you first call `useDeleteManyShoppingLists` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyShoppingLists` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyShoppingLists, { data, loading, error }] = useDeleteManyShoppingLists({
 *   variables: {
 *   },
 * });
 */
export function useDeleteManyShoppingLists(baseOptions?: Apollo.MutationHookOptions<DeleteManyShoppingLists, DeleteManyShoppingListsVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyShoppingLists, DeleteManyShoppingListsVariables>(DeleteManyShoppingListsDocument, options);
      }
export type DeleteManyShoppingListsHookResult = ReturnType<typeof useDeleteManyShoppingLists>;
export type DeleteManyShoppingListsMutationResult = Apollo.MutationResult<DeleteManyShoppingLists>;
export type DeleteManyShoppingListsMutationOptions = Apollo.BaseMutationOptions<DeleteManyShoppingLists, DeleteManyShoppingListsVariables>;
export const DeleteManyToDosDocument = gql`
    mutation DeleteManyToDos {
  deleteManyToDos(query: {done: true}) {
    deletedCount
  }
}
    `;
export type DeleteManyToDosMutationFn = Apollo.MutationFunction<DeleteManyToDos, DeleteManyToDosVariables>;

/**
 * __useDeleteManyToDos__
 *
 * To run a mutation, you first call `useDeleteManyToDos` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyToDos` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyToDos, { data, loading, error }] = useDeleteManyToDos({
 *   variables: {
 *   },
 * });
 */
export function useDeleteManyToDos(baseOptions?: Apollo.MutationHookOptions<DeleteManyToDos, DeleteManyToDosVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyToDos, DeleteManyToDosVariables>(DeleteManyToDosDocument, options);
      }
export type DeleteManyToDosHookResult = ReturnType<typeof useDeleteManyToDos>;
export type DeleteManyToDosMutationResult = Apollo.MutationResult<DeleteManyToDos>;
export type DeleteManyToDosMutationOptions = Apollo.BaseMutationOptions<DeleteManyToDos, DeleteManyToDosVariables>;
export const DeleteShoppingListDocument = gql`
    mutation DeleteShoppingList($_id: ObjectId!) {
  deleteOneShoppingList(query: {_id: $_id}) {
    _id
    addedBy
    done
    product
  }
}
    `;
export type DeleteShoppingListMutationFn = Apollo.MutationFunction<DeleteShoppingList, DeleteShoppingListVariables>;

/**
 * __useDeleteShoppingList__
 *
 * To run a mutation, you first call `useDeleteShoppingList` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteShoppingList` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteShoppingList, { data, loading, error }] = useDeleteShoppingList({
 *   variables: {
 *      _id: // value for '_id'
 *   },
 * });
 */
export function useDeleteShoppingList(baseOptions?: Apollo.MutationHookOptions<DeleteShoppingList, DeleteShoppingListVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteShoppingList, DeleteShoppingListVariables>(DeleteShoppingListDocument, options);
      }
export type DeleteShoppingListHookResult = ReturnType<typeof useDeleteShoppingList>;
export type DeleteShoppingListMutationResult = Apollo.MutationResult<DeleteShoppingList>;
export type DeleteShoppingListMutationOptions = Apollo.BaseMutationOptions<DeleteShoppingList, DeleteShoppingListVariables>;
export const DeleteToDoDocument = gql`
    mutation DeleteToDo($_id: ObjectId!) {
  deleteOneToDo(query: {_id: $_id}) {
    _id
    addedBy
    done
    product
  }
}
    `;
export type DeleteToDoMutationFn = Apollo.MutationFunction<DeleteToDo, DeleteToDoVariables>;

/**
 * __useDeleteToDo__
 *
 * To run a mutation, you first call `useDeleteToDo` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteToDo` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteToDo, { data, loading, error }] = useDeleteToDo({
 *   variables: {
 *      _id: // value for '_id'
 *   },
 * });
 */
export function useDeleteToDo(baseOptions?: Apollo.MutationHookOptions<DeleteToDo, DeleteToDoVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteToDo, DeleteToDoVariables>(DeleteToDoDocument, options);
      }
export type DeleteToDoHookResult = ReturnType<typeof useDeleteToDo>;
export type DeleteToDoMutationResult = Apollo.MutationResult<DeleteToDo>;
export type DeleteToDoMutationOptions = Apollo.BaseMutationOptions<DeleteToDo, DeleteToDoVariables>;
export const FromPolandDocument = gql`
    query FromPoland($limit: Int = 100) {
  zPolskis(limit: $limit) {
    _id
    addedBy
    done
    product
  }
}
    `;

/**
 * __useFromPoland__
 *
 * To run a query within a React component, call `useFromPoland` and pass it any options that fit your needs.
 * When your component renders, `useFromPoland` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFromPoland({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useFromPoland(baseOptions?: Apollo.QueryHookOptions<FromPoland, FromPolandVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FromPoland, FromPolandVariables>(FromPolandDocument, options);
      }
export function useFromPolandLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FromPoland, FromPolandVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FromPoland, FromPolandVariables>(FromPolandDocument, options);
        }
export type FromPolandHookResult = ReturnType<typeof useFromPoland>;
export type FromPolandLazyQueryHookResult = ReturnType<typeof useFromPolandLazyQuery>;
export type FromPolandQueryResult = Apollo.QueryResult<FromPoland, FromPolandVariables>;
export const ShoppingListsDocument = gql`
    query ShoppingLists($limit: Int = 100) {
  shoppingLists(limit: $limit, sortBy: PRODUCT_ASC) {
    _id
    addedBy
    done
    product
  }
}
    `;

/**
 * __useShoppingLists__
 *
 * To run a query within a React component, call `useShoppingLists` and pass it any options that fit your needs.
 * When your component renders, `useShoppingLists` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShoppingLists({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useShoppingLists(baseOptions?: Apollo.QueryHookOptions<ShoppingLists, ShoppingListsVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ShoppingLists, ShoppingListsVariables>(ShoppingListsDocument, options);
      }
export function useShoppingListsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ShoppingLists, ShoppingListsVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ShoppingLists, ShoppingListsVariables>(ShoppingListsDocument, options);
        }
export type ShoppingListsHookResult = ReturnType<typeof useShoppingLists>;
export type ShoppingListsLazyQueryHookResult = ReturnType<typeof useShoppingListsLazyQuery>;
export type ShoppingListsQueryResult = Apollo.QueryResult<ShoppingLists, ShoppingListsVariables>;
export const ToDosDocument = gql`
    query ToDos($limit: Int = 100) {
  toDos(limit: $limit) {
    _id
    addedBy
    done
    product
  }
}
    `;

/**
 * __useToDos__
 *
 * To run a query within a React component, call `useToDos` and pass it any options that fit your needs.
 * When your component renders, `useToDos` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useToDos({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useToDos(baseOptions?: Apollo.QueryHookOptions<ToDos, ToDosVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ToDos, ToDosVariables>(ToDosDocument, options);
      }
export function useToDosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ToDos, ToDosVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ToDos, ToDosVariables>(ToDosDocument, options);
        }
export type ToDosHookResult = ReturnType<typeof useToDos>;
export type ToDosLazyQueryHookResult = ReturnType<typeof useToDosLazyQuery>;
export type ToDosQueryResult = Apollo.QueryResult<ToDos, ToDosVariables>;
export const UpdateShoppingListDocument = gql`
    mutation UpdateShoppingList($_id: ObjectId!, $done: Boolean!, $product: String, $addedBy: String) {
  updateOneShoppingList(
    query: {_id: $_id}
    set: {done: $done, product: $product, addedBy: $addedBy}
  ) {
    _id
    addedBy
    done
    product
  }
}
    `;
export type UpdateShoppingListMutationFn = Apollo.MutationFunction<UpdateShoppingList, UpdateShoppingListVariables>;

/**
 * __useUpdateShoppingList__
 *
 * To run a mutation, you first call `useUpdateShoppingList` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateShoppingList` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateShoppingList, { data, loading, error }] = useUpdateShoppingList({
 *   variables: {
 *      _id: // value for '_id'
 *      done: // value for 'done'
 *      product: // value for 'product'
 *      addedBy: // value for 'addedBy'
 *   },
 * });
 */
export function useUpdateShoppingList(baseOptions?: Apollo.MutationHookOptions<UpdateShoppingList, UpdateShoppingListVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateShoppingList, UpdateShoppingListVariables>(UpdateShoppingListDocument, options);
      }
export type UpdateShoppingListHookResult = ReturnType<typeof useUpdateShoppingList>;
export type UpdateShoppingListMutationResult = Apollo.MutationResult<UpdateShoppingList>;
export type UpdateShoppingListMutationOptions = Apollo.BaseMutationOptions<UpdateShoppingList, UpdateShoppingListVariables>;
export const UpdateFromPolandDocument = gql`
    mutation UpdateFromPoland($_id: ObjectId!, $done: Boolean!, $product: String, $addedBy: String) {
  updateOneZPolski(
    query: {_id: $_id}
    set: {done: $done, product: $product, addedBy: $addedBy}
  ) {
    _id
    addedBy
    done
    product
  }
}
    `;
export type UpdateFromPolandMutationFn = Apollo.MutationFunction<UpdateFromPoland, UpdateFromPolandVariables>;

/**
 * __useUpdateFromPoland__
 *
 * To run a mutation, you first call `useUpdateFromPoland` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFromPoland` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFromPoland, { data, loading, error }] = useUpdateFromPoland({
 *   variables: {
 *      _id: // value for '_id'
 *      done: // value for 'done'
 *      product: // value for 'product'
 *      addedBy: // value for 'addedBy'
 *   },
 * });
 */
export function useUpdateFromPoland(baseOptions?: Apollo.MutationHookOptions<UpdateFromPoland, UpdateFromPolandVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateFromPoland, UpdateFromPolandVariables>(UpdateFromPolandDocument, options);
      }
export type UpdateFromPolandHookResult = ReturnType<typeof useUpdateFromPoland>;
export type UpdateFromPolandMutationResult = Apollo.MutationResult<UpdateFromPoland>;
export type UpdateFromPolandMutationOptions = Apollo.BaseMutationOptions<UpdateFromPoland, UpdateFromPolandVariables>;
export const UpdateToDoDocument = gql`
    mutation UpdateToDo($_id: ObjectId!, $done: Boolean!, $product: String, $addedBy: String) {
  updateOneToDo(
    query: {_id: $_id}
    set: {done: $done, product: $product, addedBy: $addedBy}
  ) {
    _id
    addedBy
    done
    product
  }
}
    `;
export type UpdateToDoMutationFn = Apollo.MutationFunction<UpdateToDo, UpdateToDoVariables>;

/**
 * __useUpdateToDo__
 *
 * To run a mutation, you first call `useUpdateToDo` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateToDo` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateToDo, { data, loading, error }] = useUpdateToDo({
 *   variables: {
 *      _id: // value for '_id'
 *      done: // value for 'done'
 *      product: // value for 'product'
 *      addedBy: // value for 'addedBy'
 *   },
 * });
 */
export function useUpdateToDo(baseOptions?: Apollo.MutationHookOptions<UpdateToDo, UpdateToDoVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateToDo, UpdateToDoVariables>(UpdateToDoDocument, options);
      }
export type UpdateToDoHookResult = ReturnType<typeof useUpdateToDo>;
export type UpdateToDoMutationResult = Apollo.MutationResult<UpdateToDo>;
export type UpdateToDoMutationOptions = Apollo.BaseMutationOptions<UpdateToDo, UpdateToDoVariables>;