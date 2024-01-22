import style from '@/styles/sample/18/index.module.scss'

export default function Sample18() {

    const array = [1, 2, 3, 4, 5]


    return (
        <>
            <div className={style.wrap}>
                <div className={style.listBox}>
                    <div className={style.textBox}>
                        <h2>test</h2>
                    </div>
                    <ul className={style.list}>
                        {array.map((v, idx) =>
                            <li className={style.listItem}>{v}</li>
                        )}
                    </ul>
                </div>
                <div className={style.listBox}>
                    <div className={style.textBox}>
                        <h2>test</h2>
                    </div>
                    <ul className={style.list}>
                        {array.map((v, idx) =>
                            <li className={style.listItem}>{v}</li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}