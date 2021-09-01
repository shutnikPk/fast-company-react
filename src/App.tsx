import React from "react";
import { useState } from "react";
import Table from "./components/Table";
import api from "./API/index";
import { IUserItem } from "./types/types";

const usersResponse = api.users.fetchAll();

function App() {
  const [users, setUsers] = useState<IUserItem[]>(usersResponse);
  return (
    <div>
      <Table users={users} />
    </div>
  );
}

export default App;
