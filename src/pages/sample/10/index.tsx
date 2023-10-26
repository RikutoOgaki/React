import { useState, useEffect, useRef } from 'react'
import style from '@/styles/sample/10/index.module.scss'

type State = {
    chattext: string
}

export default function ChatView() {

    const elementRef = useRef<HTMLDivElement | null>(null)

    // ひとつの要素の幅と高さを取得する
    const [element, setElement] = useState({
        wdith: 0,
        height: 0
    })

    useEffect(() => {
        if (elementRef.current) {
            const ref = elementRef.current.getBoundingClientRect()
            setElement({
                ...element,
                wdith: ref.width,
                height: ref.height
            })
        }
    }, [])

    // ついこまれた内容を配列に入れるデータ
    const [state, setState] = useState<State>({
        chattext: ''
    })

    // chatの位置を持っておくデータ
    const [ChatArray, setChatArray] = useState([
        {
            text: 'ぽこ',
            x: 30,
            y: 40
        },
        {
            text: 'ぽこ',
            x: 90,
            y: 120
        },
    ])

    // チャットの吹き出しを数でもつ配列データ



    // 考え方
    // オブジェクトの配列にして、その中に位置データとテキストの内容を入れたら良いんじゃないかと思う



    // チャットを追加するための関数
    function AddChat() {
        // チャットで入力された内容を配列に入れる
        // 追加するタイミングでposiの値を入れるが、そこをランダムにする

    }

    // チャットをすべて消す関数
    function AllDelete() {

    }



    return (
        <>
            <div className={style.wrap}>
                <div ref={elementRef} className={style.chatView}>
                    {ChatArray.map((v, idx) =>
                        <div
                            key={idx}
                            className={style.chat}
                            style={{ position: 'absolute', top: `${v.y}px`, left: `${v.x}px` }}
                        >
                            <p>{v.text}</p>
                        </div>
                    )}
                </div>
                <div className={style.inputBox}>
                    <input
                        type="text"
                        className={style.input}
                        value={state.chattext}
                        onChange={(e) => setState({
                            ...state,
                            chattext: e.target.value
                        })}
                    />
                    <button
                        className={style.addBtn}
                        // 追加するボタン
                        // めんどくさいので関数にするかも。。。
                        onClick={() => {

                        }}
                    >追加</button>
                    <button
                        className={style.allDeleteBtn}
                        // 表示されているチャットをすべて削除するボタン
                        onClick={() => {

                        }}
                    >すべて削除</button>
                </div>
            </div>
        </>
    )
}