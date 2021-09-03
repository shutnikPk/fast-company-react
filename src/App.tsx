import React from 'react'
import { useState } from 'react'
import Table from './components/Table'
import NavBar from './components/NavBar'
import api from './API/index'
import { IUserItem } from './types/types'
import 'bootstrap/dist/css/bootstrap.css'

const usersResponse = api.users.fetchAll()

function App() {
    const [users, setUsers] = useState<IUserItem[]>(usersResponse)

    const amountOfUser: number = users.length

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

    return (
        <div>
            <NavBar msg={letter(amountOfUser)} amountUsers={amountOfUser} />
            <Table
                onDelete={deleteHandler}
                users={users}
                onFavorite={addFavoriteHandler}
            />
        </div>
    )
}

export default App
