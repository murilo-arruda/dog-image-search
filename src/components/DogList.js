import React from "react";
import DogItem from "./DogItem";

const DogList = ({ dogs }) => {
  return (
    <ul>
      {dogs.map((dog, i) => (
        <DogItem dogImage={dog} key={i} />
      ))}
    </ul>
  );
};

export default DogList;
