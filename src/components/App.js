import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import DogBar from "./DogBar";
import DogItem from "./DogItem";
import Filter from "./Filter";

function App() {
  const [pups, setPups] = useState([])
  const [selectedPupId, setSelectedPupId] = useState(null)
  const [goodDogsOnly, setGoodDogsOnly] = useState(false)
  useEffect(() => {
    fetch(" http://localhost:3001/pups")
      .then((r) => r.json())
      .then(setPups)
  }, [])
  const selectedPup = pups.find((pup) => pup.id === selectedPupId)
  let displayDogs = pups;
  if (goodDogsOnly) {
    displayDogs = displayDogs.filter((pup) => pup.isGoodDog)
  }
  const onUpdateDog = (updatedDog) => {
    const updatedDogs = pups.map((pup) => pup.id === updatedDog.id ? updatedDog : pup)
    setPups(updatedDogs)
  }
  const handleToggleFilter = () => {
    setGoodDogsOnly((goodDogsOnly) => !goodDogsOnly)
  }
  return (
    <div className="App">
      <DogBar pups={displayDogs} onClickDog={setSelectedPupId} />
      <DogItem pup={selectedPup} onUpdateDog={onUpdateDog} />
      <Filter goodDogsOnly={goodDogsOnly} onFilterClick={handleToggleFilter} />
    </div>
  );
}

export default App;
