import { useState, useEffect } from 'react'
import style from '@/styles/sample/07/index.module.scss'

type State = {
    array: Array<Data>
}

type Data = {
    title: string,
    text: string,
    img: string
}

export default function Sample07() {

    const [state, setState] = useState<State>({
        array: [
            {
                title: 'title',
                text: 'sampleTextdata',
                img: '/img/yotaka.jpg'
            },
            {
                title: 'title',
                text: 'sampleTextdata',
                img: '/img/yotaka.jpg'
            },
            {
                title: 'title',
                text: 'sampleTextdata',
                img: '/img/yotaka.jpg'
            },
        ]
    })

    return (
        <>
            <div className={style.wrap}>
                {
                    state.array.map((v, idx) =>
                        <div key={idx}>
                            <h1>{v.title}</h1>
                            <img src={v.img} alt="" />
                            <p>{v.text}</p>
                        </div>
                    )
                }
            </div>
        </>
    )
}