import React, { FC } from 'react'
import { IColumn, IUserItem } from '../types/types'
import _ from 'lodash'

interface TableBodyProps {
    columns:{[key: string]: IColumn}
    data:IUserItem[]
}

const TableBody: FC<TableBodyProps> = ({ data, columns }) => {
  const renderContent = (column:string, item:IUserItem) :any => {
    if (columns[column].component) {
      const component = columns[column].component
      return component(item)
    }
    return _.get(item, columns[column].path)
  }

  return (<tbody>
      {data.map(item => (
      <tr key={item._id}>{
        Object.keys(columns).map(column =>
          (
            <td key={columns[column].path}>
                {renderContent(column, item)}
            </td>
          ))}
        </tr>))}
  </tbody>)
}

export default TableBody
