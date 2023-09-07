import { Sample02Component } from '@/components/sample/02/Component'
import { useState } from 'react'

export default function Sample02() {

    const [state, setState] = useState({
        text: ''
    })

    return (
        <>
            <input type="text"
                onChange={(e) => setState({
                    ...state,
                    text: e.target.value
                })}
            />
            <Sample02Component text={state.text} />
        </>
    )
}