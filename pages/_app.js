import '../styles/styles.css'
import { Router } from 'next/router'

import { useState, useEffect } from 'react'

import { GTMPageView } from '../utils/gtm'

import Header from "../components/Header"
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  // Initiate GTM
  useEffect(() => {
    const handleRouteChange = url => {
      console.log(`App is changing to ${url} routing`)
      GTMPageView(url)
    }
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return (
    <>
      <div>
        <Header/>
        <Component {...pageProps} />
      </div>
    </>
  )
}
