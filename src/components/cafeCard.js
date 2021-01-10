import styles from "../styles/Home.module.css";
import {Facebook, GeoAltFill, Instagram, EnvelopeFill, PhoneFill, Youtube, Globe} from "react-bootstrap-icons";


function CafeCard(props) {
  return (
    <>
      <div className="card" style={{
        "backgroundImage": `url(${props.r.image})`
      }}>
        <a className="cafeCard" href={`/cafes/${props.r.id}`}>
          <h2 className={styles.cardName}>
            <a href={`/cafes/${props.r.id}`}>{props.r.name}</a>
          </h2>
          <div>
            <a href={props.r.website}>
              <Globe/> Web
            </a>
          </div>
          <div>
            <a href={props.r.social.gm}>
              <GeoAltFill/>{props.r.address}
            </a>
          </div>
          {props.r.phone && (
            <div>
              <PhoneFill/> {props.r.phone}
            </div>
          )}
          {props.r.email && (
            <div>
              <EnvelopeFill/> {props.r.email}
            </div>
          )}
          {props.r.social && props.r.social.gm && (
            <div>
              <a href={props.r.social.gm}>
                <GeoAltFill/> Zobrazit na Google Maps
              </a>
            </div>
          )}
          <div className={styles.cardLinks}>
            {props.r.social && props.r.social.ig && (
              <a href={props.r.social.ig}>
                <Instagram/>
              </a>
            )}
            {props.r.social && props.r.social.yt && (
              <a href={props.r.social.yt}>
                <Youtube/>
              </a>
            )}
            {props.r.social && props.r.social.fb && (
              <a href={props.r.social.fb}>
                <Facebook/>
              </a>
            )}
          </div>
        </a>
      </div>
      <style jsx>{`
        .card {
          position: relative;
          text-align: center;
          background-size: cover;
          background-repeat: no-repeat;
        }

        .cafeCard {
          height: 100%;
          width: 100%;
          padding: 1rem;
          display: block;
          background-color: rgba(0, 0, 0, 0.5);
          transition: background-color .2s ease-in;
          color: white;
        }

        .cafeCard:hover {
          background: rgba(0, 0, 0, 0.7);
          text-decoration: none;
        }
      `}</style>
    </>
  );
}

export default CafeCard;
