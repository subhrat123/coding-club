<<<<<<< HEAD
//import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
//import { div } from "framer-motion/client";
import web_dev from "../Images/web_dev.avif";
import git from "../Images/git.png";
//import crossroads from "../Images/crossroads.jpg";
import gfx from "../Images/gfx.png";
import pr from "../Images/pr.png";
import event from "../Images/event.jpeg";

const testimonials = [
  {
    id: 1,
    title: "Web Development Team",
    text: "Our web wizards craft dynamic and responsive websites, ensuring a smooth user experience while pushing the boundaries of modern web technologies.",
    name: "XYZ",
    image: web_dev,
  },
  {
    id: 2,
    title: "Design Team",
    text: "The creative minds behind our visuals, the design team brings ideas to life with clean, functional, and aesthetic user interfaces that captivate and engage",
    name: "ABC",
    image: git,
  },
  {
    id: 3,
    title: "GFX Team",
    text: "Masters of digital artistry, the GFX team creates stunning visuals, from logos to promotional material, adding a vibrant touch to all our projects",
    name: "PQR",
    image: gfx,
  },
  {
    id: 3,
    title: "Event Management Team",
    text: "The voice of the club, the PR team handles communications, building connections, promoting events, and maintaining our positive image in the community",
    name: "PQR",
    image: event,
  },
  {
    id: 3,
    title: "PR Team",
    text: "Our event planners orchestrate seamless and memorable events, from ideation to execution, ensuring everything runs like clockwork.",
    name: "PQR",
    image: pr,
  },
];
=======
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { div } from 'framer-motion/client';

>>>>>>> 4bb514adcaf32ac77c12249aca17d2debba2d5d0

const Teams = () => {

  const [testimonials, setTestimonials] = useState([]);

useEffect(() => {
  axios.get('http://localhost:5000/items')  // Your backend URL
    .then(res => setTestimonials(res.data.map(item => ({
  id: item._id,
  title: item.title,
  text: item.text,  // if your backend uses 'description'
  image: item.image || ''  // depending on your schema
}))))
    .catch(err => console.error(err));
}, []);
  
  return (
    <div>
      <div className="flex flex-col justify-center bg-[#040015] items-center h-[40vh] m-auto mt-40 mb-60 w-[80%] p-6">
        <div className="text-4xl text-white font-bold mb-10 ">
          {"OUR TEAMS"}
        </div>
        <div className="w-full flex justify-center bg-[#141327] items-center h-[80vh] max-w-4xl mx-auto">
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
                  <div className="flex max-lg:flex-col text-center items-center gap-4 justify-center md:w-[70%]">
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
