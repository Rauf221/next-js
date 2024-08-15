"use client";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import React, { memo } from "react";
import CardArtworks from "./CardArtwork";
import CoruselSpotlight from "./CoruselSpotlight";


type SpotLightType = {
  title: string;
  desc: string;
  button: string;
};

const Button: React.FC<{ text: string }> = memo(({ text }) => (
  <button
    className="text-white border border-gray-500 py-2 px-6 rounded-lg transition duration-300 hover:bg-green-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-green-500"
  >
    {text}
  </button>
));

const Title: React.FC<{ title: string; desc: string }> = memo(({ title, desc }) => (
  <h1 className="text-white text-2xl md:text-3xl flex flex-col md:flex-row items-start md:items-center mb-4">
    <span className="font-bold text-4xl md:text-5xl transition-transform transform hover:scale-105">{title}</span>
    <span className="text-gray-400 font-customFont italic mt-2 md:mt-0 md:ml-2">
      {desc}
    </span>
  </h1>
));

const SectionSpotlight: React.FC<SpotLightType> = ({ title, desc, button }) => {
  return (
    <section className="bg-black min-h-screen py-10">
      <div className="container mx-auto max-w-[1200px] px-4">
        
        <CoruselSpotlight />

        <section className="mt-10">
          <CardArtworks
            title="Most Popular Artworks"
            desc="Our marketplace has 2M+ works of popular artists around the world."
            button="View All NFTs"
          />
        </section>
      </div>
    </section>
  );
};

export default SectionSpotlight;
