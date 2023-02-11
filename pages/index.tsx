import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import Header from '../components/header'
import Welcomer from '../components/welcomer'
import About from '../components/about'
import Timeline from '../components/timeline'
import Skills from '../components/skills'
import Contact from '../components/contact'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
      <title>dwag - home</title>
      <meta name="description" content="Daniel Wagner's personal website" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
      </Head>
      <Header />
        <section className="p-10">
          <Welcomer />
        </section>
        <section>
          <About />
        </section>
        <section>
          <Timeline />
        </section>
        <section>
          <Skills />
        </section>
        {/* <section>
          <Contact />
        </section> */}
      <Footer />
    </div>
  );
};


export default Home
