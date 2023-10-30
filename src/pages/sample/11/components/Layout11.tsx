import { useState, useEffect, ReactNode } from 'react'
import { Icon } from '@chakra-ui/react'
import style from '@/styles/sample/11/index.module.scss'
import Link from 'next/link'


type Props = {
    children: ReactNode
}

export function Menu({ children }: Props) {

    const [select, setSelect] = useState<string | undefined>(undefined)

    return (
        <>
            <header style={{ width: '100%', height: '8vh', backgroundColor: '#262626' }}>
                <h1></h1>
            </header>
            <main>
                {children}
            </main>
            {/* <footer className={style.foot}>
                {itemArray.map((v, idx) =>
                    <Link
                        key={idx}
                        href={v.id}
                        onClick={() => setSelect(v.id)}
                    >
                        <div key={idx}
                            className={style.item}
                        >
                            <Icon
                                as={v.icon}
                                className={select === v.id ? style.trIcon : style.faIcon}
                            />
                            <p className={select === v.id ? style.trIcon : style.faIcon}>{v.name}</p>
                        </div>
                    </Link>
                )}
            </footer> */}
            <footer>

            </footer>
        </>
    )
}