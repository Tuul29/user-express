import React from "react";

const Header = () => {
  return (
    <div className="flex gap-[400px]">
      <h2 className="text-3xl">User List</h2>
      <div class="join">
        <div className="">
          <div>
            <input
              class="input input-bordered join-item"
              placeholder="Search"
            />
          </div>
        </div>

        <select class="select select-bordered join-item">
          <option disabled selected>
            Status
          </option>
          <option>Sci-fi</option>
          <option>Drama</option>
          <option>Action</option>
        </select>
        <select class="select select-bordered join-item">
          <option disabled selected>
            Signed up
          </option>
          <option>Sci-fi</option>
          <option>Drama</option>
          <option>Action</option>
        </select>
        <div class="indicator">
          <button class="btn join-item">Search users</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
