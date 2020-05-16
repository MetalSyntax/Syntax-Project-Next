import Container from '../components/Container'
import Head from 'next/head'
import Link from 'next/link'

const About = () => (
    <Container>
        <Head>
            <title>About Us</title>
        </Head>
        <section id="hero-about" className="flex flex-wrap content-center py-8 px-4">
            <div className="w-full">
                 <Link href="/">
                    <h1 className="text-purple-100 text-4xl md:text-5xl lg:text-6xl text-center items-center">
                        About Us
                    </h1>
                </Link>
            </div>
        </section>
    </Container>
);

export default About;
