import { useState, useEffect } from 'react'

export default function Sample07() {


    // APIの取得



    const [state, setState] = useState()

    useEffect(() => {
        fetch('api.ekispert.jp')
            .then(res => res.json())
            .then(json => {
                console.log(json);

            })
    }, [])

    return (
        <>

        </>
    )
}