import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

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
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);
  const navigate = useNavigate(); // Navigation hook

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
  ];

  const rev_events = [...events].reverse();

  return (
    <div
      style={{
        backgroundColor: "#040313",
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "20px",
        color: "white",
      }}
    >
      <h2
        style={{
          fontFamily: "Roboto",
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        Our Events
      </h2>

      <div
        ref={scrollRef}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflowX: "auto",
          whiteSpace: "nowrap",
          width: "80vw",
          padding: "20px",
          position: "relative",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        className="scroll-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            paddingBottom: "10px",
            position: "relative",
          }}
        >
          {rev_events.map((event, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                margin: "0 10px",
                cursor: "pointer", // Indicating it's clickable
              }}
              onClick={() => navigate("/events")} // Navigate on click
              onMouseEnter={() => setHoveredEvent(index)}
              onMouseLeave={() => setHoveredEvent(null)}
            >
              {/* Left Connector */}
              {index > 0 && (
                <div
                  style={{
                    width: "80px",
                    height: "5px",
                    background:
                      "linear-gradient(90deg, rgba(255,255,255,0.5), rgba(255,255,255,0.8))",
                    borderRadius: "5px",
                    position: "absolute",
                    left: "-90px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    margin: "0 10px",
                  }}
                />
              )}

              <div
                style={{
                  width: "120px",
                  height: "120px",
                  minWidth: "120px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#fff",
                  boxShadow: "0 0 10px rgba(255, 255, 255, 0.2)",
                  zIndex: 2,
                }}
              >
                <img
                  src={event.src}
                  alt={event.info}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Event Name Below */}
              {hoveredEvent === index && (
                <div
                  style={{
                    position: "absolute",
                    top: "120px",
                    background: "rgba(255, 255, 255, 0.8)",
                    color: "black",
                    padding: "5px 10px",
                    borderRadius: "8px",
                    fontFamily: "Sora",
                    fontSize: "14px",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    zIndex: 3,
                  }}
                >
                  {event.info}
                </div>
              )}

              {/* Right Connector */}
              {index < rev_events.length - 1 && (
                <div
                  style={{
                    width: "80px",
                    height: "5px",
                    background:
                      "linear-gradient(90deg, rgba(255,255,255,0.5), rgba(255,255,255,0.8))",
                    borderRadius: "5px",
                    position: "absolute",
                    right: "-90px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .scroll-container::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  );
}

export default Timeline;
