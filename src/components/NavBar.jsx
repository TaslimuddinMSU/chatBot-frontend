import React from 'react';

const NavBar = () => {
  return (
    <div className="w-full  flex justify-center  border-b border-gray-200 fixed bg-blue-500">
      <div className="w-full flex justify-between items-center sm:w-full md:w-[80%] lg:w-[70%] p-4 ">
        <div className="text-2xl font-bold text-white">Ask Me</div>
        <div className="text-2xl font-bold text-white">User Name</div>
      </div>
    </div>
  );
};

export default NavBar;
