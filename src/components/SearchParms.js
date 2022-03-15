import { useState, useEffect } from "react";
import { useBreedList } from "../hooks/useBreedList";
import { PetsList } from "./PetsList";

const ANIMALS = ["cat", "rat", "dog", "bird", "reptile"];

export const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);

  useEffect(() => {
    requestPets();
  }, [location, animal, breed]);

  const requestPets = async () => {
    const resp = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );

    const jsonResponse = await resp.json();

    console.log(jsonResponse);
    setPets(jsonResponse.pets);
  };

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log(e.target.location.value);
  };
  return (
    <div className="search-params">
      <form onSubmit={handleFormSubmission}>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            onChange={handleInputChange}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option value={breed} key={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Submit </button>
      </form>
      <PetsList pets={pets} />
    </div>
  );
};
