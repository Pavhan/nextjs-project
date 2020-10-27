import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to my page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my page
        </h1>
        <Image
          src="/unsplash1.jpg"
          alt="Picture of the author"
          width={1500}
          height={999}
          priority
          
        />
        <Image
          src="/unsplash2.jpg"
          alt="Picture of the author"
          width={2320}
          height={2320}
          loading="lazy"
        />
        <Image
          src="/unsplash3.jpg"
          alt="Picture of the author"
          width={4714}
          height={5893}
          loading="lazy"
        />
        <Image
          src="/unsplash4.jpg"
          alt="Picture of the author"
          width={4000}
          height={6000}
          loading="lazy"
        />
      </main>
    </>
  )
}
