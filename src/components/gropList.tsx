import React, { FC } from 'react'
interface GroupListProps {
    items:any,
    onItemSelect:()=>void
}

const GroupList: FC<GroupListProps> = ({ items }) => {
  return (
    <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
    </ul>
  )
}

export default GroupList
