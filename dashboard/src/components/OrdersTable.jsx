import React from "react";
import { LuEye } from "react-icons/lu";

const OrdersTable = () => {
  const orders = [
    {
      id: 2546128,
      status: "Active",
      date: "12/02/2025",
      customer: "Snapdeal",
      payment: "Paid",
      amount: "₹5632.00",
      storefront: "Khojle",
    },
    {
      id: 2546128,
      status: "Active",
      date: "12/02/2025",
      customer: "Snapdeal",
      payment: "Paid",
      amount: "₹5632.00",
      storefront: "Khojle",
    },
    {
      id: 2546128,
      status: "Active",
      date: "12/02/2025",
      customer: "Snapdeal",
      payment: "Paid",
      amount: "₹5632.00",
      storefront: "Khojle",
    },
    {
      id: 2546128,
      status: "Active",
      date: "12/02/2025",
      customer: "Snapdeal",
      payment: "Paid",
      amount: "₹5632.00",
      storefront: "Khojle",
    },
    {
      id: 2546128,
      status: "Active",
      date: "12/02/2025",
      customer: "Snapdeal",
      payment: "Paid",
      amount: "₹5632.00",
      storefront: "Khojle",
    },
    {
      id: 2546128,
      status: "Active",
      date: "12/02/2025",
      customer: "Snapdeal",
      payment: "Paid",
      amount: "₹5632.00",
      storefront: "Khojle",
    },
  ];

  return (
    <div className="orders-table">
      <div className="grid-head-row">
        <div className="grid-head">Actions</div>
        <div className="grid-head">Order ID</div>
        <div className="grid-head">Order Status</div>
        <div className="grid-head">Order Date</div>
        <div className="grid-head">Customer</div>
        <div className="grid-head">Payment</div>
        <div className="grid-head">Order Amount</div>
        <div className="grid-head">Storefront</div>
      </div>
      {orders.map((order, index) => (
        <div key={index} className="grid-row">
          <div className="grid-col"><LuEye size={18}/></div>
          <div className="grid-col">{order.id}</div>
          <div className="grid-col status-col">{order.status}</div>
          <div className="grid-col">{order.date}</div>
          <div className="grid-col">{order.customer}</div>
          <div className="grid-col">{order.payment}</div>
          <div className="grid-col">{order.amount}</div>
          <div className="grid-col">{order.storefront}</div>
        </div>
      ))}
    </div>
  );
};

export default OrdersTable;
