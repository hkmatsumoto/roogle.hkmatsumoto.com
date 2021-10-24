import { useState } from 'react'

import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Layout from '../components/layout'
import { ScopesContext } from '../contexts/scopes'

export default function MyApp({ Component, pageProps }: AppProps) {
  const [scopes, setScopes] = useState([] as string[]);
  return (
    <ScopesContext.Provider value={{scopes, setScopes}}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ScopesContext.Provider>
  )
}
