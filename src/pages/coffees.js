import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title key="title">czechcoffee | kávy</title>
      </Head>
      <Header active={"coffees"}/>
      <main className={styles.main}>
        <h1>Kávy</h1>
      </main>
      <Footer/>
    </div>
  )
}
