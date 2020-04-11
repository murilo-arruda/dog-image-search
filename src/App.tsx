import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import DogList from "./components/DogList";
import axios from "axios";
import "modern-normalize";
import "./index.css";

function App() {
  const [breedQuery, setBreedQuery] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    async function getDogs() {
      setLoading(true);
      const response = await axios.get(
        `https://dog.ceo/api/breed/${breedQuery}/images/random/14`
      );
      setDogs(response.data.message);
      setLoading(false);
    }
    if (breedQuery !== "") {
      getDogs();
    }
  }, [breedQuery]);
  const HandleBreedQuery = (q: string) => {
    setBreedQuery(q);
  };
  return (
    <main>
      <h1 className="title">Dog Finder</h1>
      <Search breedQuery={HandleBreedQuery} />
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        dogs && <DogList dogs={dogs} breed={breedQuery} />
      )}
    </main>
  );
}

export default App;
