import React from "react";
import useCard from "../../../hooks/useCard";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Cart = () => {
  const [cart, refetch] = useCard();
  const axiosSecure = useAxiosSecure();
  console.log(cart);
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch()
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="p-10">
      <div className="flex justify-evenly">
        <h2 className="text-xl">my cart</h2>
        <h3>Length {cart.length}</h3>
        <p>Total price : {totalPrice}</p>
        <button className="btn btn-primary">Pay</button>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>

              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>

                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      {/* <div className="text-sm opacity-50">United States</div> */}
                    </div>
                  </div>
                </td>
                <td>
                  <div className="font-bold">{item.name}</div>
                  {/* <br/>
              <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                </td>
                <td>${item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn bg-red-600 btn-xs"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default Cart;
