import { useState } from 'react'
import style from '@/styles/sample/06/index.module.scss'

type Task = {
    task: string,
    taskArray: Array<string>
}

export default function Sample06() {

    const [state, setState] = useState<Task>({
        task: '',
        taskArray: []
    })

    return (
        <>
            <div className={style.wrap}>
                <div className={style.inputBox}>
                    <input type="text" value={state.task}
                        className={style.inputText}
                        onChange={(e) => setState({
                            ...state,
                            task: e.target.value
                        })}
                    />
                    <button
                        className={style.btn}
                        onClick={() => setState({
                            ...state,
                            taskArray: [
                                ...state.taskArray,
                                state.task
                            ],
                            task: ''
                        })}
                    >追加</button>
                </div>
                <div className={style.taskBox}>
                    {state.taskArray.map((v, idx) =>
                        <div key={idx} className={style.taskNum}>
                            <p>{v}</p>
                            <button
                                onClick={() => setState({
                                    ...state,
                                    taskArray: state.taskArray.filter((x, idx2) => idx !== idx2)
                                })}
                            >削除</button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}