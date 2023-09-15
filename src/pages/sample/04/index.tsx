import { useState } from 'react'
import style from '@/styles/sample/04/index.module.scss'

export default function Sample04() {

    const [state, setState] = useState(0)

    return (
        <>
            <div className={style.wrap}>
                <div className={style.calc}>

                </div>
            </div>
        </>
    )
}