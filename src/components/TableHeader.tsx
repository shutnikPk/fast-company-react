import React, { FC } from 'react'
import { IColumn } from '../types/types'

interface TableHeaderProps {
    onSort:(item: IColumn)=>void|string
    columns:{[key: string]: IColumn}
    arrow: string
    name:string
}

const TableHeader: FC<TableHeaderProps> = ({ onSort, columns, arrow, name }) => {
  return (
    <thead>
        <tr>
             {Object.keys(columns).map(column => (
                <th key={column} onClick={
                  () => onSort(columns[column])
                }
                  scope="col" role={columns[column].path && 'button'}
              >
                  {columns[column].title}{
                    <i style={{ display: name === columns[column].path ? '' : 'none' }} className={arrow} ></i>
                  }</th>
             ))}
        </tr>
    </thead>
  )
}

export default TableHeader
