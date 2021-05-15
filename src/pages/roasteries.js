import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useRoasteries} from "../context/roasteries";
import Header from "../components/header";
import Footer from "../components/footer";
import {Facebook, GeoAltFill, Instagram, BagFill, Youtube} from "react-bootstrap-icons";

export default function Home() {
  const {roasteries} = useRoasteries();
  return (
    <div className={styles.container}>
      <Head>
        <title key="title">czechcoffee | pražírny</title>
      </Head>
      <Header active={"roasteries"}/>
      <main className={styles.main}>
        <div className={styles.grid}>
          {roasteries && roasteries.map(r => (
            <div className={styles.card} key={r.name}>
              <a className="roasteryCard" href={`/roasteries/${r.id}`}>
                <div className={styles.cardImageWrap} style={{"backgroundImage": `url(${r.logo})`}}/>
                <div>
                  <div className={styles.cardName}>
                    <a href={r.website}>{r.name}</a>
                  </div>
                  <div className={styles.cardLinks}>
                    {r.shop && (
                      <a href={r.shop}>
                        <BagFill/>
                      </a>
                    )}
                    {r.location && (
                      <a href={r.location}>
                        <GeoAltFill/>
                      </a>
                    )}
                    {r.social && r.social.ig && (
                      <a href={r.social.ig}>
                        <Instagram/>
                      </a>
                    )}
                    {r.social && r.social.yt && (
                      <a href={r.social.yt}>
                        <Youtube/>
                      </a>
                    )}
                    {r.social && r.social.fb && (
                      <a href={r.social.fb}>
                        <Facebook/>
                      </a>
                    )}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </main>
      <Footer/>
      <style jsx>{`
        .roasteryCard {
          height: 100%;
          width: 100%;
          padding: 1.5rem;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 2fr 1fr;
        }

        .roasteryCard:hover {
          box-shadow: inset 0 0 30px #aaa;
          text-decoration: none;
        }
      `}</style>
    </div>
  )
}
