import React from "react";
import { useParams } from "react-router-dom";

const Random = (props) => {
  const { value } = useParams();

  return (
    <div>
      <h2>Random</h2>
      {isNaN(value) ? (
        <span>The word is: {value}</span>
      ) : (
        <span>The number is: {value} </span>
      )}
    </div>
  );
};

export default Random;
