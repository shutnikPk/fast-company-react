/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

import Table from './components/Table'
import NavBar from './components/NavBar'

import api from './API/index'
import { IUserItem } from './types/types'
import 'bootstrap/dist/css/bootstrap.css'
import GroupList from './components/gropList'

const usersResponse = api.users.fetchAll()

function App () {
  const [professions, setProffesion] = useState<any>(api.professions.fetchAll())
  const [users, setUsers] = useState<IUserItem[]>(usersResponse)

  const amountOfUser: number = users.length

  console.log(users)

  const deleteHandler = (deletedId: string) => {
    const newState = users.filter((e) => e._id !== deletedId)
    setUsers(newState)
  }

  const addFavoriteHandler = (
    userId: string,
    isFavorite: boolean | undefined
  ): void => {
    const newState = users.map((e) => {
      if (e._id === userId) {
        e.favorite = !e.favorite
      }
      return e
    })
    setUsers(newState)
  }

  const letter = (amount: number): string => {
    if (
      amount % 10 > 1 &&
            amount % 10 < 5 &&
            (amount < 10 || amount > 20)
    ) {
      return 'а'
    }
    return ''
  }

  const handleProfessionSelect = ():void => {
    console.log('sf')
  }

  return (
        <div>
            <NavBar msg={letter(amountOfUser)} amountUsers={amountOfUser} />
            <GroupList items={professions} onItemSelect={handleProfessionSelect}/>
            <Table
                onDelete={deleteHandler}
                users={users}
                onFavorite={addFavoriteHandler}
            />
        </div>
  )
}

export default App
