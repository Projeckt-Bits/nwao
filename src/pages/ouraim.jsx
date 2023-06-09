import Head from 'next/head'
import Image from 'next/image'
import Styles from '../styles/OurAim.module.scss'
import NavBar from './components/NavBar'

export default function ouraim() {
  return (
    <>
      <Head>
        <title>Our Aim - NWAO</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar />
    </>
  )
}
