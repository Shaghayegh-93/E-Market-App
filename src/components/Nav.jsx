import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";
import { BsHeart, BsCart3 } from "react-icons/bs";

const Nav = () => {
  return (
    <div className="w-full">
      <div className=" w-full flex  items-center  justify-between p-4 mx-auto">
        <ul className="flex items-center ">
          <li className="p-2">
            <a href="">Men</a>
          </li>
          <li className="p-2">
            <a href="">Women</a>
          </li>
          <li className="p-2">
            <a href="">Children</a>
          </li>
          <li className="p-2">
            <a href="">Accessories</a>
          </li>
        </ul>
        <div className="flex items-center">
          <h2 className="">SHAINASTORE</h2>
        </div>
        <div className="flex ">
          <ul className="flex">
            <li className="p-2">
              <a href="">HomePage</a>
            </li>
            <li className="p-2">
              <a href="">About</a>
            </li>
            <li className="p-2">
              <a href="">Contact</a>
            </li>
            <li className="p-2">
              <a href="">Stores</a>
            </li>
          </ul>
          <ul className="flex items-center">
            <li className="p-2">
              <AiOutlineSearch />
            </li>
            <li className="p-2">
              <HiOutlineUser />
            </li>
            <li className="p-2">
              <BsHeart />
            </li>
            <li className="p-2">
              <BsCart3 />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
