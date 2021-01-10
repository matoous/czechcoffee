import styles from "../styles/Home.module.css";
import {useRouter} from "next/router";
import {useState, useEffect} from 'react';
import {useSearch} from "../context/search";
import SearchResults from "./searchResults";
import {Search, X} from "react-bootstrap-icons";

const Header = ({active}) => {
  const {pathname} = useRouter();
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const {results, search} = useSearch();

  useEffect(() => {
    search(query);
  }, [query])

  return (
    <>
      {searchOpen && (
        <div className="searchDialog">
          <div className="searchDialogSearch">
            <input className="searchBox" placeholder="hledat..." type="text" value={query}
                   onChange={(e) => setQuery(e.target.value)}/>
            <div onClick={() => setSearchOpen(!searchOpen)}>
              <X/>
            </div>
          </div>
          <SearchResults/>
        </div>
      )}
      <header>
        <nav>
          <div className="logo">
            <a className={styles.logo} href="/">
              Czechcoffee.org
            </a>
          </div>
          <div className="menu">
            <a href="/roasteries" className={pathname === '/roasteries' ? 'active' : ''}>
              Pražírny
            </a>
            <a href="/cafes" className={pathname === '/cafes' ? 'active' : ''}>
              Kavárny
            </a>
            {/*<a href="/coffees" className={pathname === '/coffees' ? 'active' : ''}>*/}
            {/*  Kávy*/}
            {/*</a>*/}
          </div>
          <div className="searchWrap">
            <input className="searchBox" placeholder="hledat..." type="text" value={query}
                   onChange={(e) => setQuery(e.target.value)}/>
            <SearchResults/>
          </div>
          <div className="openSearch" onClick={() => setSearchOpen(!searchOpen)}>
            <Search/>
          </div>
        </nav>
      </header>
      {/*<div className="notification">*/}
      {/*  Chybí tu něco? Dejte nám vědět na: necovamtuchybi@czechcoffee.org*/}
      {/*</div>*/}
      <style jsx>{`
        nav {
          width: 100%;
          font-weight: 600;
          text-transform: lowercase;
          font-size: 1.2rem;
          display: grid;
          grid-template-columns: auto 1fr auto;
          place-items: center;
        }

        .logo {
          padding-right: 1rem;
          text-align: left;
          width: 100%;
        }

        .menu {
          width: 100%;
        }

        .menu > a {
          margin-right: 1rem;
        }

        .openSearch {
          cursor: pointer;
          display: none;
        }

        @media (max-width: 640px) {
          nav {
            grid-template-columns: 1fr auto;
          }

          .menu {
            grid-row: 2;
            grid-column: 1 / span 2;
          }

          .openSearch {
            display: block;
          }

          .searchWrap {
            display: none;
          }
        }

        header {
          padding: .6rem;
          display: flex;
          justify-content: space-between;
          flex-direction: row;
          width: 100%;
          align-items: center;
        }

        .searchWrap {
          position: relative;
          overflow: visible;
        }

        .searchBox {
          border: 1px solid black;
          padding: .2rem .4rem;
          font-size: 1.2rem;
          width: 100%;
        }

        .notification {
          padding: .4rem 1rem;
          background-color: black;
          color: white;
        }

        .searchDialog {
          position: absolute;
          z-index: 100;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background-color: white;
          box-sizing: border-box;
        }

        .searchDialogSearch {
          padding: 1rem;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }

        .searchDialogSearch input {
          flex-grow: 1;
          margin-right: 1rem;
          max-width: 400px;
        }
      `}</style>
      <style global jsx>{`
        .searchWrap .searchResults {
          position: absolute;
          right: 0;
          max-width: 300px;
          width: 100%;
          top: 100%;
          z-index: 2;
          background-color: white;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }

        .searchDialog .searchResults {
        }
      `}</style>
    </>
  )
}

export default Header;
