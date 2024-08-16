import React from "react";
import { FiSearch } from "react-icons/fi";
import { BsLightningCharge } from "react-icons/bs";
import { PiWalletBold } from "react-icons/pi";
import { HiOutlineBell } from "react-icons/hi";
import { TbSettings } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <header className="header">
      <div className="search-bar">
        <FiSearch color="#626262" size={20} />
        <input type="text" placeholder="Search here..." />
      </div>
      <div className="header-ctn">
        <button className="nostyle-btn">
          <BsLightningCharge size={18} />
          Quick Actions
        </button>
        <div className="wallet">
          <span>
            <PiWalletBold size={20} />
            ₹117.00
          </span>
          <button className="btn">Recharge Wallet</button>
        </div>
        <HiOutlineBell size={22} />
        <TbSettings size={22} />
        <CgProfile size={22} />
      </div>
    </header>
  );
};

export default Header;
