import React from "react";
import DogItem from "./DogItem";

interface Props {
  dogs: Array<string>;
  breed: string;
}

const DogList = ({ dogs, breed }: Props) => {
  return (
    <div className="img-wrapper">
      {dogs.map((dog, i) => (
        <DogItem dogImage={dog} key={i} />
      ))}
    </div>
  );
};

export default DogList;
