import { useReducer } from 'react'
import { reducer, ActionType } from './reducer'

export default function Sample12() {

    const [state, dispatch] = useReducer(reducer, { count: 0 })

    return (
        <>
            <p>{state.count}</p>

            <button onClick={() => dispatch({ actionType: ActionType.PLUS })}>PLUS</button>
            <button onClick={() => dispatch({ actionType: ActionType.MINUS })}>MINUS</button>
            <button onClick={() => dispatch({ actionType: ActionType.SET, payload: { count: 0 } })}>RESET</button>
        </>
    )
}