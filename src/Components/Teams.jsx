import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { div } from 'framer-motion/client';

import web_dev from "../Images/web_dev.avif";
import git from "../Images/git.png";
import crossroads from "../Images/crossroads.jpg";

const testimonials = [
  {
    id: 1,
    title: 'Web Development Team',
    text: 'Working with Valour was a fantastic experience. They fulfilled all my expectations flawlessly, and the final results were beyond excellent.',
    name: 'XYZ',
    image: web_dev,
  },
  {
    id: 2,
    title: 'Design Team',
    text: 'Valour was a pleasure to work with. The design exceeded expectations, and the end results were absolutely great.',
    name: 'ABC',
    image: git,
  },
  {
    id: 3,
    title: 'Marketing Team',
    text: 'The marketing team’s expertise helped boost our engagement significantly. A great collaboration!',
    name: 'PQR',
    image: crossroads,
  },
];

const Teams = () => {
  return (
    <div>
      <div className="flex flex-col justify-center bg-[#040015] items-center h-[60vh] m-auto mt-40 mb-60 w-[80%] p-6">
        <div className="text-4xl text-white font-bold mb-10 ">{"OUR TEAMS"}</div>
        <div className="w-full flex justify-center bg-[#141327] items-center h-[400px] max-w-4xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            className="relative"
          >
            {testimonials.map((item) => (
              <SwiperSlide
                key={item.id}
                className="text-white p-6 rounded-lg shadow-lg w-[100%]"
              >
                <div className="flex flex-col  w-[50] p-6 justify-center items-center">
                  <div className="text-xl font-bold">{item.title}</div>
                  <div className="flex max-lg:flex-col text-center items-center gap-4 justify-center w-[70%]">
                    <p className="text-gray-300 mt-2">{item.text}</p>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="mt-4 w-[30vw] h-[20vh] object-cover rounded-md"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Teams;
