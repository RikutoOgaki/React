// １３の内容を強化して、ページが遷移しているように見せる
import { useState, useEffect } from 'react'
import style from '@/styles/sample/14/index.module.scss'

export default function Sample14() {

    const [state, setState] = useState(1)

    const array = [1, 2, 3]

    const Button = () => {
        return (
            <>
                <button
                    className={style.btn}
                    onClick={() => {
                        setState(state + 1)

                        if (state === 3) {
                            setState(1)
                        }
                    }}
                >次へ</button>
            </>
        )
    }

    // １つ目のページ
    const First = () => {
        return (
            <>
                <div className={style.box1}>
                    <h1>First</h1>
                    {/* <button
                        onClick={() => {
                            setState(state + 1)

                            if (state === 3) {
                                setState(1)
                            }
                        }}
                    >次へ</button> */}
                    <Button />
                </div>
            </>
        )
    }

    // ２つ目のページ
    const Secound = () => {
        return (
            <>
                <div className={style.box2}>
                    <h1>Secound</h1>
                    {/* <button
                        onClick={() => {
                            setState(state + 1)

                            if (state === 3) {
                                setState(1)
                            }
                        }}
                    >次へ</button> */}
                    <Button />
                </div>
            </>
        )
    }

    // ３つ目のページ
    const Third = () => {
        return (
            <>
                <div className={style.box3}>
                    <h1>Therd</h1>
                    {/* <button
                        onClick={() => {
                            setState(state + 1)

                            if (state === 3) {
                                setState(1)
                            }
                        }}
                    >次へ</button> */}
                    <Button />
                </div>
            </>
        )
    }





    return (
        <>
            <div className={style.wrap}>
                <div className={style.head}>
                    <div className={style.circleBox}>
                        {array.map((v, idx) =>
                            <div
                                key={idx}
                                className={state === v ? style.circleOn : style.circle}
                            ></div>
                        )}
                    </div>
                </div>
                <div className={style.page}>
                    <div className={style.box}>
                        {
                            state === 1 ? <First /> :
                                state === 2 ? <Secound /> :
                                    state === 3 ? <Third /> : undefined
                        }
                        <Button />
                    </div>
                </div>
            </div>
        </>
    )
}