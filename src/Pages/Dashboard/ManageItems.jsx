
import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import SectionTitle from '../../shared/SectionTitle';
import UseMenu from '../../hooks/UseMenu';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const ManageItems = () => {
  const [menu, loading, refetch] = UseMenu(); // Ensure you get all three values
  const axiosSecure = useAxiosSecure();

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();

          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${item.name} has been deleted!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      <SectionTitle heading="Manage All Items" subheading="Hurry Up"></SectionTitle>
      <div className="mx-20">
        <h2 className="text-4xl ">Total Items: {menu.length} </h2>
      </div>
      <div className="mx-20">
        <table className="table my-4">
          <thead className="bg-orange-400 py-3 text-white uppercase">
            <tr>
              <th>#</th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, idx) => (
              <tr key={item._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask w-12 h-12">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                  </div>
                </td>
                <td><h1>{item.name}</h1></td>
                <td>${item.price}</td>
                <th>
                  <button className="btn btn-xs">
                    <FaEdit className="text-red-700" />
                  </button>
                </th>
                <th>
                  <button onClick={() => handleDelete(item)} className="btn btn-xs">
                    <FaTrash className="text-red-700" />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
