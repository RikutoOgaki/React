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
          <li className={style.listItem}><Link href={'./sample/07'}>sample07 (ちょっとフロント)</Link></li>
          <li className={style.listItem}><Link href={'./sample/08'}>sample08 (inputの入力数値で計算する)</Link></li>
          <li className={style.listItem}><Link href={'./sample/09'}>sample09 (モーダル表示)</Link></li>
          <li className={style.listItem}><Link href={'./sample/10'}>sample010 (吹き出し追加)</Link></li>
          <li className={style.listItem}><Link href={'./sample/11'}>sample011 Menu作成</Link></li>
          <li className={style.listItem}><Link href={'./sample/12'}>sample012 redcuerを使ってカウントアップ</Link></li>
          <li className={style.listItem}><Link href={'./sample/12'}>sample013 現状どこを見ているかの表示</Link></li>
          <li className={style.listItem}><Link href={'./sample/14'}>sample014 画面の切り替え表示</Link></li>
          <li className={style.listItem}><Link href={'./sample/15'}>sample015 カウントダウンタイマー</Link></li>
        </ul>
      </div>
    </>
  )
}
