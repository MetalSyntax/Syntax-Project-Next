import Navigation from '../components/navigation'
import Footer from '../components/footer'
import Head from 'next/head'
import Link from 'next/link'

export default () => (
  <div id="home">
    <Head>
      <title>Tech Cube</title>
    </Head>
    <Navigation/>
    <section id="hero" className="flex flex-wrap content-center py-8 px-4">
      <div className="w-full">
        <h1 className="text-purple-100 text-4xl md:text-5xl lg:text-6xl text-center items-center">
          Tech Cube
        </h1>
      </div>
    </section>
    <section id="cards" className="flex flex-wrap py-6 px-2">
    <div className="sm:w-full lg:w-1/3 px-4 py-2">
      <div className="rounded overflow-hidden shadow-lg my-2 bg-card">
      <img className="w-full" src="/CardsX3.jpg" alt=""/>
        <div className="px-4 py-4">
          <div className="text-xl text-center">
          <Link href="/about">
          <button className="bt-color bd-color font-bold rounded py-1 px-10">
            Learn More
          </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="sm:w-full lg:w-1/3 px-4 py-2">
      <div className="rounded overflow-hidden shadow-lg my-2 bg-card">
      <img className="w-full" src="/Cards2X3.jpg" alt=""/>
        <div className="px-4 py-4">
          <div className="font-bold text-xl text-center">
          <Link href="/services">
          <button className="bt-color bd-color font-bold rounded py-1 px-10">
            Learn More
          </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="sm:w-full lg:w-1/3 px-4 py-2">
      <div className="rounded overflow-hidden shadow-lg my-2 bg-card">
      <img className="w-full" src="/Cards3X3.jpg" alt=""/>
        <div className="px-4 py-4">
        <div className="font-bold text-xl text-center">
          <Link href="/contact">
          <button className="bt-color bd-color font-bold rounded py-1 px-10">
            Learn More
          </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
</div>
);
