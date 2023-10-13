import { useState } from 'react'
import style from '@/styles/sample/09/index.module.scss'

export default function Sample09() {

    const [state, setState] = useState({
        data: '',
        data2: ''
    })

    return (
        <>
            <div style={{ width: '100%', height: '100vh', backgroundColor: `${state}` }}></div>

            <input type="text" value={state.data}
                onChange={(e) => {
                    setState({
                        ...state,
                        data: e.target.value
                    })
                }}
            />
        </>
    )
}