
import Swal from "sweetalert2";
import UseAuth from "../../hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";

const ShopCard = ({ item }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const axiosSecure = UseAxiosSecure()
  const {user} = UseAuth()
  const { recipe, category, name, image, price ,  _id} = item;
 
  const handleAddFood = food =>{
    // console.log(food, user.email)
    if(user && user.email ){
      // send food
      console.log(user.email, food)
      const cartItem = {
        menuId:_id,
        email:user.email,
        name,
        image,
        price
      }
      axiosSecure.post('/carts', cartItem)
      .then(res => {
       console.log(res.data)
      //  toast.success('Successfully add to cart')
      if(res.data.insertedId){
        toast.success('Successfully add to cart')
      }
      })
      .catch(error => {
        toast.error('An error occurred'); // Handle error cases
      });
  }
    else{
      Swal.fire({
        title: "Add food?",
        text: "You won't be able please login",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!"
      }).then((result) => {
        if (result.isConfirmed) {
        //  send the use to login page
        navigate('/login', {state:{from:location}})
        }
      });
    }
  }

  return (
    <div>
      <div className="card w-80 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button onClick={()=>handleAddFood(item)} className="btn bg-orange-600 border-b-4 border-black hover:bg-black">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default ShopCard;
