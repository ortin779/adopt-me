import { Pet } from "./Pet.jsx";

export const PetsList = (props) => {
  return (
    <div className="search">
      {!props.pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        props.pets.map((pet) => (
          <Pet
            id={pet.id}
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            location={pet.city}
            images={pet.images}
            key={pet.id}
          />
        ))
      )}
    </div>
  );
};
