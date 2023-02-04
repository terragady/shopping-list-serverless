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
  deleteManyUsers?: Maybe<DeleteManyPayload>;
  deleteManyZPolskis?: Maybe<DeleteManyPayload>;
  deleteOneShoppingList?: Maybe<ShoppingList>;
  deleteOneToDo?: Maybe<ToDo>;
  deleteOneUser?: Maybe<User>;
  deleteOneZPolski?: Maybe<ZPolski>;
  insertManyShoppingLists?: Maybe<InsertManyPayload>;
  insertManyToDos?: Maybe<InsertManyPayload>;
  insertManyUsers?: Maybe<InsertManyPayload>;
  insertManyZPolskis?: Maybe<InsertManyPayload>;
  insertOneShoppingList?: Maybe<ShoppingList>;
  insertOneToDo?: Maybe<ToDo>;
  insertOneUser?: Maybe<User>;
  insertOneZPolski?: Maybe<ZPolski>;
  replaceOneShoppingList?: Maybe<ShoppingList>;
  replaceOneToDo?: Maybe<ToDo>;
  replaceOneUser?: Maybe<User>;
  replaceOneZPolski?: Maybe<ZPolski>;
  updateManyShoppingLists?: Maybe<UpdateManyPayload>;
  updateManyToDos?: Maybe<UpdateManyPayload>;
  updateManyUsers?: Maybe<UpdateManyPayload>;
  updateManyZPolskis?: Maybe<UpdateManyPayload>;
  updateOneShoppingList?: Maybe<ShoppingList>;
  updateOneToDo?: Maybe<ToDo>;
  updateOneUser?: Maybe<User>;
  updateOneZPolski?: Maybe<ZPolski>;
  upsertOneShoppingList?: Maybe<ShoppingList>;
  upsertOneToDo?: Maybe<ToDo>;
  upsertOneUser?: Maybe<User>;
  upsertOneZPolski?: Maybe<ZPolski>;
};


export type MutationDeleteManyShoppingListsArgs = {
  query?: InputMaybe<ShoppingListQueryInput>;
};


export type MutationDeleteManyToDosArgs = {
  query?: InputMaybe<ToDoQueryInput>;
};


export type MutationDeleteManyUsersArgs = {
  query?: InputMaybe<UserQueryInput>;
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


export type MutationDeleteOneUserArgs = {
  query: UserQueryInput;
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


export type MutationInsertManyUsersArgs = {
  data: Array<UserInsertInput>;
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


export type MutationInsertOneUserArgs = {
  data: UserInsertInput;
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


export type MutationReplaceOneUserArgs = {
  data: UserInsertInput;
  query?: InputMaybe<UserQueryInput>;
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


export type MutationUpdateManyUsersArgs = {
  query?: InputMaybe<UserQueryInput>;
  set: UserUpdateInput;
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


export type MutationUpdateOneUserArgs = {
  query?: InputMaybe<UserQueryInput>;
  set: UserUpdateInput;
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


export type MutationUpsertOneUserArgs = {
  data: UserInsertInput;
  query?: InputMaybe<UserQueryInput>;
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
  user?: Maybe<User>;
  users: Array<Maybe<User>>;
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


export type QueryUserArgs = {
  query?: InputMaybe<UserQueryInput>;
};


export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<UserQueryInput>;
  sortBy?: InputMaybe<UserSortByInput>;
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
  addedBy: User;
  done: Scalars['Boolean'];
  product: Scalars['String'];
};

export type ShoppingListAddedByRelationInput = {
  create?: InputMaybe<UserInsertInput>;
  link?: InputMaybe<Scalars['String']>;
};

export type ShoppingListInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  addedBy: ShoppingListAddedByRelationInput;
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
  addedBy?: InputMaybe<UserQueryInput>;
  addedBy_exists?: InputMaybe<Scalars['Boolean']>;
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
  addedBy?: InputMaybe<ShoppingListAddedByRelationInput>;
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
  task: Scalars['String'];
};

export type ToDoInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  addedBy: Scalars['String'];
  done: Scalars['Boolean'];
  task: Scalars['String'];
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
  task?: InputMaybe<Scalars['String']>;
  task_exists?: InputMaybe<Scalars['Boolean']>;
  task_gt?: InputMaybe<Scalars['String']>;
  task_gte?: InputMaybe<Scalars['String']>;
  task_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  task_lt?: InputMaybe<Scalars['String']>;
  task_lte?: InputMaybe<Scalars['String']>;
  task_ne?: InputMaybe<Scalars['String']>;
  task_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum ToDoSortByInput {
  AddedbyAsc = 'ADDEDBY_ASC',
  AddedbyDesc = 'ADDEDBY_DESC',
  TaskAsc = 'TASK_ASC',
  TaskDesc = 'TASK_DESC',
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
  task?: InputMaybe<Scalars['String']>;
  task_unset?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateManyPayload = {
  __typename?: 'UpdateManyPayload';
  matchedCount: Scalars['Int'];
  modifiedCount: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['ObjectId']>;
  name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

export type UserInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  name?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

export type UserQueryInput = {
  AND?: InputMaybe<Array<UserQueryInput>>;
  OR?: InputMaybe<Array<UserQueryInput>>;
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['ObjectId']>;
  _id_gte?: InputMaybe<Scalars['ObjectId']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  _id_lt?: InputMaybe<Scalars['ObjectId']>;
  _id_lte?: InputMaybe<Scalars['ObjectId']>;
  _id_ne?: InputMaybe<Scalars['ObjectId']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_ne?: InputMaybe<Scalars['String']>;
  name_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  user_id?: InputMaybe<Scalars['String']>;
  user_id_exists?: InputMaybe<Scalars['Boolean']>;
  user_id_gt?: InputMaybe<Scalars['String']>;
  user_id_gte?: InputMaybe<Scalars['String']>;
  user_id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  user_id_lt?: InputMaybe<Scalars['String']>;
  user_id_lte?: InputMaybe<Scalars['String']>;
  user_id_ne?: InputMaybe<Scalars['String']>;
  user_id_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum UserSortByInput {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type UserUpdateInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_unset?: InputMaybe<Scalars['Boolean']>;
  user_id?: InputMaybe<Scalars['String']>;
  user_id_unset?: InputMaybe<Scalars['Boolean']>;
};

export type ZPolski = {
  __typename?: 'ZPolski';
  _id: Scalars['ObjectId'];
  addedBy: Scalars['String'];
  done: Scalars['Boolean'];
  record: Scalars['String'];
};

export type ZPolskiInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  addedBy: Scalars['String'];
  done: Scalars['Boolean'];
  record: Scalars['String'];
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
  record?: InputMaybe<Scalars['String']>;
  record_exists?: InputMaybe<Scalars['Boolean']>;
  record_gt?: InputMaybe<Scalars['String']>;
  record_gte?: InputMaybe<Scalars['String']>;
  record_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  record_lt?: InputMaybe<Scalars['String']>;
  record_lte?: InputMaybe<Scalars['String']>;
  record_ne?: InputMaybe<Scalars['String']>;
  record_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum ZPolskiSortByInput {
  AddedbyAsc = 'ADDEDBY_ASC',
  AddedbyDesc = 'ADDEDBY_DESC',
  RecordAsc = 'RECORD_ASC',
  RecordDesc = 'RECORD_DESC',
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
  record?: InputMaybe<Scalars['String']>;
  record_unset?: InputMaybe<Scalars['Boolean']>;
};

export type ShoppingListsVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type ShoppingLists = { __typename?: 'Query', shoppingLists: Array<{ __typename?: 'ShoppingList', _id: any, done: boolean, product: string, addedBy: { __typename?: 'User', _id?: any | null, user_id?: string | null, name?: string | null } } | null> };


export const ShoppingListsDocument = gql`
    query ShoppingLists($limit: Int = 100) {
  shoppingLists(limit: $limit) {
    _id
    addedBy {
      _id
      user_id
      name
    }
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