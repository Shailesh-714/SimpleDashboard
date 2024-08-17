import React from "react";
import OrdersTable from "./OrdersTable";
import { FiSearch, FiFilter } from "react-icons/fi";
import {
  MdOutlineSettingsBackupRestore,
  MdOutlineDateRange,
} from "react-icons/md";
import { RiEditBoxLine } from "react-icons/ri";
import { PiPackage } from "react-icons/pi";
import { FaChevronDown } from "react-icons/fa";
import { BsLayers } from "react-icons/bs";
import { LuDownload } from "react-icons/lu";
import PageList from "./PageList";

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="round-container order">
        <div className="order-filter-list">
          <h3>Orders</h3>
          <button className="btn dropdown">
            All
            <FaChevronDown />
          </button>
          <div className="search-bar">
            <FiSearch color="#626262" size={20} />
            <input type="text" placeholder="Search you order here" />
          </div>
        </div>
        <div className="order-filter-list">
          <button className="btn">
            <MdOutlineSettingsBackupRestore size={20} />
            Older Version
          </button>
          <button className="btn">
            <RiEditBoxLine size={20} />
            Manual Order
          </button>
          <button className="btn">
            <PiPackage size={20} />
            Bulk Order
          </button>
        </div>
      </div>
      <div className="round-container">
        <div className="order">
          <div className="order-filter-list">
            <button className="btn dropdown">
              <div className="options">
                <MdOutlineDateRange size={20} />
                Last 7 days
              </div>
              <FaChevronDown />
            </button>
            <button className="btn selected-btn">
              <FiFilter size={19} /> Filter
            </button>
          </div>
          <div className="order-filter-list">
            <BsLayers size={20} color="#154462" />
            <LuDownload size={20} color="#154462" />
          </div>
        </div>
        <div>
          <OrdersTable />
        </div>
        <div className="order">
          <div className="order-bottom">
            Items per page
            <button className="btn dropdown">
              6
              <FaChevronDown />{" "}
            </button>
          </div>
          <div className="order-bottom">
            <PageList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
