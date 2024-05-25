// import React, { useContext, useEffect, useState } from "react";
// import {
//   loadCaptchaEnginge,
//   LoadCanvasTemplate,
//   validateCaptcha,
// } from "react-simple-captcha";
// import { AuthContext } from "../../providers/AuthProvider";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import UseAxiosPublic from "../../hooks/UseAxiosPublic";

// const Login = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const axiosPublic = UseAxiosPublic();
//   const [disabled, setDisabled] = useState(true);
//   const { signIn,googleSignIn} = useContext(AuthContext);

//   const from = location.state?.from?.pathname || "/";
//   console.log("state in location", location.state);
//   useEffect(() => {
//     loadCaptchaEnginge(6);
//   }, []);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;
//     console.log(email, password);
//     signIn(email, password).then((result) => {
//       const user = result.user;
//       console.log(user);
//       Swal.fire({
//         position: "top-end",
//         icon: "success",
//         title: "Login success",
//         showConfirmButton: false,
//         timer: 1500,
//       });
//       navigate(from, { replace: true });
//     });
//   };

//   const handleValidCaptcha = (e) => {
//     const user_captcha_value = e.target.value;
//     // console.log(value)
//     if (validateCaptcha(user_captcha_value)) {
//       setDisabled(false);
//     } else {
//       setDisabled(true);
//     }
//   };

//   const handleGoogleLogin = () =>{
//     googleSignIn()
//     .then(result=>{
//         console.log(result.user);
//         const userInfo = {
//             email: result.user?.email,
//             name:result.user?.displayName
//         }
//         axiosPublic.post('/users', userInfo)
//         .then(res=>{
//             console.log(res.data)
//             navigate('/')
//         })
//     })
//   }


//   return (
//     <div className=" my-20">
//       <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
//         <div
//           className="hidden bg-cover lg:block lg:w-1/2"
//           style={{
//             backgroundImage:
//               "url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')",
//           }}
//         ></div>

//         <form
//           onSubmit={handleLogin}
//           className="w-full px-6 py-8 md:px-8 lg:w-1/2"
//         >
//           <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
//             Welcome back!
//           </p>

//           <a onClick={handleGoogleLogin}
//             href="#"
//             className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
//           >
//             <div className="px-4 py-2">
//               <svg className="w-6 h-6" viewBox="0 0 40 40">
//                 <path
//                   d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
//                   fill="#FFC107"
//                 />
//                 <path
//                   d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
//                   fill="#FF3D00"
//                 />
//                 <path
//                   d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
//                   fill="#4CAF50"
//                 />
//                 <path
//                   d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
//                   fill="#1976D2"
//                 />
//               </svg>
//             </div>

//             <span className="w-5/6 px-4 py-3 font-bold text-center">
//               Sign in with Google
//             </span>
//           </a>

//           <div className="flex items-center justify-between mt-4">
//             <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

//             <a
//               href="#"
//               className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
//             >
//               or login with email
//             </a>

//             <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
//           </div>

//           <div className="mt-4">
//             <label
//               className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
//               htmlFor="LoggingEmailAddress"
//             >
//               Email Address
//             </label>
//             <input
//               id="email"
//               name="email"
//               className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
//               type="email"
//             />
//           </div>

//           <div className="mt-4">
//             <div className="flex justify-between">
//               <label
//                 className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
//                 htmlFor="loggingPassword"
//               >
//                 Password
//               </label>
//               <a
//                 href="#"
//                 className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
//               >
//                 Forget Password?
//               </a>
//             </div>

//             <input
//               id="password"
//               name="password"
//               className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
//               type="password"
//             />
//           </div>
//           <div className="mt-4">
//             <div className="flex justify-between">
//               <LoadCanvasTemplate />
//             </div>

//             <input
//               name="captcha"
//               onBlur={handleValidCaptcha}
//               className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
//               placeholder="Type the text"
//               type="text"
//             />
//           </div>

//           <div className="mt-6">
//             {/* <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50" >Validate</button> */}
//           </div>

//           <div className="mt-6">
//             <input
//               disabled={disabled}
//               className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 disabled:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
//               type="submit"
//               value="Login"
//             />

//             {/* <input disabled={disabled} className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50" type="submit" value="login" /> */}
//           </div>

//           <div className="flex items-center justify-between mt-4">
//             <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

//             <Link to="/signUp">
//               <a
//                 href="#"
//                 className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
//               >
//                 or sign up
//               </a>
//             </Link>

//             <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useContext, useEffect, useState } from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = UseAxiosPublic();
  const [disabled, setDisabled] = useState(true);
  const { signIn, googleSignIn } = useContext(AuthContext);

  const from = location.state?.from?.pathname || "/";
  console.log("state in location", location.state);

  useEffect(() => {
    loadCaptchaEnginge(6); // Initialize captcha with 6 characters
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login success",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    });
  };

  const handleValidCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName
        };
        axiosPublic.post('/users', userInfo)
          .then(res => {
            console.log(res.data);
            navigate('/');
          });
      });
  };

  return (
    <div className="my-20">
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
        <div
          className="hidden bg-cover lg:block lg:w-1/2"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')",
          }}
        ></div>

        <form
          onSubmit={handleLogin}
          className="w-full px-6 py-8 md:px-8 "
        >
          <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
            Welcome back!
          </p>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <div className="px-4 py-2">
              <svg className="w-6 h-6" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>
            </div>

            <span className="w-5/6 px-4 py-3 font-bold text-center">
              Sign in with Google
            </span>
          </button>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

            <span
              className="text-xs text-center text-gray-500 uppercase dark:text-gray-400"
            >
              or login with email
            </span>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
          </div>

          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              htmlFor="LoggingEmailAddress"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
              required
            />
          </div>

          <div className="mt-4">
            <div className="flex justify-between">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                htmlFor="loggingPassword"
              >
                Password
              </label>
              <a
                href="#"
                className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
              >
                Forget Password?
              </a>
            </div>

            <input
              id="password"
              name="password"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
              required
            />
          </div>

          <div className="mt-4">
            <div className="flex justify-between">
              <LoadCanvasTemplate />
            </div>

            <input
              name="captcha"
              onBlur={handleValidCaptcha}
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Type the text"
              type="text"
              required
            />
          </div>

          <div className="mt-6">
            <input
              disabled={disabled}
              className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 disabled:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              type="submit"
              value="Login"
            />
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

            <Link to="/signUp">
              <span
                className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
              >
                or sign up
              </span>
            </Link>

            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
