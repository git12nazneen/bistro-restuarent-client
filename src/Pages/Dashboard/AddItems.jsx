import React from "react";
import SectionTitle from "../../shared/SectionTitle";
import { useForm } from "react-hook-form";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <SectionTitle heading="ADD AN ITEM" subheading="Whats new"></SectionTitle>

      <div className="mx-32 border text-white bg-black p-20 rounded-xl">
        <form
          className="space-y-4 text-white"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text text-white">Recipe name?</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              {...register("name")}
              className="input input-bordered w-full "
            />
          </label>

          <div className="flex gap-3">
            <div className="flex-1">
              {" "}
              <div className="label">
                <span className="label-text text-white">Select category</span>
              </div>
              <select
                {...register("category")}
                className="select select-bordered w-full "
              >
                <option className="text-black" disabled selected>
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
                  {...register("price")}
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
                className="textarea textarea-bordered h-24"
                placeholder="Write here"
              ></textarea>
            </label>
          </div>
            <div>
            <input type="file" className="file-input outline-none w-full max-w-xs" />
            </div>
            <button className="btn btn-outline bg-white">Add item</button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
