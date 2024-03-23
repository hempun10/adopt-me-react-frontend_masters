import React, { useState, useEffect } from "react";
import useBreedList from "./useBreedList";
import Result from "./Result";
const ANIMAL = ["cat", "dog", "bird", "rabbit", "repitile"];
const SearchParams = () => {
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);
    const [breeds] = useBreedList(animal);

    useEffect(() => {
        requestPets();
    }, []);

    async function requestPets() {
        const res =
            await fetch(`https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}
  `);

        const json = await res.json()
        setPets(json.pets)
    }
    return (
        <div className="search-params">
            <form onSubmit={
                e => {
                    e.preventDefault()
                    requestPets()
                }
            }>
                <label htmlFor="location">
                    Location
                    <input
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Location"
                    />
                </label>
                <label htmlFor="animal">
                    {" "}
                    Animal
                    <select
                        id="animal"
                        value={animal}
                        onChange={(e) => {
                            setAnimal(e.target.value);
                            setBreed("");
                        }}
                    >
                        <option />
                        {ANIMAL.map((animal) => (
                            <option key={animal} value={animal}>
                                {animal}
                            </option>
                        ))}
                    </select>
                </label>
                <label htmlFor="breed">
                    {" "}
                    Breed
                    <select
                        id="breed"
                        value={breed}
                        disabled={breeds.length === 0}
                        onChange={(e) => setBreed(e.target.value)}
                    >
                        <option />
                        {breeds.map((breed) => (
                            <option key={breed} value={breed}>
                                {breed}
                            </option>
                        ))}
                    </select>
                </label>
                <button>Submit</button>
            </form>
            <Result pets={pets} />
        </div>
    );
};

export default SearchParams;
