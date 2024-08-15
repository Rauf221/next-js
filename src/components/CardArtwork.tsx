import React from "react";
import CoruselArtworks from "./CoruselArtworks";



const Button: React.FC<{ text: string }> = ({ text }) => (
  <button
    className="text-white mt-6 md:mt-10 py-2 px-5 rounded-lg transition duration-300 bg-black hover:bg-white hover:text-black"
    aria-label={text}
  >
    {text}
  </button>
);


const Content: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
  <div className="flex flex-col gap-2 w-full max-w-[300px]">
    <h2 className="text-white text-2xl md:text-3xl font-bold">{title}</h2>
    <p className="text-gray-300">{desc}</p>
  </div>
);

const CardArtworks = ({ title, desc, button }) => {
  return (
    <section className="flex flex-col lg:flex-row items-center   bg-[#262626] rounded-lg p-6 md:p-10">
      <div className="flex flex-col  items-center lg:items-start gap-6 ">
        <Content title={title} desc={desc} />
        <Button text={button} />
      </div>
      <div className="w-full  mt-6 lg:mt-0 lg:ml-10">
        <CoruselArtworks />
      </div>
    </section>
  );
};

export default CardArtworks;
