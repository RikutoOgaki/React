import { useState } from 'react'

export default function Sample04() {

    const [state, setState] = useState(0)

    return (
        <>
            <div>
                <p>{state}</p>
                <button>プラス</button>
                <button>マイナス</button>
            </div>
        </>
    )
}