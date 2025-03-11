import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import EventCard from "./Events.jsx";
import codingo from "../Images/codingo.png";
import web_dev from "../Images/web_dev.avif";
import Uipath from "../Images/Uipath.png";
import ethical_hack from "../Images/ethical_hack.jpg";
import avinya from "../Images/avinya.png";
import java24 from "../Images/java24.jpg";
import crossroads from "../Images/crossroads.jpg";
import cybersec from "../Images/cybersec.jpg";
import ux from "../Images/ux.png";
import cloud from "../Images/cloud.png";
import git from "../Images/git.png";
import java25 from "../Images/java24.jpg";
import cybersec_1 from "../Images/cybersecurity_1.jpg";
import cybersec_2 from "../Images/cybersecurity_2.jpg";
import cybersec_3 from "../Images/cybersecurity_3.jpg";

function Timeline() {
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const [clickedEvent, setClickedEvent] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!scrollRef.current) return;
    let scrollSpeed = 1;
    const scrollContainer = scrollRef.current;
    const scrollInterval = setInterval(() => {
      if (!isPaused) {
        scrollContainer.scrollLeft += scrollSpeed;
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }
    }, 50);
    return () => clearInterval(scrollInterval);
  }, [isPaused]);

  const events = [
<<<<<<< HEAD
    { src: codingo, info: "Codingo 3.0", p1: "", p2: "" },
    { src: web_dev, info: "Web Development Session" },
    { src: Uipath, info: "UI Path" },
    {
      src: ethical_hack,
      info: "Ethical Hacking Workshop",
    },
    { src: avinya, info: "AVINYA 2.0" },
    { src: java24, info: "Java Bootcamp '24" },
    {
      src: crossroads,
      info: "The Crossroads",
      p1: "../Images/crossroads1.jpg",
      p2: "../Images/crossroads2.jpg",
      p3: "../Images/crossroads3.jpg",
    },
    {
      src: cybersec,
      info: "Roadmap to Cyber Security",
      p1: "cybersec_1.jpg",
      p2: "cybersec_2.jpg",
      p3: "cybersec_3.jpg",
    },
    {
      src: ux,
      info: "UI/UX",
      p1: "../Images/ui1.png",
      p2: "../Images/ui2.png",
      p3: "../Images/ui3.png",
    },
    { src: cloud, info: "Cloud Session" }, //No imgs
    {
      src: git,
      info: "Git and GitHub",
      p1: "../Images/git1.png",
      p2: "../Images/git2.png",
      p3: "../Images/git3.png",
    },
    {
      src: java25,
      info: "Java Bootcamp '25",
      p1: "../Images/java251.png",
      p2: "../Images/java252.png",
      p3: "../Images/java253.png",
    },
=======
    { Imgsrc:[ codingo,java25], title: "Codingo 3.0", date: "2024", description: "A coding competition." },
    { Imgsrc: [web_dev,java25], title: "Web Development Session", date: "2024", description: "Learn web development." },
    { Imgsrc: [Uipath,java25], title: "UI Path", date: "2024", description: "Automation with UI Path." },
    { Imgsrc: [ethical_hack,java25], title: "Ethical Hacking Workshop", date: "2024", description: "Cybersecurity basics." },
    { Imgsrc: [avinya,java25], title: "AVINYA 2.0", date: "2024", description: "Tech fest event." },
    { Imgsrc: [java24,java25], title: "Java Bootcamp '24", date: "2024", description: "Java fundamentals." },
    { Imgsrc: [crossroads,java25], title: "The Crossroads", date: "2024", description: "Tech discussions." },
    { Imgsrc: [cybersec,java25], title: "Roadmap to Cyber Security", date: "2024", description: "Cyber security roadmap." },
    { Imgsrc: [ux,java25], title: "UI/UX", date: "2024", description: "UI/UX principles." },
    { Imgsrc: [cloud,java25], title: "Cloud Session", date: "2024", description: "Cloud computing basics." },
    { Imgsrc: [git,java25], title: "Git and GitHub", date: "2024", description: "Version control basics." },
    { Imgsrc: [java25,java25], title: "Java Bootcamp '25", date: "2025", description: "Advanced Java concepts." },
>>>>>>> c73235b8b69c6bf088feef43b7af04a7fd06a82e
  ];

  return (
    <div className="bg-black text-white flex flex-col h-[80vh] items-center gap-10 py-5">
      <h1 className="text-4xl font-extrabold mb-5">Our Events</h1>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto whitespace-nowrap px-20 w-4/5 h-full py-5 relative scroll-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {events.map((event, index) => (
          <div
            key={index}
            className="relative mx-4 cursor-pointer"
            onClick={() => setClickedEvent(index)}
            onMouseEnter={() => setHoveredEvent(index)}
            onMouseLeave={() => setHoveredEvent(null)}
          >
            {/* Event Image */}
            <div className="w-28 h-28 rounded-full overflow-hidden bg-white shadow-lg">
              <img src={event.Imgsrc[0]} alt={event.title} className="w-full h-full object-cover" />
            </div>

            {/* Event Card on Hover or Click */}
            {(hoveredEvent === index || clickedEvent === index) && (
              <div className="absolute left-1/2 transform -translate-x-1/2 w-72 z-[10] glassmorphism text-black p-4 rounded-lg shadow-lg">
                <EventCard event={event} />
                
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Hide Scrollbar */}
      <style>
        {`
          .scroll-container::-webkit-scrollbar {
            display: none;
          }
          .scroll-container {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </div>
  );
}

export default Timeline;
