import React, { FC } from 'react'

interface GroupListProps {
    items:any,
    valueProperty?:string,
    contentProperty?:string,
    selectedItem:{} | undefined,
    onItemSelect:(obj:{})=>void
}

const GroupList: FC<GroupListProps> = ({ items, valueProperty = '_id', contentProperty = 'name', onItemSelect, selectedItem }) => {
  console.log(selectedItem)
  return (
    <ul className="list-group">
      {Object.keys(items).map(
        item =>
         <li
              onClick={() => onItemSelect(items[item])}
              key={items[item][valueProperty]}
              className={'list-group-item' + (items[item] === selectedItem ? ' active' : '')}
              role="button"
            >{items[item][contentProperty]}
          </li>
      )
         }
    </ul>
  )
}

export default GroupList
