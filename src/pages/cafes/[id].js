import firebase from "../../firebase/clientApp";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import {Cart, Facebook, GeoAltFill, Instagram, Map, PhoneFill, Youtube} from "react-bootstrap-icons";

const Cafe = ({data}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title key="title">czechcoffee | {data.name}</title>
      </Head>
      <Header active={"cafes"}/>
      <main className={styles.main}>
        <div className="cafe">
          <div className="cafeImage">
            <img src={data.image}/>
          </div>
          <div className="cafeInfo">
            <h1>
              <a href={data.website}>
                {data.name}
              </a>
            </h1>
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
            {data.phone && (
              <div>
                <PhoneFill/> {data.phone}
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
        .cafe {
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 100%;
        }

        @media (max-width: 640px) {
          .cafe {
            grid-template-columns: 1fr;
          }
        }

        .cafeImage {

        }

        .cafeImage img {
          width: 100%;
        }

        .cafeInfo {
          padding: 1em;
        }
      `}</style>
    </div>
  )
}

export async function getStaticProps({params: {id}}) {
  const resp = await firebase.firestore()
    .collection('cafes')
    .doc(id)
    .get()

  const data = resp.data()

  return {props: {data}}
}

export async function getStaticPaths() {
  const data = await firebase.firestore()
    .collection('cafes')
    .get()

  return {
    paths: data.docs.map(doc => ({
      params: {id: doc.id}
    })),
    fallback: false
  };
}


export default Cafe;
