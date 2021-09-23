import React, { FC } from 'react'
import { IColumn } from '../types/types'

interface TableHeaderProps {
    onSort:(param?:string)=>void
    columns:{[key: string]: IColumn}
}

const TableHeader: FC<TableHeaderProps> = ({ onSort, columns }) => {
  return (
    <thead>
        <tr>
             {Object.keys(columns).map(column => (
                <th key={column} onClick={() => onSort(columns[column].path)} scope="col" role={columns[column].path && 'button'}>{columns[column].title}</th>
             ))}
        </tr>
    </thead>
  )
}

export default TableHeader
