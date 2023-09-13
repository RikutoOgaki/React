import { Sample02Component } from '@/components/sample/02/Component'
import Header from '@/components/template/Header'
import { useState } from 'react'
import style from '@/styles/sample/02/index.module.scss'

export default function Sample02() {

    const [state, setState] = useState({
        text: ''
    })

    return (
        <>
            <Header title={'Componentの使い方'} />
            <div className={style.wrap}>
                <Sample02Component text={state.text} />
                <input type="text"
                    className={style.inputText}
                    onChange={(e) => setState({
                        ...state,
                        text: e.target.value
                    })}
                />
            </div>
        </>
    )
}