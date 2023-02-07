import { useAddFromPoland, useDeleteFromPoland, useFromPoland, useUpdateFromPoland } from 'generated/graphql'
import React from 'react'
import List from './List'
import CircleSpinner, { LoaderWrapper } from 'components/loader/CircleSpinner'

function FromPoland() {
  const { data, loading, error } = useFromPoland()
  const [deleteFromPoland] = useDeleteFromPoland()
  const [addFromPoland] = useAddFromPoland()
  const [updateFromPoland] = useUpdateFromPoland()

  if (error) return (<div>Error: {error.message}</div>)

  if (!data && loading) return <LoaderWrapper><CircleSpinner size={40}/></LoaderWrapper>
  if (!data) return null;
  return (
    <List data={data?.zPolskis} onDelete={deleteFromPoland} onAdd={addFromPoland} onPatch={updateFromPoland} />
  )
}

export default FromPoland