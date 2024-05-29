import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useCard from "../hooks/useCard";

const Dashboard = () => {

  // TODO: get isAdmin value from the db
  const [isAdmin] = useAdmin();
  const [cart] = useCard()

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-600">
        <ul className="menu">
         {
          isAdmin? <>
           <li>
            <NavLink to="/dashboard/adminHome">Admin home</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addItems">
              
              Add items</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manageItems"> Manage items</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">Manage Bookings</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/users">All Users</NavLink>
          </li>
          
          </> : <>
           <li>
            <NavLink to="/dashboard/userHome">User home</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/history">History</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">My Cart({cart.length})</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addReview">Add Review</NavLink>
          </li>
          <li>
            {/* <NavLink to="/dashboard/myBookings">My Bookings</NavLink> */}
            <NavLink to="/dashboard/paymentHistory">Real Payment History</NavLink>
          </li>
          </>
         }
          {/* shared li */}
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
