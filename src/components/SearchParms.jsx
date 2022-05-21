import { useContext, useEffect, useState } from "react";
import { useBreedList } from "../hooks/useBreedList.js";
import { PetsList } from "./PetsList.jsx";
import { ThemeContext } from "../contexts/ThemeContext.jsx";

const ANIMALS = ["cat", "rat", "dog", "bird", "reptile"];

export const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);
  const [theme, setTheme] = useContext(ThemeContext);

  useEffect(() => {
    requestPets();
  }, [location, animal, breed]);

  const requestPets = async () => {
    const resp = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );

    const jsonResponse = await resp.json();

    setPets(jsonResponse.pets);
  };

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
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
        <label htmlFor={"theme"}>
          Theme
          <select
            value={theme}
            onChange={(event) => setTheme(event.target.value)}
            onBlur={(event) => setTheme(event.target.value)}
          >
            <option value={theme}></option>
            <option value={"#f06d06"}>orange</option>
            <option value={"violet"}>violet</option>
            <option value={"pink"}>pink</option>
          </select>
        </label>
        <button type="submit" style={{ backgroundColor: theme }}>
          Submit{" "}
        </button>
      </form>
      <PetsList pets={pets} />
    </div>
  );
};
