import { useState } from 'react'
import Header from '@/components/template/Header'
import style from '@/styles/sample/01/index.module.scss'

export default function Sample01() {

    const [state, setState] = useState(0)

    return (
        <>
            <Header title={'カウントアップボタン'} />
            <div className={style.wrap}>
                <h1>{state}</h1>
                <div className={style.buttonBox}>
                    <button
                        onClick={() => setState(state + 1)}
                    >PLUS</button>
                    <button
                        onClick={() => setState(state - 1)}
                    >MINUS</button>
                </div>
            </div>
        </>
    )
}