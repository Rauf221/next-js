


import { BsCurrencyBitcoin } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";
import { TiShoppingCart } from "react-icons/ti";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetcher } from "../services/fetcher";

import { Navigation, FreeMode, Pagination } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CoruselArtworks: React.FC = () => {
  const { data, error, isLoading } = useSWR("http://localhost:3001/data", fetcher);

  if (isLoading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-red-500">Failed to load artworks</p>;

  return (
    <div className="flex flex-col w-[950px]">
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        freeMode={true}
        navigation={{
          nextEl: ".swiper-button-next-artworks",
          prevEl: ".swiper-button-prev-artworks",
        }}
        pagination={{
          el: ".swiper-pagination-artworks",
          clickable: true,
        }}
        modules={[FreeMode, Navigation, Pagination]}
        className="swiperArtworks"
      >
        {data?.map((card) => (
          <SwiperSlide key={card.id} className="rounded-lg w-[300px] bg-white shadow-lg">
            <div className="border-2 flex flex-col justify-start rounded-lg border-gray-200 overflow-hidden bg-white">
              <div className="relative group">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full container h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white text-black p-2 rounded-full shadow-md">
                    <TiShoppingCart />
                  </button>
                  <button className="bg-white text-black p-2 rounded-full shadow-md">
                    <BiHeart />
                  </button>
                </div>
              </div>
              <div className="p-4 bg-white">
                <h2 className="text-lg font-semibold text-black">{card.title}</h2>
                <p className="text-gray-700 flex items-center">
                  <BsCurrencyBitcoin className="mr-1" /> {card.price}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center mt-4 gap-4">
        <div className="swiper-button-prev-artworks cursor-pointer text-white bg-gray-700 p-2 rounded-full shadow-md">
          <FaAngleLeft />
        </div>
        <div className="swiper-button-next-artworks cursor-pointer text-white bg-gray-700 p-2 rounded-full shadow-md">
          <FaAngleRight />
        </div>
      </div>
    </div>
  );
};

export default CoruselArtworks;
