import { useState, useEffect } from 'react'
import style from '@/styles/sample/19/index.module.scss'

export default function Smaple19() {
    return (
        <>
            <div className={style.wrap}>
                <div
                    className={style.scrollBox}
                    onScroll={(e) => {
                        const scrollAmont = 480
                    }}
                >
                    <div className={style.box1}></div>
                    <div className={style.box2}></div>
                    <div className={style.box3}></div>
                </div>
            </div>
        </>
    )
}