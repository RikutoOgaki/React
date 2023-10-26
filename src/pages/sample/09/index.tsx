import { useState, useEffect, ReactNode } from 'react'
import { Modal } from '@/components/sample/09/Modal'

type State = {
    flg: boolean
}

export default function Sampel09() {

    const [state, setState] = useState<State>({
        flg: false
    })

    return (
        <>
            <div>
                <button
                    onClick={() => setState({ ...state, flg: true })}
                >Click</button>
                {state.flg &&
                    <Modal
                        flg={state.flg}
                    >
                        <div>
                            test表示
                        </div>
                    </Modal>
                }
            </div>
        </>
    )
}