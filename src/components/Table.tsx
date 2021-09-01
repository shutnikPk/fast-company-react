import React, { FC } from "react";
import User from "./User";
import { IUserItem } from "../types/types";

export interface TableProps {
  users: IUserItem[];
  onDelete: (userId: string) => void;
  onFavorite: (userId: string,isFavorite: boolean | undefined) => void;
}

const Table: FC<TableProps> = ({ users, onDelete, onFavorite }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Имя</th>
          <th scope="col">Качества</th>
          <th scope="col">Профессия</th>
          <th scope="col">Встретился, раз</th>
          <th scope="col">Оценка</th>
          <th scope="col">В избранное</th>
          <th scope="col">Удалить</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <User
            onDelete={onDelete}
            onFavorite={onFavorite}
            key={user._id}
            user={user}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
