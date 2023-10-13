import { useState, useEffect } from 'react'
import style from '@/styles/sample/08/index.module.scss'

type State = {
}

// inputの入力された値で計算する

export default function Sample08() {

    const [state, setState] = useState({
        clac1: '',
        calc2: '',
        result: 0
    })

    return (
        <>
            <div className={style.wrap}>
                <input type="text" value={state.clac1}
                    onChange={(e) => setState({
                        ...state,
                        clac1: e.target.value
                    })}
                />
                <input type="text" value={state.calc2}
                    onChange={(e) => setState({
                        ...state,
                        calc2: e.target.value
                    })}
                />
                <button
                    onClick={() => {
                        let A = Number(state.clac1)
                        let B = Number(state.calc2)

                        setState({ ...state, result: A + B })
                    }}
                >CLick</button>
                <p>{state.result}</p>
            </div>
        </>
    )
}