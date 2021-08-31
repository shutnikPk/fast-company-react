import React, { useState, FC } from "react";
import api from "../API";

const users = api.users.fetchAll();

export interface TableProps {}

const Table: FC<TableProps> = () => {
  const [users, setUsers] = useState([]);
  return <div></div>;
};

export default Table;
