import { useState, useEffect } from 'react'
import style from '@/styles/sample/10/index.module.scss'

type State = {
    chattext: string
}

export default function ChatView() {

    // ついこまれた内容を配列に入れるデータ
    const [state, setState] = useState<State>({
        chattext: ''
    })

    // chatの位置を持っておくデータ
    const [posi, setPosi] = useState({
        x: 0,
        y: 0
    })

    // チャットの吹き出しを数でもつ配列データ
    const ChatArray: Array<string> = []

    return (
        <>
            <div className={style.wrap}>
                <div className={style.chatView}>
                    {ChatArray.map((idx, v) =>
                        <div
                            key={idx}
                            className={style.chat}
                            style={{ position: 'absolute', top: `${posi.y}px`, left: `${posi.x}px` }}
                        >{v}</div>
                    )}
                </div>
                <div className={style.inputBox}>
                    <input type="text" className={style.input} value={state.chattext} />
                    <button
                        // 追加するボタン
                        onClick={() => {

                        }}
                    >追加</button>
                    <button
                        // 表示されているチャットをすべて削除するボタン
                        onClick={() => {

                        }}
                    >すべて削除</button>
                </div>
            </div>
        </>
    )
}