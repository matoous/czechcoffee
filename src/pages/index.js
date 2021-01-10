import styles from '../styles/Home.module.css'
import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <main>
        <div className="news">
          <a className="new" href="/">
            <div className="newImg">
              <img src="/news/format_coffee.jpg"/>
            </div>
            <div className="text">
              <h3>
                format
              </h3>
              <p>
                Nově otevřený espresso bar z konceptu Kafefin a Mazelab v Holešovicích.
              </p>
            </div>
          </a>
          <a className="new" href="/">
            <div className="newImg">
              <img src="/news/ty_kavo.jpg"/>
            </div>
            <div className="text">
              <h3>
                Ty Kávo!
              </h3>
              <p>
                Kavárna, která nás zaujala především svým božím názvem a útulným interiérem 🌿🛋 Schovejte se zde před
                ruchem nedalekého Andělu😇
              </p>
            </div>
          </a>
          <a className="new" href="/">
            <div className="newImg">
              <img src="/news/ty_kavo.jpg"/>
            </div>
            <div className="text">
              <h3>
                Cafe Letka
              </h3>
              <p>
                Nejkouzelnější okénko a ještě kouzelnější čtvrť - to je Cafe Letka ✈️ Létat teď můžeme pouze omezeně, proč si však nezaletět pro moc dobré kafe?☕️
              </p>
            </div>
          </a>
          <a className="new" href="/">
            <div className="newImg">
              <img src="/news/ty_kavo.jpg"/>
            </div>
            <div className="text">
              <h3>
                Ty Kávo!
              </h3>
              <p>
                Kavárna, která nás zaujala především svým božím názvem a útulným interiérem 🌿🛋 Schovejte se zde před
                ruchem nedalekého Andělu😇
              </p>
            </div>
          </a>
        </div>
      </main>
      <style jsx>{`
        .news {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: repeat(auto-fill, minmax(180px, 240px));
          place-items: center;
          padding: 1rem;
          grid-gap: 2rem;
        }

        .text {
          padding: 1rem;
        }

        .new {
          width: 100%;
          display: grid;
          grid-template-columns: minmax(180px, 240px) auto;
        }

        .newImg {
          overflow: hidden;
          width: 100%;
        }

        .new:hover {
          filter: brightness(60%);
        }

        .new h3 {
        margin: 0;
        }

        .new img {
          width: 100%;
          transition: all .2s ease-in;
        }

        .new:hover img {
          width: 110%;
          margin: -5%;
        }

        @media (max-width: 860px) {
          .news {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 520px) {
          .new {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <Footer/>
    </div>
  )
}
