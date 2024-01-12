import style from '@/styles/sample/16/index.module.scss'

// cssの内容系
// 台形 グラフ３種 

export default function Sample16() {
    return (
        <>
            <div className={style.wrap}>
                <div className={style.daikei}>
                    <div className={style.box1}></div>
                    <div className={style.box2}></div>
                    <div className={style.box1}></div>
                    <div className={style.box2}></div>
                    <div className={style.box1}></div>
                    <div className={style.box2}></div>
                    <div className={style.box1}></div>
                    <div className={style.box2}></div>
                </div>

                <div className={style.heikou}>
                    <div className={style.box3}></div>
                    <div className={style.box4}></div>
                    <div className={style.box3}></div>
                    <div className={style.box4}></div>
                    <div className={style.box3}></div>
                    <div className={style.box4}></div>
                </div>

                <div className={style.graph}>
                    <div className={style.bottom}>
                        <div className={style.top}>
                            <p>30% yellow</p>
                            <p>20% skyblue</p>
                            <p>50% blue</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}