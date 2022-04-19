import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import Header from '../components/header'

const Imprint: NextPage = () => {
  return (
    <div>
      <Head>
      <title>dwag - imprint</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
        <div className="p-10">
          <h1 className="text-xl font-bold text-center">
            Imprint
          </h1>
        </div>
      <Footer />
    </div>
  );
};

export default Imprint
