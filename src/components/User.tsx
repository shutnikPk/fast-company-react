import React, { FC } from "react";
import { IUserItem } from "../types/types";
import Qualitys from "./Qualityes";

export interface UserProps {
  user: IUserItem;
}

const User: FC<UserProps> = ({ user }) => {
  const { name } = user;
  return (
    <tr>
      <td>{name}</td>
      <td>
        <Qualitys qualityes={user.qualities} />;
      </td>
      <td id={user.profession._id}>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate}</td>
      <td>
        <button onClick={onDelete(user._id)} className="btn btn-danger btn-sm">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default User;
