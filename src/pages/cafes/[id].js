import firebase from "../../firebase/clientApp";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import {
  Cart,
  EnvelopeFill,
  Facebook,
  GeoAltFill,
  Globe,
  Instagram,
  Map,
  PhoneFill,
  Youtube
} from "react-bootstrap-icons";
import ReactMapGL, {Marker} from "react-map-gl";
import {useState} from "react";

const Cafe = ({data}) => {
  const [viewport, setViewport] = useState({
    latitude: data.location.latitude,
    longitude: data.location.longitude,
    zoom: 10
  });

  return (
    <div className={styles.container}>
      <Head>
        <title key="title">czechcoffee | {data.name}</title>
      </Head>
      <Header active={"cafes"}/>
      <main className={styles.main}>
        <div className="cafe">
          <div className="cafeImage" style={{backgroundImage: `url(${data.image})`}}>
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
                <a href={`tel:${data.phone}`}>
                  <PhoneFill/> {data.phone}
                </a>
              </div>
            )}
            {data.email && (
              <div>
                <a href={`mailto:${data.email}`}>
                  <EnvelopeFill/> {data.email}
                </a>
              </div>
            )}
            {data.social && data.social.gm && (
              <div>
                <a href={data.social.gm}>
                  <GeoAltFill/> Zobrazit na Google Maps
                </a>
              </div>
            )}
            <div className="socials">
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
          <div className="map">
            <ReactMapGL
              {...viewport}
              width="100%"
              height="100%"
              mapStyle="mapbox://styles/mapbox/light-v9"
              mapboxApiAccessToken='pk.eyJ1IjoibWF0b3VzZHppdmphayIsImEiOiJjanJ6ZnNrZWcxODVmNDNsdjR0ZG41eGthIn0.IAfFFuE-66JoByTIphjV1A'
              scrollZoom={false}
              onViewportChange={(viewport) => {
                const {width, height, latitude, longitude, zoom} = viewport;
                setViewport({
                  latitude: latitude,
                  longitude: longitude,
                  zoom: zoom
                })
              }}
            >
              <Marker latitude={data.location.latitude} longitude={data.location.longitude} offsetLeft={-21} offsetTop={-42}>
                <img src={"/coffee_pin.png"} style={{'height': '42px', 'width': '42px'}} alt={"coffee pin"}/>
              </Marker>
            </ReactMapGL>
          </div>
        </div>
      </main>
      <Footer/>
      <style jsx>{`
        .cafeImage {
          grid-area: cafeImage;
          background-repeat: no-repeat;
          background-size: cover;
        }

        .cafeInfo {
          padding: 1em;
          grid-area: cafeInfo;
          text-align: center;
        }

        .cafeInfo > div {
          margin-bottom: 6px;
        }

        .socials {
          margin-top: 16px;
          font-size: 32px;
        }

        .socials > a {
          margin-right: 8px;
        }

        .map {
          grid-area: map;
        }

        .cafe {
          justify-items: stretch;
          display: grid;
          height: 90vh;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          border-left: 1px solid black;
          border-top: 1px solid black;
          grid-template-areas:
            "cafeImage cafeInfo"
            "cafeImage map";
        }

        .cafe > div {
          border-bottom: 1px solid black;
          border-right: 1px solid black;
        }

        @media (max-width: 640px) {
          .cafe {
            height: calc(3 * 380px);
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr  1fr;
            grid-template-areas:
              "cafeImage"
              "cafeInfo"
              "map";
          }
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
