import React from "react";

import "./wheelzoom";
import { useEffect } from "react";

const WheelZoom = () => {
  useEffect(() => {
    window.wheelzoom(document.getElementById("zoom-img"));
  }, []);

  return (
    <img
      alt=""
      id="zoom-img"
      className="zoom"
      style={{ height: "650px" }}
      src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"
    />
  );
};

export default WheelZoom;
