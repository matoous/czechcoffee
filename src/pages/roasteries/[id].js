import firebase from "../../firebase/clientApp";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import {Cart, Facebook, GeoAltFill, Instagram, Map, Youtube} from "react-bootstrap-icons";

const Roastery = ({data}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title key="title">czechcoffee | {data.name}</title>
      </Head>
      <Header active={"roasteries"}/>
      <main className={styles.main}>
        <div className="roastery">
          <div className="roasteryImage">
            <img src={data.image}/>
          </div>
          <div className="roasteryInfo">
            <img className="logo" src={data.logo}/>
            <h1>
              <a href={data.website}>
                {data.name}
              </a>
            </h1>
            <div>
              <a href={data.shop}>
                <Cart/> shop
              </a>
            </div>
            <div>
              <GeoAltFill/> {data.address}
            </div>
            {data.social && data.social.gm && (
              <div>
                <a href={data.social.gm}>
                  <Map/> Zobrazit na google maps
                </a>
              </div>
            )}
            <div>
              {data.social && data.social.ig && (
                <a href={data.social.ig}><Instagram/></a>
              )}
              {data.social && data.social.fb && (
                <a href={data.social.fb}><Facebook/></a>
              )}
              {data.social && data.social.yt && (
                <a href={data.social.yt}><Youtube/></a>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer/>
      <style jsx>{`
        .roastery {
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 100%;
        }

        @media (max-width: 640px) {
          .roastery {
            grid-template-columns: 1fr;
          }
        }

        .roasteryImage {

        }

        .roasteryImage img {
          width: 100%;
        }

        .roasteryInfo {
          padding: 1em;
        }

        .logo {
          max-width: 320px;
          max-height: 200px;
          display: block;
          margin: 0 auto;
        }
      `}</style>
    </div>
  )
}

export async function getStaticProps({params: {id}}) {
  const resp = await firebase.firestore()
    .collection('roasteries')
    .doc(id)
    .get()

  const data = resp.data()

  return {props: {data}}
}

export async function getStaticPaths() {
  const data = await firebase.firestore()
    .collection('roasteries')
    .get()

  return {
    paths: data.docs.map(doc => ({
      params: {id: doc.id}
    })),
    fallback: false
  };
}

export default Roastery;
