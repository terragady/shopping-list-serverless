import CircleSpinner from 'components/loader/CircleSpinner'
import {
  AddShoppingListMutationOptions,
  DeleteManyFromPolandsMutationOptions,
  DeleteShoppingListMutationOptions,
  ShoppingList,
  ToDo,
  UpdateShoppingListMutationOptions,
  ZPolski,
} from 'generated/graphql'
import React from 'react'
import { realmApp } from 'realm'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1 0;
  .done {
    order: 1;
    background-color: rgb(88, 88, 88);
    color: grey;
    font-style: italic;
  }
`

const AddButton = styled.div`
  display: flex;
  border-radius: 20px;
  margin: 15px;
  justify-content: center;
  align-items: center;
  color: white;
  width: 200px;
  height: 50px;
  flex-shrink: 0;
  background-color: rgba(0, 128, 0, 0.719);
  box-sizing: border-box;
  align-self: center;
`
const AddModalButton = styled.div`
  display: flex;
  border-radius: 0 20px 20px 0;
  justify-content: center;
  align-items: center;
  color: white;
  width: 120px;
  height: 70px;
  background-color: rgba(0, 128, 0, 0.719);
  box-sizing: border-box;
  align-self: center;
`

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
`

const AddModalStyled = styled.div`
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translateX(-50%);
  width: 450px;
  max-width: 100%;
  background-color: white;
  border-radius: 15px;
  box-sizing: border-box;
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const StyledInput = styled.input`
  width: 100%;
  border-radius: 20px 0 0 20px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  outline: none;
  padding: 15px;
  font-size: 25px;
  height: 70px;
  color: #000081;
  background-color: rgba(0, 119, 255, 0.1);
`

const ListItem = styled.div`
  background-color: rgba(138, 138, 138, 0.4);
  color: #3b3b3b;
  border-radius: 10px;
  /* padding: 10px 10px 10px 10px; */
  margin-bottom: 10px;
  align-items: left;
  order: 0;
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  :hover {
    background-color: rgba(138, 138, 138, 1);
  }
`
const Box = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 5px;
  border: 2px solid rgba(240, 240, 240, 0.555);
  margin: 8px;
  flex-shrink: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none !important;
`

const Error = styled.div`
  box-sizing: border-box;
  border: 1px solid rgba(255, 0, 0, 0.2);
  background-color: rgba(255, 0, 0, 0.1);
  padding: 10px;
  border-radius: 10px;
  text-align: center;
`

const AddModal = ({ onClose, onAdd, setError }: { onClose: () => void; onAdd: (options: AddShoppingListMutationOptions) => void, setError: (e:string) => void }) => {
  const [name, setName] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  const submit = () => {
    if (name === '') return
    setLoading(true)
    onAdd({
      variables: {
        product: name,
        addedBy: realmApp.currentUser?.profile.name || 'unknown',
      },
      onCompleted: () => {
        setName('')
        setLoading(false)
        onClose()
      },
      onError: (e) => {
        setError(e.message)
        setLoading(false)
        onClose()
      },
    })
  }
  return (
    <ModalWrapper onClick={onClose}>
      <AddModalStyled onClick={e => e.stopPropagation()}>
        <StyledInput
          value={name}
          onChange={e => setName(e.target.value)}
          autoFocus
          enterKeyHint='go'
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === 'Go' || e.key === 'NumpadEnter') {
              submit()
            }
          }}
        />
        <AddModalButton onClick={submit}>{loading ? <CircleSpinner color='white' size={30} fast /> : 'add'}</AddModalButton>
      </AddModalStyled>
    </ModalWrapper>
  )
}

function List({
  data,
  onDelete,
  onAdd,
  onPatch,
  onDeleteMany,
}: {
  data: (ShoppingList | ToDo | ZPolski | null)[] | undefined
  onDelete: (options: DeleteShoppingListMutationOptions) => void
  onAdd: (options: AddShoppingListMutationOptions) => void
  onPatch: (options: UpdateShoppingListMutationOptions) => void
  onDeleteMany: (options?: DeleteManyFromPolandsMutationOptions) => void
}) {
  const [open, setOpen] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  return (
    <Wrapper>
      {open && <AddModal onClose={() => setOpen(false)} onAdd={onAdd} setError={setError} />}
      {error && (
        <Error onClick={() => setError(null)}>
          <code style={{ color: 'red' }}>Error: {error}</code>
          <br />
          <span style={{ fontSize: '0.5em' }}>Click to close</span>
        </Error>
      )}
      {data?.map(item => {
        return (
          <ListItem className={item?.done ? 'done' : ''} key={item?._id}>
            <Box
              onClick={e => {
                e.preventDefault()
                e.stopPropagation()
                onPatch({
                  variables: {
                    _id: item?._id!,
                    done: !item?.done,
                  },
                  onError: e => {
                    setError(e.message)
                  },
                })
              }}
            >
              {item?.done && '✔️'}
            </Box>
            {item?.product}
            {item?.done === true && (
              <div
                onClick={e => {
                  e.preventDefault()
                  e.stopPropagation()
                  onDelete({
                    variables: {
                      _id: item?._id!,
                    },
                    onError: e => {
                      setError(e.message)
                    },
                  })
                }}
                style={{ cursor: 'pointer', position: 'absolute', right: 0, padding: '0 10px', fontStyle: 'normal', color: 'red', fontWeight: 'bold' }}
              >
                X
              </div>
            )}
          </ListItem>
        )
      })}
      <AddButton
        onClick={() => {
          setOpen(true)
        }}
      >
        ADD
      </AddButton>

      {data?.some(e => e?.done) && (
        <div
          style={{
            order: '2',
            color: 'white',
            backgroundColor: 'red',
            textAlign: 'center',
            width: '150px',
            height: '35px',
            alignSelf: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '15px',
          }}
          onClick={() => onDeleteMany({
            onError: e => {
              setError(e.message)
            }
          })}
        >
          delete all done
        </div>
      )}
      <div style={{ order: '2', color: 'white' }}>{'.'}</div>
    </Wrapper>
  )
}

export default List
