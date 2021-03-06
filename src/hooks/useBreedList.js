import { useState, useEffect } from "react";

export const useBreedList = (animal) => {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    setStatus("loading");

    async function requestBreeds() {
      const response = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const jsonResponse = await response.json();
      setBreedList(jsonResponse.breeds ?? []);
    }

    if (animal === "") {
      setBreedList([]);
    } else {
      requestBreeds();
    }
  }, [animal]);

  return [breedList, status];
};
