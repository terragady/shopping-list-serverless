import { useAddFromPoland, useDeleteFromPoland, useDeleteManyFromPolands, useFromPoland, useUpdateFromPoland } from 'generated/graphql'
import React from 'react'
import List from './List'
import CircleSpinner, { LoaderWrapper } from 'components/loader/CircleSpinner'

function FromPoland() {
  const { data, loading, error } = useFromPoland({
    fetchPolicy: 'cache-and-network'
  })
  const [deleteFromPoland] = useDeleteFromPoland({
    update: (cache, { data }) => {
      if (data?.deleteOneZPolski) {
        cache.modify({
          fields: {
            zPolskis(existingFromPoland = [], { readField }) {
              return existingFromPoland.filter(
                (fromPolandRef: any) => data.deleteOneZPolski?._id !== readField('_id', fromPolandRef)
              )
            },
          },
        })
      }
    }
  })
  const [addFromPoland] = useAddFromPoland({
    update: (cache, { data }) => {
      if (data?.insertOneZPolski) {
        cache.modify({
          fields: {
            zPolskis(existingFromPoland = []) {
              return [...existingFromPoland, data.insertOneZPolski]
            },
          },
        })
      }
    }
  })
  const [updateFromPoland] = useUpdateFromPoland()
  const [deleteManyFromPolands] = useDeleteManyFromPolands({
    refetchQueries: ['FromPolands']
  })

  if (error) return (<div>Error: {error.message}</div>)

  if (!data && loading) return <LoaderWrapper><CircleSpinner size={40}/></LoaderWrapper>
  if (!data) return null;
  return (
    <List data={data?.zPolskis} onDelete={deleteFromPoland} onAdd={addFromPoland} onPatch={updateFromPoland} onDeleteMany={deleteManyFromPolands}/>
  )
}

export default FromPoland