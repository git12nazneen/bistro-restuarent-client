import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { MdAdminPanelSettings } from "react-icons/md";
import Swal from 'sweetalert2';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const {data: users = [], refetch} = useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })

    const handleDelete = (user) => {
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
            
            axiosSecure.delete(`/users/${user.id}`).then((res) => {
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
        <div>
           <div className='flex justify-evenly my-4'>
            <h2 className='text-3xl'>All users</h2>
            <h2 className='text-3xl'>Total users: {users.length}</h2>


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

              {/* <th>Image</th> */}
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>

                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        {/* <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        /> */}
                      </div>
                    </div>
                    <div>
                      {/* <div className="text-sm opacity-50">United States</div> */}
                    </div>
                  </div>
                </td>
                <td>
                  <div className="font-bold">{user.name}</div>
                  {/* <br/>
              <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                </td>
                <td>{user.email}</td>
                <td><button className='btn-outline font-extrabold'><MdAdminPanelSettings  className='text-3xl'/></button></td>
                <th>
                  <button
                    onClick={() => handleDelete(user._id)}
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

export default AllUsers;