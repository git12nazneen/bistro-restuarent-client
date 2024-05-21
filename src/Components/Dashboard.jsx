import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-600">
        <ul className="menu">
          <li>
            <NavLink to="/dashboard/userHome">User home</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">Reservation</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">My Cart</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addReview">Add Review</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myBookings">My Bookings</NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/shop/salad"> Menu</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
