import React, { useState } from 'react';
import { IoChatbubbleEllipses } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { LuShoppingCart, LuSquare } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { GoGraph } from "react-icons/go";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li><a><IoChatbubbleEllipses color='white' size={34}/></a></li>
          <li><a href="#"><GoHome color='white' size={24}/></a></li>
          <li className='select-item'><a href="#" ><LuShoppingCart color='#154462' size={22} /></a></li>
          <li><a href="#"><GoPeople color='white' size={20}/></a></li>
          <li><a href="#"><GoGraph color='white' size={22}/></a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
