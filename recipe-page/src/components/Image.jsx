import React from "react";
import omeletteImage from "../assets/images/image-omelette.jpeg";

const Image = () => {
  return (
    <>
      <div className="">
        <img
          src={omeletteImage}
          alt="Delicious food"
          className="rounded-xl"
        />
        <h1 className="text-2xl mt-4 font-[my-Outfit] font-semibold">Simple Omelette Recipe</h1>
        <p className="mt-4 font-light text-gray-700">
          This simple omelette recipe is quick and easy to make, perfect for
          breakfast or a light meal. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Numquam nulla sequi ducimus vitae at voluptatibus
          autem, quae aut magni molestiae.
        </p>
      </div>
    </>
  );
};

export default Image;
