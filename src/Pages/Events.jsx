import React from "react";

const eventData = [
  {
    title: "Tech Conference 2025",
    date: "March 15, 2025",
    description: "An exciting conference on the latest technology trends.",
    Imgsrc: "/th (1).jpg",
  },
  {
    title: "AI Workshop",
    date: "April 5, 2025",
    description: "Hands-on workshop on artificial intelligence and machine learning.",
    Imgsrc: "/back.avif",
  },
  {
    title: "Web Dev Bootcamp",
    date: "May 10, 2025",
    description: "A beginner-friendly bootcamp covering modern web development.",
    Imgsrc: "/th (1).jpg",
  },
  {
    title: "Cybersecurity Summit",
    date: "June 20, 2025",
    description: "A deep dive into cybersecurity and ethical hacking.",
    Imgsrc: "/back.avif",
  },
  {
    title: "Blockchain Meetup",
    date: "July 15, 2025",
    description: "Exploring blockchain technology and its applications.",
    Imgsrc: "/vite.svg",
  },
  {
    title: "Data Science Hackathon",
    date: "August 30, 2025",
    description: "A competitive hackathon focused on data science challenges.",
    Imgsrc: "/back.avif",
  },
  {
    title: "Robotics Expo",
    date: "September 25, 2025",
    description: "Showcasing innovative robotics projects and advancements.",
    Imgsrc: "/back.avif",
  },
  {
    title: "Game Development Jam",
    date: "October 10, 2025",
    description: "A fun and creative game development event for all levels.",
    Imgsrc: "/th (1).jpg",
  },
  {
    title: "Cloud Computing Seminar",
    date: "November 5, 2025",
    description: "Learning about cloud computing and its real-world use cases.",
    Imgsrc: "/th (1).jpg",
  },
];

const EventCard = ({ title, date, description, Imgsrc }) => {
  return (
    <div className="bg-black bg-opacity-50 p-4 rounded-xl shadow-lg hover:scale-105 transition-transform cursor-pointer">
      <img src={Imgsrc} alt={title} className="w-full h-40 object-cover rounded-lg" />
      <h3 className="mt-3 text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-gray-300">{date}</p>
      <p className="text-sm text-gray-200 mt-1">{description}</p>
    </div>
  );
};

const Events = () => {
  return (
    <div className="mt-24 bg-[#040313] min-h-screen">
      <div className="bg-[#040313] bg-opacity-70 py-10">
        <h1 className="text-center text-3xl font-bold text-white mb-6">Upcoming Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {eventData.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
