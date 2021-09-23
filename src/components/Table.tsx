import React, { useState, useEffect, FC } from 'react'
// import User from './User'
import TableBody from './TableBody'
import NavBar from './NavBar'

import Pagination from './Pagination'
import { IUserItem, IProfession, IColumn } from '../types/types'
import PaginationList from '../utils/paginationList'

import _ from 'lodash'
import TableHeader from './TableHeader'
import Bookmark from './Bookmark'

export interface TableProps {
    users: IUserItem[]
    onDelete: (userId: string) => void
    onFavorite: (userId: string, isFavorite: boolean | undefined) => void
    selectedProf:IProfession|undefined
}

const Table: FC<TableProps> = ({ users, onDelete, onFavorite, selectedProf }) => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [sortBy, setSortBy] = useState<{path:string, order:boolean|'asc'|'desc'}>({ path: 'name', order: 'asc' })

  useEffect(() => setCurrentPage(1), [selectedProf])

  const pageSize = 8

  const filtredUsers: IUserItem[] = selectedProf ? users.filter((user:IUserItem) => user.profession._id === selectedProf._id) : users
  const amountOfUser: number = filtredUsers.length
  const sortedUser: IUserItem[] = _.orderBy(filtredUsers, [sortBy.path], [sortBy.order])
  const usersCrop: IUserItem[] = PaginationList(sortedUser, currentPage, pageSize)

  const columns: {[key: string]: IColumn} = {
    name: {
      path: 'name',
      title: 'Имя'
    },
    qualities: {
      path: '',
      title: 'Качества'
    },
    profession: {
      path: 'profession.name',
      title: 'Профессия'
    },
    completedMeetings: {
      path: 'completedMeetings',
      title: 'Встретился Раз'
    },
    rate: {
      path: 'rate',
      title: 'Оценка'
    },
    bookmark: {
      path: 'bookmark',
      title: 'Избранное',
      component: (user:IUserItem) => (<Bookmark onFavorite={onFavorite} user={user}/>)
    },
    delete: {
      path: '',
      title: 'Удалить'
    }
  }

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

  const handleSort = (param?:string):void => {
    if (!param) return
    if (sortBy.path === param) {
      setSortBy((prevState) => ({ ...prevState, order: prevState.order === 'asc' ? 'desc' : 'asc' }))
    } else {
      setSortBy({ path: param, order: 'asc' })
    }
  }

  return (
    <>
      <NavBar msg={letter(amountOfUser)} amountUsers={amountOfUser} />
      <table className="table">
        <TableHeader columns={columns} onSort={handleSort}/>
        <TableBody columns={columns} data={usersCrop}/>
        {/* <tbody>
          {usersCrop.map((user) => (
            <User
              onDelete={onDelete}
              onFavorite={onFavorite}
              key={user._id}
              user={user}
            />
          ))}
        </tbody> */}
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
