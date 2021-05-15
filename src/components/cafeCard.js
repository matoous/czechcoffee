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
          background-color: rgba(0, 0, 0, 0.5);
          transition: background-color .2s ease-in;
          color: white;
          display: grid;
          place-content: center;
        }

        .cafeCard:hover {
          background: rgba(0, 0, 0, 0.7);
        }

        .cafeCard:hover h2 {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}

export default CafeCard;
