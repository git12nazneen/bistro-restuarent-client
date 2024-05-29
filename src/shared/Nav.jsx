import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import useCard from "../hooks/useCard";
import useAdmin from "../hooks/useAdmin";
const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [cart] = useCard()
  const [isAdmin] = useAdmin()
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogOut = () => {
    logOut().then();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "log out success",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  // const handleItemClick = (index) => {
  //   setActive(index);
  // };

  // const navLinks = () => {
  //   // const items = ["Home", "Menu", "Shop", "Contact"];
  //   // return items.map((item, index) => (
  //   //   <li key={index}>
  //   //     <Link
  //   //       className={`my-2 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0 ${
  //   //         active === index ? "font-extrabold text-xl text-orange-600" : "font light"
  //   //       }`}

  //   //       to={`/${item.toLowerCase()}`}
  //   //       onClick={() => handleItemClick(index)}
  //   //     >
  //   //       {item}
  //   //     </Link>
  //   //   </li>
  //   // ));

  // };

  const navLinks = (
    <>
      <li className="px-3">
        <Link to="/">Home</Link>
      </li>
      <li className="px-3">
        <Link to="/menu">Menu</Link>
      </li>
      <li className="px-3">
        <Link to="/shop/salad">Shop</Link>
      </li>
      <li className="px-3">
        <Link to="/secret">Secret</Link>
      </li>

      {
        user && isAdmin &&  <li className="px-3">
        <Link to="/dashboard/userHome">Dashboard</Link>
      </li>
      }
      {
        user && !isAdmin &&  <li className="px-3">
        <Link to="/dashboard/adminHome">Dashboard</Link>
      </li>
      }

      {user ? (
        <>
          <button onClick={handleLogOut} className="btn">
            Logout
          </button>{" "}
        </>
      ) : (
        <>
          {" "}
          <li className="px-3">
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div>
      <nav className="navbar fixed z-10 bg-black bg-opacity-40 text-white">
        <div class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div class="flex items-center justify-between">
            <a href="#">
              <img class="w-auto h-6 sm:h-7" src={logo} alt="" />
            </a>

            <div class="flex lg:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div
            className={`${
              isOpen ? "block" : "hidden"
            } lg:flex flex-grow items-center md:ml-4 md:flex md:flex-row-reverse`}
          >
            <ul class="flex flex-col md:flex-row md:mx-6 md:ml-auto">
              {navLinks}
            </ul>
          </div>
          <div>
            
          <Link to='/dashboard/cart'>
          <button className="btn">
              <svg
                class="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="badge badge-secondary">{cart.length}</div>
            </button>
          </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
