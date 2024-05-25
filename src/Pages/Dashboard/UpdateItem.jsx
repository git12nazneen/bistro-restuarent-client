import React from "react";
import SectionTitle from "../../shared/SectionTitle";
import { useLoaderData } from "react-router-dom";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import axios from "axios";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = ( ) => {
  const {name, category, recipe, price, _id} = useLoaderData();
 
  const { register, handleSubmit } = useForm();
  const axiosPublic = UseAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    // Prepare the form data
    const formData = new FormData();
    formData.append("image", data.image[0]);

    try {
      const res = await axios.post(image_hosting_api, formData);
      console.log(res.data);
      if (res.data.success) {
        // now send the menu to the server
        const menuItem = {
          name: data.name,
          category: data.category,
          price: parseFloat(data.price),
          recipe: data.recipe,
          image: res.data.data.display_url,
        };
        const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
        console.log(menuRes.data);
        if (menuRes.data.modifiedCount > 0) {
          alert("data updated");
        }
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div>
      <SectionTitle
        heading="Updated item"
        subheading="Refresh info"
      ></SectionTitle>
      <div className="mx-32 border  bg-black p-20 rounded-xl">
        <form className="space-y-4 " onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text text-white">Recipe name?</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              defaultValue={name}
              {...register("name", { required: true })}
              className="input input-bordered w-full "
              required
            />
          </label>

          <div className="flex gap-3">
            <div className="flex-1">
              {" "}
              <div className="label">
                <span className="label-text text-white">Select category</span>
              </div>
              <select
                // defaultValue="default"
                defaultValue={category}
                {...register("category", { required: true })}
                required
                className="select select-bordered w-full text-black "
              >
                <option disabled value="default">
                  Select category
                </option>
                <option value="male">Salad</option>
                <option value="other">Pizza</option>
                <option value="other">Soup</option>
                <option value="other">Drinks</option>
                <option value="other">Deserts</option>
              </select>
            </div>
            <div className="flex-1">
              {" "}
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text text-white">Price</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  defaultValue={price}
                  {...register("price", { required: true })}
                  required
                  className="input input-bordered w-full "
                />
              </label>
            </div>
          </div>

          <div>
            <label className="form-control">
              <div className="label">
                <span className=" text-white label-text">Your Opinion</span>
              </div>
              <textarea
                defaultValue={recipe}
                {...register("recipe", { required: true })}
                required
                className="textarea textarea-bordered h-24"
                placeholder="Write here"
              ></textarea>
            </label>
          </div>
          <div className="flex gap-3">
            <div className="flex-1">
              <div>
                <input
                  {...register("image", { required: true })}
                  required
                  type="file"
                  className="file-input outline-none w-full max-w-xs"
                />
              </div>
            </div>
            <div className="flex-1">
              <button className="btn btn-outline bg-white">Update menu item</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
