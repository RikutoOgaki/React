import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import style from '@/styles/home.module.scss'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className={style.wrap}>
        <ul>
          <li><Link href={'./sample/01'}></Link></li>
          <li><Link href={'./sample/02'}></Link></li>
        </ul>
      </div>
    </>
  )
}
