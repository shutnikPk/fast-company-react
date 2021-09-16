import React, { useState, useEffect, FC } from 'react'
import User from './User'

import NavBar from './NavBar'

import Pagination from './Pagination'
import { IUserItem, IProfession } from '../types/types'
import PaginationList from '../utils/paginationList'

export interface TableProps {
    users: IUserItem[]
    onDelete: (userId: string) => void
    onFavorite: (userId: string, isFavorite: boolean | undefined) => void
    selectedProf:IProfession|undefined
}

const Table: FC<TableProps> = ({ users, onDelete, onFavorite, selectedProf }) => {
  const [currentPage, setCurrentPage] = useState<number>(1)

  useEffect(() => setCurrentPage(1), [selectedProf])

  const pageSize = 2

  const filtredUsers:IUserItem[] = selectedProf ? users.filter((user:IUserItem) => user.profession._id === selectedProf._id) : users
  const amountOfUser: number = filtredUsers.length

  const usersCrop: IUserItem[] = PaginationList(filtredUsers, currentPage, pageSize)

  const pageChangeHandler = (indexPage: number) => {
    setCurrentPage(indexPage)
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
        <>
        <NavBar msg={letter(amountOfUser)} amountUsers={amountOfUser} />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Профессия</th>
                        <th scope="col">Встретился, раз</th>
                        <th scope="col">Оценка</th>
                        <th scope="col">В избранное</th>
                        <th scope="col">Удалить</th>
                    </tr>
                </thead>
                <tbody>
                    {usersCrop.map((user) => (
                        <User
                            onDelete={onDelete}
                            onFavorite={onFavorite}
                            key={user._id}
                            user={user}
                        />
                    ))}
                </tbody>
            </table>
            <Pagination
                amountItems={amountOfUser}
                pageSize={pageSize}
                onPageChange={pageChangeHandler}
                currentPage={currentPage}
            />
        </>
  )
}

export default Table
