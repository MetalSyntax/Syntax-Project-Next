import Navigation from '../components/navigation'
import Footer from '../components/footer'
import Link from 'next/link'
import Head from 'next/head'

const Services = () => (
    <div id="services">
        <Head>
            <title>Services</title>
        </Head>
        <Navigation/>
        <section id="hero-services" className="flex flex-wrap content-center py-8 px-4">
            <div className="w-full">
                 <Link href="/">
                    <h1 className="text-purple-100 text-4xl md:text-5xl lg:text-6xl text-center items-center">
                        Services
                    </h1>
                </Link>
            </div>
        </section>
        <Footer/>
    </div>
);

export default Services;
