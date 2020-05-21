import Container from '../components/container'
import Head from 'next/head'
import Link from 'next/link'

const Services = () => (
    <Container>
        <Head>
            <title>Services</title>
        </Head>
        <section id="hero-services" className="flex flex-wrap content-center py-8 px-4">
            <div className="w-full">
                 <Link href="/">
                    <h1 className="text-purple-100 text-4xl md:text-5xl lg:text-6xl text-center items-center">
                        Services
                    </h1>
                </Link>
            </div>
        </section>
    </Container>
);

export default Services;
