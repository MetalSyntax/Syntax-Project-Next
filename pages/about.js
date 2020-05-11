import Navigation from '../components/navigation'
import Footer from '../components/footer'
import Link from 'next/link'
import Head from 'next/head'

const About = () => (
    <div id="about">
        <Head>
            <title>About Us</title>
        </Head>
        <Navigation/>
        <section id="hero-about" className="flex flex-wrap content-center py-8 px-4">
            <div className="w-full">
                 <Link href="/">
                    <h1 className="text-purple-100 text-4xl md:text-5xl lg:text-6xl text-center items-center">
                        About Us
                    </h1>
                </Link>
            </div>
        </section>
        <Footer/>
    </div>
);

export default About;
