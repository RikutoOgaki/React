import { useState, useEffect } from 'react'
import Header from '@/components/template/Header'
import style from '@/styles/sample/03/index.module.scss'


function rollDice() {
    return Math.floor(Math.random() * 6 + 1)
}

export default function Sample03() {

    const [state, setState] = useState(0)


    useEffect(() => {
        setState(rollDice())
    }, [])


    return (
        <>
            <Header title={'sample03 useEffectについて'} />
            <div className={style.wrap}>
                <div className={style.btnBox}>
                    <p className={style.text}>{state}</p>
                    <button
                        className={style.btn}
                        onClick={() => setState(rollDice())}
                    >サイコロをふる</button>
                </div>
            </div>
        </>
    )
}