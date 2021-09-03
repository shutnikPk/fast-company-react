import React, { useState, FC } from 'react'
import User from './User'
import Pagination from './Pagination'
import { IUserItem } from '../types/types'
import PaginationList from '../utils/paginationList'

export interface TableProps {
    users: IUserItem[]
    onDelete: (userId: string) => void
    onFavorite: (userId: string, isFavorite: boolean | undefined) => void
}

const Table: FC<TableProps> = ({ users, onDelete, onFavorite }) => {
  const [currentPage, setCurrentPage] = useState<number>(1)

  const pageSize = 4

  const usersCrop: IUserItem[] = PaginationList(users, currentPage, pageSize)

  const pageChangeHandler = (indexPage: number) => {
    setCurrentPage(indexPage)
  }

  return (
        <>
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
                amountItems={users.length}
                pageSize={pageSize}
                onPageChange={pageChangeHandler}
                currentPage={currentPage}
            />
        </>
  )
}

export default Table
