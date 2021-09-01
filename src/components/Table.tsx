import React, { useState, FC } from "react";
import api from "../API";
import User from "./User";
import { IUserItem } from "../types/types";

export interface TableProps {
  users: IUserItem[];
}

const Table: FC<TableProps> = ({ users }) => {
  const deleteHandler = ()=>{}
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Имя</th>
          <th scope="col">Качества</th>
          <th scope="col">Профессия</th>
          <th scope="col">Встретился, раз</th>
          <th scope="col">Оценка</th>
          <th scope="col"> </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <User
            onClick={() => deleteHandler(user._id)}
            key={user._id}
            user={user}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
