import style from '@/styles/Components/sample/02/component.module.scss'
import { useState } from 'react'

type State = {
    text: string
}

export function Sample02Component(props: State) {

    const [state, setState] = useState({
        text: props.text
    })

    return (
        <>
            <div className={style.compoWrap}>
                <p>{state.text}</p>
            </div>
        </>
    )
}