import React, { useState, useEffect } from "react";
import UserRow from "./user-row";
import UserHead from "./user-head";

const UserList = () => {
  const [users, setUsers] = useState();

  const getEmployeesData = async () => {
    const res = await fetch("http://localhost:8000/users");
    const { users } = await res.json();
    setUsers(users);
  };

  useEffect(() => {
    getEmployeesData();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <UserHead />
        <tbody>
          {users?.map((user) => (
            <UserRow user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
