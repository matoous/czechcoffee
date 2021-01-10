import '../styles/globals.css'
import Head from "next/head";
import RoasteriesProvider from "../context/roasteries";
import CafesProvider from "../context/cafes";
import SearchProvider from "../context/search";

function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        <title key="title">czechcoffee</title>
        <link rel="icon" href="/favicon.ico"/>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <RoasteriesProvider>
        <CafesProvider>
          <SearchProvider>
            <Component {...pageProps} />
          </SearchProvider>
        </CafesProvider>
      </RoasteriesProvider>
    </>
  )
}

export default MyApp
