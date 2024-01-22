import { useEffect } from 'react'


async function logMovies() {
    const response = await fetch("https://ntool.online/data/train_all.json", {
        method: 'GET',
        cache: 'no-cache'
    });
    const movies = await response.json();
    console.log(movies);
}

export default function Sample17() {


    // const url = 'https://ntool.online/data/train_all.json'
    // fetch(url)
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data);
    //     })



    useEffect(() => {
        logMovies()
    }, [])

    return (
        <>

        </>
    )
}