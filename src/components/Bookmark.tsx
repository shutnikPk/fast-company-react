import React, { FC } from 'react'
import { IUserItem } from '../types/types'

export interface BookmarkProps {
    user:IUserItem
    onFavorite: (userId: string, isFavorite: boolean | undefined) => void
}

const Bookmark: FC<BookmarkProps> = ({ user, onFavorite }) => {
  return (<i
        key={user._id}
        onClick={() => onFavorite(user._id, user.bookmark)}
        className={
            user.bookmark ? 'bi bi-bookmark-fill' : 'bi bi-bookmark'
        }
    />)
}

export default Bookmark
