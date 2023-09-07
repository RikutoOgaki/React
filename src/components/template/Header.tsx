import style from '@/styles/Components/template/header.module.scss'
import { SiReact } from 'react-icons/si'

export default function Header() {
    return (
        <>
            <header className={style.head}>
                <SiReact />
                <h1>ReactTemplatePage</h1>
            </header>
        </>
    )
}