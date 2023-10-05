import { useState, useEffect } from 'react'
import style from '@/styles/sample/05/index.module.scss'

export default function Sample05() {

    const [result, setResult] = useState('')

    // 計算する数字配列
    const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    // 四則演算、計算結果を出力配列
    const calcArray = ['+', '-', '/', '*', '=', 'c']

    // 数字が入力されるクリック関数
    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(e.target);

        // setResult(result + value)
    }

    // 四則演算用の関数

    // 数字をクリアする関数

    // イコールで計算して、出力する関数

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
                                label={v}
                                onClick={(e) => handleButtonClick(e)}
                            />
                        )}
                        {calcArray.map((v, idx2) =>
                            <button
                                key={idx2}
                                className={style.btn}
                                label={ }
                                onClick={(e) => handleButtonClick(e)}
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}