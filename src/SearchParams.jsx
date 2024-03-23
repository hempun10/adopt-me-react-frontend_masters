import React, { useState } from 'react'
const ANIMAL = ["Cat", "Dog", "Bird", "Rabbit", "Repitile"]
const SearchParams = () => {
    const [location, setLocation] = useState("")
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const breeds = ["Nirjan"]
    return (
        <div className='search-params'>
            <form>
                <label htmlFor='location'>Location
                    <input id='location' value={location} onChange={e => setLocation(e.target.value)} placeholder='Location' />
                </label>
                <label htmlFor='animal'> Animal
                    <select id='animal' value={animal} onChange={e => {
                        setAnimal(e.target.value)
                        setBreed("")
                    }}
                    >
                        <option />
                        {
                            ANIMAL.map(animal => (
                                <option key={animal} value={animal}>{animal}</option>
                            ))
                        }
                    </select>
                </label>
                <label htmlFor='breed'> Breed
                    <select id='breed' value={breed} disabled={breeds.length === 0} onChange={e => setBreed(e.target.value)}
                    >
                        <option />
                        {

                            breeds.map(breed => (
                                <option key={breed} value={breed}>{breed}</option>
                            ))
                        }
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams
