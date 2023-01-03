import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { RecoilRoot } from "recoil"
import { DefaultSeo } from 'next-seo'
import SEO from "../next-seo.config"


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <DefaultSeo {...SEO} />
    <RecoilRoot>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </RecoilRoot>
    </>
  )
}
