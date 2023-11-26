import { useState, useEffect } from 'react'
import style from '@/styles/sample/13/index.module.scss'

export default function Sample13() {

    const [state, setState] = useState(0)

    const array = [0, 1, 2]

    return (
        <>
            <div className={style.wrap}>
                <div className={style.mikiBox}>
                    {array.map((v, idx) =>
                        <div
                            key={idx}
                            className={state === v ? style.circleOn : style.circle}
                        >{v}</div>
                    )}
                </div>

                <button onClick={() => {
                    setState(state + 1)

                    if (state === 2) {
                        setState(0)
                    }
                }}>次へ</button>
            </div>
        </>
    )
}