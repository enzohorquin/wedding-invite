import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import styled from 'styled-components'
import SectionCeremonyAndParty from '../components/SectionCeremonyAndParty'
import SectionAssistance from '../components/SectionAssistance'
import SectionGift from '../components/SectionGift'
import SectionFooter from '../components/SectionFooter'
import SectionGalery from '../components/SectionGalery'

const BgImage = dynamic(() => import("../components/BGImage"), {
  ssr: false
})

const SectionPortadaImage = styled.section`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
`

// opt-out of image optimization, no-op
const customLoader = ({ src }) => {
  return src
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Casamiento Ceci y Ale</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/church.ico" />
      </Head>
      <BgImage />
      <SectionPortadaImage>
        <div className={styles.portada}>
          <Image src='/logo-portada-ayc.png' width={500} height={500} alt='logo' loader={customLoader} />
          <div className={styles.arrow} />
        </div>
      </SectionPortadaImage >
      <div>
        <SectionCeremonyAndParty />
        <SectionGalery />
        <SectionGift />
        <SectionAssistance />
        <SectionFooter />
      </div>
    </>
  )
}
