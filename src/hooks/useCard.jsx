import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import UseAuth from "./UseAuth";


const useCard = () => {
    // 
    const axiosSecure = useAxiosSecure();
    const {user} = UseAuth()
    const {refetch, data: cart = []} = useQuery({
        queryKey:['cart', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data;
        }
    })
    return [cart, refetch]
};

export default useCard;