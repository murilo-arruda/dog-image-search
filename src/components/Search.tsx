import React, { useState, useEffect } from "react";
import breeds from "../breedList";
import fuzzy from "fuzzy";

interface Props {
  breedQuery: Function;
}

const Search = ({ breedQuery }: Props) => {
  const [breed, setBreed] = useState("");
  const [possibleBreeds, setPossibleBreeds] = useState(breeds);
  const [alert, setAlert] = useState(false);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (possibleBreeds.some((item) => item === breed)) {
      breedQuery(breed);
    } else {
      setAlert(true);
    }
  };
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setBreed(e.target.value);
  };
  useEffect(() => {
    setAlert(false);
    const result = fuzzy.filter(breed, breeds);
    setPossibleBreeds(result.map((i) => i.string));
  }, [breed]);
  const handleClick = (dogBreed: string) => {
    setBreed(dogBreed);
    breedQuery(dogBreed);
  };
  return (
    <div>
      {alert && <h3 className="alert">Please insert a valid breed</h3>}
      <form className="form-wrapper" onSubmit={handleSubmit}>
        <input
          list="breeds"
          placeholder="Search a dog breed"
          value={breed}
          onChange={handleChange}
        />
        <ul className="custom-ul scrollmenu">
          {possibleBreeds.map((dogBreed) => (
            <li
              className="custom-li"
              onClick={() => handleClick(dogBreed)}
              key={dogBreed}
            >
              {dogBreed}
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default Search;
