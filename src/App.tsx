/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'

import Table from './components/Table'

import api from './API/index'
import { IUserItem } from './types/types'
import 'bootstrap/dist/css/bootstrap.css'
import GroupList from './components/gropList'

const usersResponse = api.users.fetchAll()

function App () {
  const [professions, setProffesion] = useState<any>()
  const [selectedProf, setSelectedProf] = useState<{}>()
  const [users, setUsers] = useState<Promise<IUserItem[]>>(usersResponse)

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProffesion(data))
  }, [])

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

  const handleProfessionSelect = (item:{}):void => {
    setSelectedProf(item)
    console.log(item)
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
