import { useState, useEffect } from 'react'
import style from '@/styles/sample/15/index.module.scss'
import dayjs from 'dayjs'

export default function Smaple15() {

    // 現在時刻から指定の時間までの残り時間を算出して、カウントダウンタイマーをつくる

    // デモ実装 来年までのカウントダウンタイマーを作成

    // 今日の日付
    const now = dayjs()

    // 指定の時刻
    const targetTime = dayjs('2023-12-31 23:59:59')

    // 残り時間の計算
    const calcTime = targetTime.diff(now)


    let [days, setDays] = useState(0)
    let [hour, setHour] = useState(0)
    let [minits, setMinits] = useState(0)
    let [second, setSecond] = useState(0)

    function down() {
        if (second === 0) {
            setMinits(minits - 1)
            setSecond(59)
        }
        else if (minits === 0) {
            setHour(hour - 1)
            setMinits(59)
        }
        else if (hour === 0) {
            setDays(days - 1)
            setHour(24)
        }
    }

    useEffect(() => {

        setDays(Number(dayjs(calcTime).format('DD')))
        setHour(Number(dayjs(calcTime).format('HH')))
        setMinits(Number(dayjs(calcTime).format('mm')))
        setSecond(Number(dayjs(calcTime).format('ss')))

    }, [days, hour, minits, second])

    useEffect(() => {
        const downTImer = setInterval(down, 1000)
        return () => clearInterval(downTImer)
    }, [])


    return (
        <>
            <div className={style.wrap}>
                <p>{days}日{hour}時間{minits}分{second}秒</p>
            </div>
        </>
    )
}