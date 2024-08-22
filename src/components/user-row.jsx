import React from "react";

const UserRow = ({ user }) => {
  return (
    <tr>
      <td>
        <div className="mask mask-squircle h-12 w-12">
          <img
            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
            alt="Avatar Tailwind CSS Component"
          />
        </div>
      </td>
      <td>
        <div className="font-bold">{user.firstname}</div>
      </td>
      <td>
        <span className="badge badge-primary badge-outline badge-sm">
          {user.position}
        </span>
      </td>
      <td>{user.email}</td>
      <th>
        <button className="btn btn-outline btn-info btn-xs ">Edit</button>
        <button className="btn btn-outline btn-error btn-xs">Delete</button>
      </th>
    </tr>
  );
};

export default UserRow;
