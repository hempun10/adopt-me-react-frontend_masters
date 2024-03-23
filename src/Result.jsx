import React from 'react'
import Pet from './Pet'

const Result = ({ pets }) => {
    return (
        <div className='search'>
            {
                !pets.length ? (
                    <h1>No pets found</h1>
                ) : (
                    pets.map(pet => (
                        <Pet key={pet.id} name={pet.name} breed={pet.breed} animal={pet.animal} images={pet.images} location={`${pet.city}, ${pet.state}`} />
                    ))
                )
            }
        </div>
    )
}

export default Result
