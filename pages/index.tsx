import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import Header from '../components/header'
import Welcomer from '../components/welcomer'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
      <title>dwag - home</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
        <section className="p-10">
          <Welcomer />
        </section>
      <Footer />
    </div>
  );
};

export default Home
