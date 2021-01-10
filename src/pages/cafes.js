import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from "../components/header";
import Footer from "../components/footer";
import {useState} from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import {useCafes} from "../context/cafes";
import CafeCard from "../components/cafeCard";
import CafePopup from "../components/cafePopup";


export default function Home() {
  const {cafes} = useCafes();

  const [viewport, setViewport] = useState({
    latitude: 50.0672091,
    longitude: 14.3704384,
    zoom: 8
  });

  const [popup, setPopup] = useState();

  const renderPopup = () => {
    return (
      popup && (
        <CafePopup cafe={popup} close={() => setPopup(null)}/>
      )
    );
  }

  return (
    <div className={styles.container}>
      <Head>
        <title key="title">czechcoffee | kavárny</title>
      </Head>
      <Header active={"cafes"}/>
      <main className={styles.main}>
        <ReactMapGL
          {...viewport}
          width="100%"
          height="75vh"
          mapStyle="mapbox://styles/mapbox/light-v9"
          mapboxApiAccessToken='pk.eyJ1IjoibWF0b3VzZHppdmphayIsImEiOiJjanJ6ZnNrZWcxODVmNDNsdjR0ZG41eGthIn0.IAfFFuE-66JoByTIphjV1A'
          onViewportChange={(viewport) => {
            const {width, height, latitude, longitude, zoom} = viewport;
            setViewport({
              latitude: latitude,
              longitude: longitude,
              zoom: zoom
            })
          }}
        >
          {renderPopup()}
          {cafes && cafes.map(c => (
            <Marker latitude={c.location.latitude} longitude={c.location.longitude} offsetLeft={-21} offsetTop={-42}>
              <img onClick={() => setPopup(c)} src={"/coffee_pin.png"} style={{'height': '42px', 'width': '42px'}} alt={"coffee pin"}/>
            </Marker>
          ))}
        </ReactMapGL>
        <div className={styles.grid}>
          {cafes && cafes.map(r => (
            <CafeCard key={r.name} r={r}/>
          ))}
        </div>
      </main>
      <Footer/>
    </div>
  )
}
