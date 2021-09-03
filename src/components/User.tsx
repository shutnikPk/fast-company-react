import React, { FC } from 'react'
import { IUserItem } from '../types/types'
import Qualitys from './Qualityes'

export interface UserProps {
    user: IUserItem
    onDelete: (userId: string) => void
    onFavorite: (userId: string, isFavorite: boolean | undefined) => void
}

const User: FC<UserProps> = ({ user, onDelete, onFavorite }) => {
  return (
        <tr key={user._id} id={user._id}>
            <td>{user.name}</td>
            <td>
                <Qualitys qualityes={user.qualities} />
            </td>
            <td id={user.profession._id}>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate}</td>
            <td>
                <i
                    onClick={() => onFavorite(user._id, user.favorite)}
                    className={
                        user.favorite ? 'bi bi-bookmark-fill' : 'bi bi-bookmark'
                    }
                />
            </td>
            <td>
                <button
                    onClick={() => onDelete(user._id)}
                    className="btn btn-danger btn-sm"
                >
                    Delete
                </button>
            </td>
        </tr>
  )
}

export default User
