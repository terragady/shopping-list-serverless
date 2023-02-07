import { useAddToDo, useDeleteToDo, useToDos, useUpdateToDo } from 'generated/graphql'
import React from 'react'
import List from './List'
import CircleSpinner, { LoaderWrapper } from 'components/loader/CircleSpinner'

function ToDo() {
  const {data, loading, error} = useToDos()
  const [deleteToDo] = useDeleteToDo()
  const [addToDo] = useAddToDo()
  const [updateToDo] = useUpdateToDo()

  if (error) return (<div>Error: {error.message}</div>)
  if (!data && loading) return <LoaderWrapper><CircleSpinner size={40}/></LoaderWrapper>
  if (!data) return null;
  return (
    <List data={data?.toDos} onDelete={deleteToDo} onAdd={addToDo} onPatch={updateToDo}/>
  )
}

export default ToDo