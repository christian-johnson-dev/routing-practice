import React from "react";
import { useParams } from "react-router-dom";

const Hello = (params) => {
  const { color1, color2 } = useParams();

  const style = {
    color: color1,
    backgroundColor: color2,
  };
  return <div style={style}>Hello</div>;
};

export default Hello;
