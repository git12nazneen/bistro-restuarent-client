// // import { useEffect, useState } from "react"
// import { useQuery } from "@tanstack/react-query";
// import UseAxiosPublic from "./UseAxiosPublic";

// const UseMenu = () => {
//   const axiosPublic = UseAxiosPublic();
//   // const [menu, setMenu] = useState([])
//   // const [loading, setLoading] = useState(true)
//   // useEffect(()=>{
//   //     fetch('http://localhost:5000/menu')
//   //     .then(res=>res.json())
//   //     .then(data=>{
//   //         setMenu(data)
//   //         setLoading(false)
//   //     })
//   // },[])
//   // return[menu, loading]

;

// export default UseMenu;

import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";

const UseMenu = () => {
  const axiosPublic = UseAxiosPublic();

  const {
    data: menu = [],
    isLoading: loading, // Corrected here
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosPublic.get("/menu");
      return res.data;
    },
  });

  return [menu, loading, refetch];
};

export default UseMenu;
