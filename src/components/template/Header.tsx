import { useState } from 'react'
import style from '@/styles/Components/template/header.module.scss'
import { SiReact } from 'react-icons/si'

type State = {
    title: string
}

export default function Header(props: State) {

    const [state, setState] = useState({
        title: props.title
    })

    return (
        <>
            <header className={style.head}>
                <SiReact fontSize={'2rem'} className={style.icon} />
                <h1>{state.title}</h1>
            </header>
        </>
    )
}