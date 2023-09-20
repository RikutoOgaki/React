import { useReducer, useEffect } from 'react'
import { getTime } from './actioncreater'
import { reducer } from './reducer'
import style from '@/styles/sample/04/index.module.scss'

export default function Sample04() {

    const [state, dispatch] = useReducer(reducer, {
        time: '',
        isWaiting: false
    })

    useEffect(() => {
        getTime(dispatch)
    }, [])

    return (
        <>
            <div className={style.wrap}>
                <p className={style.time}>{state.time}</p>
                {state.isWaiting &&
                    <p className={style.wait}>お待ち下さい</p>
                }
                <button
                    className={style.btn}
                    onClick={() => { getTime(dispatch) }}
                >Click</button>
            </div>
        </>
    )
}