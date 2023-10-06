import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import style from '@/styles/home.module.scss'
import Header from '@/components/template/Header'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className={style.wrap}>
        <Header title={'ReactTemplatePage'} />
        <ul className={style.list}>
          <li className={style.listItem}><Link href={'./sample/01'}>sample01 カウントアップボタン</Link></li>
          <li className={style.listItem}><Link href={'./sample/02'}>sample02 Componentの使い方</Link></li>
          <li className={style.listItem}><Link href={'./sample/03'}>sample03 useEffectの使い方</Link></li>
          <li className={style.listItem}><Link href={'./sample/04'}>sample04 Reducerについて(個人的な内容)</Link></li>
          <li className={style.listItem}><Link href={'./sample/05'}>sample05 (計算機)</Link></li>
          <li className={style.listItem}><Link href={'./sample/06'}>sample06 (ToDoList)</Link></li>
          <li className={style.listItem}><Link href={'./sample/07'}>sample07 (API)</Link></li>
        </ul>
      </div>
    </>
  )
}
