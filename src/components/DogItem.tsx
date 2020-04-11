import React from "react";

const DogItem = ({ dogImage }: { dogImage: string }) => {
  return <img src={dogImage} alt="dog" />;
};

export default DogItem;
