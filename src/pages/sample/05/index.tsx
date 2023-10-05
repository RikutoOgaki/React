import { useState, useEffect } from 'react'
import style from '@/styles/sample/05/index.module.scss'

export default function Sample05() {

    // 式や計算結果を入れるstate
    const [result, setResult] = useState('')

    // 計算する数字配列
    const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    // 四則演算、計算結果を出力配列
    const calcArray = ['+', '-', '/', '*', '=', 'c']

    // 数字が入力されるクリック関数
    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

        const value: string = e.currentTarget.innerText

        setResult(result + value)
    }

    // イコールで計算して、出力する関数
    const handleEqualClick = () => {
        if (result.length >= 0) {
            setResult(eval(result))
        }
        else {
            console.log('数値が入力されてないです');
        }
    }

    // 数字をクリアする関数
    const handleClearClick = () => {
        setResult('')
    }

    return (
        <>
            <div className={style.wrap}>
                <div className={style.calcBox}>
                    <div className={style.inputBox}>
                        <input className={style.input} type="text" value={result} />
                    </div>
                    <div className={style.btnBox}>
                        {numberArray.map((v, idx) =>
                            <button
                                key={idx}
                                className={style.btn}
                                onClick={(e) => handleButtonClick(e)}
                            >{v}</button>
                        )}
                        {calcArray.map((v, idx2) =>
                            <button
                                key={idx2}
                                className={style.btn}
                                onClick={(e) => v === '=' ? handleEqualClick() : v === 'c' ? handleClearClick() : handleButtonClick(e)}
                            >{v}</button>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}