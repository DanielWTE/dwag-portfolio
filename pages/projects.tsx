import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/footer'
import Header from '../components/header'
import Headercomp from '../components/headercomp'

const Projects: NextPage = () => {
  return (
    <div>
      <Head>
      <title>dwag - projects</title>
      <meta name="description" content="Daniel Wagner's projects" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
      </Head>
      <Header />
        <section>
          <Headercomp />
        </section>
      <Footer />
    </div>
  );
};

export default Projects
