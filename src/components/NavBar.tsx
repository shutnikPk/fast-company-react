import React, { FC } from 'react'

export interface NavBarProps {
    amountUsers: number
    msg: string
}

const NavBar: FC<NavBarProps> = ({ amountUsers, msg }) => {
  return (
        <div className="badge m-2 bg-primary">
            {amountUsers} человек{msg} тусанет с тобой чегодня
        </div>
  )
}

export default NavBar
