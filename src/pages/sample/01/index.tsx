import { useState } from 'react'

export default function Sample01() {

    const [state, setState] = useState(0)

    return (
        <>
            <button
                onClick={() => setState(state + 1)}
            >PLUS</button>
            <button
                onClick={() => setState(state - 1)}
            >MINUS</button>
        </>
    )
}