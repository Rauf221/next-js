"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Pagination } from "swiper/modules";
import useSWR from "swr";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { BiHeart } from "react-icons/bi";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { fetcher     } from "../services/fetcher";

const CoruselSpotlight: React.FC = () => {
  const { data, error, isLoading } = useSWR<CardData[]>("http://localhost:3001/data", fetcher);

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Failed to load</p>;

  return (
    <section className="mt-5">
      <div className="relative">
        <button
          className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-white bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-100 hover:opacity-100 duration-300"
        >
          <FaAngleLeft />
        </button>
        <button
          className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-white bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-100 hover:opacity-100 duration-300"
        >
          <FaAngleRight />
        </button>

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          modules={[FreeMode, Navigation, Pagination]}
          className="mySwiper"
        >
          {data?.map((card: CardData) => (
            <SwiperSlide key={card.id} className="rounded-[30px] bg-[#262626]">
              <div className="border-[10px] flex flex-col justify-start rounded-lg border-[#262626] overflow-hidden bg-[#262626]">
                <div className="relative group overflow-hidden rounded-lg">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute bottom-2 right-[-30px] flex flex-col gap-1 text-white group-hover:right-2 transition-all duration-300">
                    <button className="bg-black rounded-full w-[30px] h-[30px] flex items-center justify-center">
                      <TiShoppingCart />
                    </button>
                    <button className="bg-black rounded-full w-[30px] h-[30px] flex items-center justify-center">
                      <BiHeart />
                    </button>
                  </div>
                </div>
                <div className="mt-2 p-4 bg-[#262626]">
                  <h2 className="text-white">{card.title}</h2>
                  <p className="flex items-center text-[#17ef97]">
                    <BsCurrencyBitcoin className="mr-1" /> {card.price}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CoruselSpotlight;
