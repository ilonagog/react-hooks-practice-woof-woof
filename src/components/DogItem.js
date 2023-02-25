import React from 'react'

const DogItem = ({ pup, onUpdateDog }) => {
    if (!pup) return <h3>Select a doggo</h3>
    const { id, name, image, isGoodDog } = pup

    const handleClick = () => {
        fetch(`http://localhost:3001/pups/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ isGoodDog: !isGoodDog })
        })
            .then((r) => r.json())
            .then(onUpdateDog)
    }



    return (<>
        <div id="dog-summary-container">
            <h1>DOGGO:</h1>
            <div id="dog-info"> <img src={image} alt={image} />
                <h2>{name}</h2>
                <button onClick={handleClick} > {isGoodDog ? "Good " : "Bad"}Dog!</button></div>


        </div></>

    )
}

export default DogItem
