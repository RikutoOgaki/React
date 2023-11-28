import { useState, useEffect } from 'react'
import style from '@/styles/sample/15/index.module.scss'
import dayjs from 'dayjs'

export default function Smaple15() {

    // 現在時刻から指定の時間までの残り時間を算出して、カウントダウンタイマーをつくる

    // デモ実装 来年までのカウントダウンタイマーを作成

    // 今日の日付
    const now = dayjs()

    // 指定の時刻
    const targetTime = dayjs('2023-11-28 12:21:00')

    // 残り時間の計算
    const calcTime = targetTime.diff(now)
    console.log(dayjs(calcTime).format('mm:ss'));





    return (
        <>
            <div className={style.wrap}>

            </div>
        </>
    )
}