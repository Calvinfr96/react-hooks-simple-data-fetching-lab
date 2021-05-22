// create your App component here
import React, { useEffect, useState } from 'react'

function App() {
    const [imgArray, setImgArray] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(resp => resp.json())
            .then(data => {
                setImgArray([data.message])
                setIsLoaded(true)
            })
    }, [])
    if (!isLoaded) return <p>Loading...</p>;
    return (
        imgArray.map(img => {
            return <img src={img} alt="A Random Dog" />
        })
    )
}

export default App;