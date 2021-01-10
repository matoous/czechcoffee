import {Facebook, Instagram} from "react-bootstrap-icons";

const Footer = () => {
  return <footer>
    <div className="copyright">
      <h3></h3>
      <small>
        © 2021 czechcoffee.org
      </small>
    </div>
    <div>
      <h3>Sledujte nás</h3>
      <div>
        <a href="https://www.instagram.com/zas_kafe/">
          <Instagram/>
        </a>
        <a href="https://www.instagram.com/zas_kafe/">
          <Facebook/>
        </a>
      </div>
    </div>
    <div>
      <h3>Dostávejte novinky</h3>
      <div>
        <input type={"email"}/>
      </div>
    </div>
    <style jsx>{`
      footer {
        width: 100%;
        margin-top: 3rem;
        border-top: 1px solid #eaeaea;
        font-size: .9em;
        min-height: 100px;
        padding: 1rem;
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        grid-gap: 1rem;
      }

      h3 {
        font-size: .9em;
        font-weight: 400;
        text-transform: uppercase;
      }

      @media (max-width: 640px) {
        footer {
          grid-template-columns: 1fr;
        }

        .copyright {
          grid-row: 3;
        }
      }
    `}</style>
  </footer>;
}

export default Footer;
