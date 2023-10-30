import { useState, useEffect, ReactNode } from 'react'
import { Icon } from '@chakra-ui/react'
import style from '@/styles/sample/11/index.module.scss'
import Link from 'next/link'
import { ItemArray } from '@/libs/itemArray'


type Props = {
    children: ReactNode
}

export function Menu({ children }: Props) {

    // const [select, setSelect] = useState<string | undefined>(undefined)

    const [path, setPath] = useState('/sample/11')

    useEffect(() => {
        if (location.pathname === '/sample/11/item01') {
            setPath('/sample/11/item01')
        }
        else if (location.pathname === '/sample/11/item02') {

            setPath('/sample/11/item02')
        }
        else if (location.pathname === '/sample/11/item03') {
            setPath('/sample/11/item03')
        }
        else if (location.pathname === '/sample/11/item04') {
            setPath('/sample/11/item04')
        }
        else {
            setPath('/sample/11')
        }
    }, [])

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
            <footer className={style.foot}>
                {ItemArray.map((v, idx) => {
                    if (path === v.link) {
                        // console.log('成功');
                        return (
                            <Link href={v.link} key={idx} className={style.item}>
                                <Icon as={v.icon} className={style.trIcon} />
                                <p className={style.trIcon}>{v.name}</p>
                            </Link>
                        )
                    }
                    else {
                        // console.log('失敗');

                        return (
                            <Link href={v.link} key={idx} className={style.item}>
                                <Icon as={v.icon} className={style.faIcon} />
                                <p className={style.faIcon}>{v.name}</p>
                            </Link>
                        )
                    }
                }
                )}
            </footer>
        </>
    )
}