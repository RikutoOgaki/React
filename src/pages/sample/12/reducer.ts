export type Action =
    { actionType: ActionType.PLUS } |
    { actionType: ActionType.MINUS } |
    { actionType: ActionType.SET, payload: { count: number } }

export enum ActionType {
    PLUS = 'PLUS',
    MINUS = 'MINUS',
    SET = 'SET'
}

export type State = {
    count: number
}

export function reducer(state: State, action: Action) {
    switch (action.actionType) {
        case ActionType.PLUS: return {
            ...state,
            count: state.count + 1
        }
        case ActionType.MINUS: return {
            ...state,
            count: state.count - 1
        }
        case ActionType.SET: return {
            ...state,
            count: action.payload.count
        }
    }
}