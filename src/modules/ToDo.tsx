import { useAddToDo, useDeleteManyToDos, useDeleteToDo, useToDos, useUpdateToDo } from 'generated/graphql'
import React from 'react'
import List from './List'
import CircleSpinner, { LoaderWrapper } from 'components/loader/CircleSpinner'

function ToDo() {
  const { data, loading, error } = useToDos()
  const [deleteToDo] = useDeleteToDo({
    update: (cache, { data }) => {
      if (data?.deleteOneToDo) {
        cache.modify({
          fields: {
            toDos(existingToDos = [], { readField }) {
              return existingToDos.filter((toDoRef: any) => data.deleteOneToDo?._id !== readField('_id', toDoRef))
            },
          },
        })
      }
    },
  })
  const [addToDo] = useAddToDo({
    update: (cache, { data }) => {
      if (data?.insertOneToDo) {
        cache.modify({
          fields: {
            toDos(existingToDos = []) {
              return [...existingToDos, data.insertOneToDo]
            },
          },
        })
      }
    },
  })
  const [updateToDo] = useUpdateToDo()
  const [deleteManyToDos] = useDeleteManyToDos({
    refetchQueries: ['ToDos'],
  })

  if (error) return <div>Error: {error.message}</div>
  if (!data && loading)
    return (
      <LoaderWrapper>
        <CircleSpinner size={40} />
      </LoaderWrapper>
    )
  if (!data) return null
  return <List data={data?.toDos} onDelete={deleteToDo} onAdd={addToDo} onPatch={updateToDo} onDeleteMany={deleteManyToDos} />
}

export default ToDo
