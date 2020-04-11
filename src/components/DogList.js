import React from "react";
import DogItem from "./DogItem";

const DogList = ({ dogs }) => {
  return (
    <div className="img-wrapper">
      {dogs.map((dog, i) => (
        <DogItem dogImage={dog} key={i} />
      ))}
    </div>
  );
};

export default DogList;
