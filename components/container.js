import Navigation from './navigation'
import Footer from './footer'
import Head from 'next/head'

const Container = (props) => (
  <div>
    <Head>
      <title>Tech Cube</title>
      <link rel="shortcut icon" href="./favicon.png" />
    </Head>
    <Navigation />
    <div>{props.children}</div>
    <Footer />
  </div>
);

export default Container;