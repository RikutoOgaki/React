import style from '@/styles/Components/sample/02/component.module.scss'
import { useState, useEffect } from 'react'

type State = {
    text: string
}

export function Sample02Component(props: State) {

    const [state, setState] = useState({
        text: props.text
    })

    useEffect(() => {
        setState({
            ...state,
            text: props.text
        })
    }, [props])

    return (
        <>
            <div className={style.compoWrap}>
                <p className={style.text}>{state.text}</p>
            </div>
        </>
    )
}