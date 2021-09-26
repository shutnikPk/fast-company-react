/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'

import Table from './components/Table'

import api from './API/index'
import { IUserItem, IProfession } from './types/types'
import 'bootstrap/dist/css/bootstrap.css'
import GroupList from './components/gropList'

const usersResponse = api.users.fetchAll()

function App () {
  const [professions, setProffesion] = useState<IProfession[]>()
  const [selectedProf, setSelectedProf] = useState<IProfession>()
  const [users, setUsers] = useState<IUserItem[]>([])

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProffesion(data))
  }, [])

  useEffect(() => {
    api.users.fetchAll().then((data) => setUsers(data))
  }, [])

  const deleteHandler = (deletedId: string) => {
    if (!users) return
    const newState = users.filter((e) => e._id !== deletedId)
    setUsers(newState)
  }

  const addFavoriteHandler = (
    userId: string,
    isFavorite: boolean | undefined
  ): void => {
    if (!users) return
    const newState = users.map((e) => {
      if (e._id === userId) {
        e.bookmark = !e.bookmark
      }
      return e
    })
    setUsers(newState)
  }

  const handleProfessionSelect = (item:IProfession):void => {
    setSelectedProf(item)
  }

  const clearFilter = ():void => {
    setSelectedProf(undefined)
  }

  return (
        <div className="d-flex">
            {professions &&
            <div className="d-flex flex-column flex-srink-0 p-3">
              <GroupList selectedItem={selectedProf} items={professions} onItemSelect={handleProfessionSelect}/>
              <button className="btn btn-secondary mt-2" onClick={clearFilter}>Сброс</button>
            </div>
            }
            <div className="d-flex flex-column flex-srink-0 p-3">
              <Table
                  selectedProf={selectedProf}
                  onDelete={deleteHandler}
                  users={users}
                  onFavorite={addFavoriteHandler}
              />
            </div>
        </div>
  )
}

export default App
