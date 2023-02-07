import { useAddShoppingList, useDeleteManyShoppingLists, useDeleteShoppingList, useShoppingLists, useUpdateShoppingList } from 'generated/graphql'
import React from 'react'
import List from './List'
import CircleSpinner, { LoaderWrapper } from 'components/loader/CircleSpinner'

function ShoppingList() {
  const { data, loading, error } = useShoppingLists()
  const [deleteShoppingList] = useDeleteShoppingList({
    update: (cache, { data }) => {
      if (data?.deleteOneShoppingList) {
        cache.modify({
          fields: {
            shoppingLists(existingShoppingLists = [], { readField }) {
              return existingShoppingLists.filter((shoppingListRef: any) => data.deleteOneShoppingList?._id !== readField('_id', shoppingListRef))
            },
          },
        })
      }
    },
  })
  const [addShoppingList] = useAddShoppingList({
    update: (cache, { data }) => {
      if (data?.insertOneShoppingList) {
        cache.modify({
          fields: {
            shoppingLists(existingShoppingLists = []) {
              return [...existingShoppingLists, data.insertOneShoppingList]
            },
          },
        })
      }
    },
  })
  const [updateShoppingList] = useUpdateShoppingList({
    update: (cache, { data }) => {
      if (data?.updateOneShoppingList) {
        cache.modify({
          fields: {
            shoppingLists(existingShoppingLists = [], { readField }) {
              return existingShoppingLists.map((shoppingListRef: any) => {
                if (data.updateOneShoppingList?._id === readField('_id', shoppingListRef)) {
                  return data.updateOneShoppingList
                }
                return shoppingListRef
              })
            },
          },
        })
      }
    },
  })
  const [deleteManyShoppingLists] = useDeleteManyShoppingLists({
    refetchQueries: ['ShoppingLists'],
  })

  if (error) return <div>Error: {error.message}</div>
  if (!data && loading)
    return (
      <LoaderWrapper>
        <CircleSpinner size={40} />
      </LoaderWrapper>
    )
  if (!data) return null

  return (
    <List data={data.shoppingLists} onDelete={deleteShoppingList} onAdd={addShoppingList} onPatch={updateShoppingList} onDeleteMany={deleteManyShoppingLists} />
  )
}

export default ShoppingList
