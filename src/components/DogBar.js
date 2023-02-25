import React from 'react'

const DogBar = ({ pups, onClickDog }) => {
    const spans = pups.map((pup) => (
        <span key={pup.id} onClick={() => onClickDog(pup.id)}>
            {pup.name}
        </span>
    ))
    return (
        <div id="dog-bar">{spans}

        </div>
    )
}

export default DogBar
