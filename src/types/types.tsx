import * as React from 'react'

export interface IProfession {
    _id: string
    name: string
}

export interface IQuality {
    _id: string
    name: string
    color: string
}

export interface IUserItem {
    _id: string
    name: string
    profession: IProfession
    qualities: IQuality[]
    completedMeetings: number
    rate: number
    favorite?: boolean
}

export interface IColumn{
    path: string
    title: string
    component?: (user: IUserItem) => React.ReactNode
}
