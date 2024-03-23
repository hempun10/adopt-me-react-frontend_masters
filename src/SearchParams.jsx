import React, { useState } from "react";
import useBreedList from "./useBreedList";
import { useQuery } from '@tanstack/react-query'
import Result from "./Result";
import fetchSearch from "./fetchSearch";
const ANIMAL = ["cat", "dog", "bird", "rabbit", "repitile"];
const SearchParams = () => {
    const [requestParams, setRequestParams] = useState({
        location: "",
        animal: "",
        breed: ""
    })
    const [animal, setAnimal] = useState("");
    const [breeds] = useBreedList(animal);

    const result = useQuery(['search', requestParams], fetchSearch)
    const pets = result?.data?.pets ?? []
    return (
        <div className="search-params">
            <form onSubmit={
                e => {
                    e.preventDefault()
                    const formData = new FormData(e.target)
                    const obj = {
                        animal: formData.get("animal") ?? "",
                        breed: formData.get("breed") ?? "",
                        location: formData.get("location") ?? "",
                    }
                    setRequestParams(obj)
                }
            }>
                <label htmlFor="location">
                    Location
                    <input
                        id="location"
                        name="location"
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
                            // setBreed("");
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
                        name={"breed"}
                        disabled={breeds.length === 0}

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
