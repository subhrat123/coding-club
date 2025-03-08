import React, { useState } from "react";
import Event from "./Event";
import { motion } from "framer-motion";

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
import back from "../Images/back.avif";

function Timeline() {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredEventInfo, setHoveredEventInfo] = useState(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (info, event) => {
    setIsPaused(true);
    setHoveredEventInfo(info);
    const rect = event.currentTarget.getBoundingClientRect(); // Use currentTarget to ensure correct element reference
    setHoverPosition({
      x: rect.left + window.scrollX,
      y: rect.top + window.scrollY - 50,
    });
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    setHoveredEventInfo(null);
  };

  const events = [
    { src: codingo, info: "Codingo 3.0" },
    { src: web_dev, info: "Web Development Session" },
    { src: Uipath, info: "UI Path" },
    { src: ethical_hack, info: "Ethical Hacking Workshop" },
    { src: avinya, info: "AVINYA 2.0" },
    { src: java24, info: "Java Bootcamp '24" },
    { src: crossroads, info: "The Crossroads" },
    { src: cybersec, info: "Roadmap to Cyber Security" },
    { src: ux, info: "UI/UX" },
    { src: cloud, info: "Cloud Session" },
    { src: git, info: "Git and GitHub" },
    { src: java25, info: "Java Bootcamp '25" },
  ];

  const rev_events = events.reverse();
  return (
    <div
      style={{
        backgroundImage: `url(${back})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "20px",
          color: "white",
          fontFamily: "Roboto",
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        Our Events
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "450px", // Adjusting height to fit below header
          overflow: "hidden",
          position: "relative",
        }}
      >
        {hoveredEventInfo && (
          <div
            style={{
              color: "white",
              textAlign: "center",
              fontFamily: "Sora",
              position: "absolute",
              top: hoverPosition.y - 100,
              left: hoverPosition.x,
              width: "108px",
              height: "30px",
              border: "2px solid  #ffffff,",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              background:
                "linear-gradient(135deg, #800080, black, #4B0082, black)",
              padding: "10px",
              //zIndex: 10,
            }}
          >
            {hoveredEventInfo}
          </div>
        )}

        <motion.div
          animate={isPaused ? { x: "-1%" } : { x: "-25%" }} // Move by half since we duplicate
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            display: "flex",
            whiteSpace: "nowrap", // Ensures items don't wrap to the next line
          }}
        >
          {/* Duplicate the events to make the scrolling seamless */}
          {[...rev_events, ...rev_events].map((event, index) => (
            <Event
              key={index}
              Imgsrc={event.src}
              info={event.info}
              onMouseEnter={(e) => handleMouseEnter(event.info, e)}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Timeline;
