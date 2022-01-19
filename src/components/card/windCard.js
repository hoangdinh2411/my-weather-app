import React, { useState, useEffect } from "react";
import { windBg, windLogo,direction } from "assets";
import { FaArrowUp } from "react-icons/fa";

function WindCard({ info }) {
  const bgImage = {
    backgroundImage: `url(${windBg})`,
  };
  const directionImg = {
    backgroundImage: `url(${direction})`,
  };
  return (
    <div className="wind-card" style={bgImage}>
      <div className="heading">
        <div className="heading__icon">
          <img src={windLogo} title={info.title} />
        </div>
        <div className="heading__description">
          <p>{info.title}</p>
        </div>
        <div className="heading__deg" style={directionImg} >
            <span>

            <FaArrowUp style={{transform: `rotate(${info.deg}deg)`}}/>
            </span>
        </div>
      </div>
      <div className="other">
        
        <div className="parameters">
          <div className="humidity">
            <p>Speed</p>
            <span>{info.speed} m/s</span>
          </div>
          <div className="feelLike">
            <p>Gust</p>
            <span>{info.gust} m/s</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WindCard;
