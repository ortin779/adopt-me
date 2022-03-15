import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Carousel } from "./Carousel";

export const Details = () => {
  const params = useParams();
  const [petDetails, setPetDetails] = useState("");

  useEffect(() => {
    requestPetDetails(params.id);
  }, []);

  const requestPetDetails = async (id) => {
    const resp = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

    const jsonResponse = await resp.json();
    setPetDetails(jsonResponse.pets[0]);
  };

  console.log(petDetails);

  return (
    <div className="details">
      <Carousel images={petDetails.images}/>
      <div>
        <h1>{petDetails.name}</h1>
        <h2>{`${petDetails.animal} - ${petDetails.breed} - ${petDetails.city} - ${petDetails.state}`}</h2>
        <button>Adopt {petDetails.name}</button>
        <p>{petDetails.description}</p>
      </div>
    </div>
  );
};
