import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import DogList from "./components/DogList";
import "./index.css";
import axios from "axios";
function App() {
  const [breedQuery, setBreedQuery] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [dogs, setDogs] = useState("");
  useEffect(() => {
    async function getDogs() {
      setLoading(true);
      const response = await axios.get(
        `https://dog.ceo/api/breed/${breedQuery}/images/random/3`
      );
      setDogs(response.data.message);
      setLoading(false);
    }
    if (breedQuery !== "") {
      getDogs();
    }
  }, [breedQuery]);
  const HandleBreedQuery = (q) => {
    setBreedQuery(q);
  };
  return (
    <div>
      <h1>Dog's!</h1>
      <Search breedQuery={HandleBreedQuery} />
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        dogs && <DogList dogs={dogs} breed={breedQuery} />
      )}
    </div>
  );
}

export default App;
