import React from "react";

function Header() {
  return (
    <header className="">
      <div className="flex item-center flex-grow py-2 p-1 justify-evenly mr-2 ">
        <div className="flex flex-col flex-initial  mt-2 mb-2 text-left">
          <p className="font-bold">DHETARWAL </p>
          <p className="font-medium">Air conditioning & Refrigeration </p>
        </div>
        <div className="m-4 text-red-700 text-2xl font-bold hover:text-3xl hover:animate-bounce">
          this page is in development mode
        </div>
        <div className="inline-flex flex-col m-2 text-left ">
          <p>CALL US NOW</p>
          <p className="font-bold text-blue-700">8441030184</p>
        </div>
      </div>
      <div className="flex item-center bg-gray-800 text-lg text-white flex-grow ">
        <div className="flex justify-center  space-x-4 mx-auto ">
          <p className="cursor-pointer  p-4 hover:border-white  hover:underline">
            Home
          </p>
          <p className="cursor-pointer   p-4 hover:border-white  hover:underline">
            About Us
          </p>{" "}
          <p className="cursor-pointer  p-4 hover:border-white  hover:underline">
            Contact Us
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
