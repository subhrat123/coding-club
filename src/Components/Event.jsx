import React from "react";
import image from "../Images/image.png";

const Event = ({ Imgsrc, info, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px",
        cursor: "pointer",
        position: "relative",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img
        src={image}
        alt="Event"
        style={{
          width: "50px",
          height: "15px",
          objectFit: "cover",
          margin: "-20px",
        }}
      />

      <img
        src={Imgsrc}
        alt="Event"
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          objectFit: "cover",
          // marginLeft: "10px",
        }}
      />
      <img
        src={image}
        alt="Event"
        style={{
          width: "50px",
          height: "15px",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default Event;
/*{Array.from({ length: 8 }).map((_, i) => (
  <div
    key={i}
    style={{
      width: "50px",
      height: "5px",
      background:
        "linear-gradient(90deg,rgba(0,0,0,0.8), rgba(255,255,255,0.5), rgba(0,0,0,0.8))",
      borderRadius: "5px",
      margin: "0 10px",
    }}
  />
))}*/
