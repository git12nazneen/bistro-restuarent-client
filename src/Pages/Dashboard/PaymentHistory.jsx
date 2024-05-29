import React from "react";
import UseAuth from "../../hooks/UseAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
  const { user } = UseAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  return (
    <div className="my-20 mx-20">
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

              <th>Status</th>
              <th>Id</th>
              <th>Price</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {payments.map((payments, index) => (
              <tr key={payments._id}>
                <th>{index + 1}</th>

                <td>
                  <div className="flex paymentss-center gap-3">
                    <div className="avatar">
                      <div className="">{payments.status}</div>
                    </div>
                    <div>
                      {/* <div className="text-sm opacity-50">United States</div> */}
                    </div>
                  </div>
                </td>
                <td>
                  <div className="font-bold">{payments.transactionId}</div>
                  {/* <br/>
              <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                </td>
                <td>${payments.price}</td>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
