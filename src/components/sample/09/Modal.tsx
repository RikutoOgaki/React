import { ReactNode, useState } from "react"

type Props = {
    flg: boolean,
    children: ReactNode
}

export function Modal(props: Props, { children }: Props) {

    const [state, setState] = useState({
        flg: props.flg
    })

    return (
        <>
            <div
                style={{ width: '100%', height: '100vh', backgroundColor: 'tomato' }}
                onClick={() => setState({ ...state, flg: false })}
            >
                <div>
                    {children}
                </div>
            </div>
        </>
    )
}