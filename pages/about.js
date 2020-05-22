import Container from '../components/container'
import Head from 'next/head'
import Link from 'next/link'

const About = () => (
    <Container>
        <Head>
            <title>About Us</title>
        </Head>
        <section id="hero-about" className="flex flex-wrap content-center py-8 px-4">
            <div className="w-full py-56 mx-8 bg-purple-700 bg-opacity-25">
                <h1 className="text-purple-100 text-4xl md:text-5xl lg:text-6xl text-center items-center">
                    About Us
                </h1>
            </div>
        </section>
        <section id="cards-about">
            <div className="flex flex-wrap py-2 px-2">
            <div className="sm:w-full lg:w-1/2 px-4 py-2 flex items-center">
                <div className="rounded overflow-hidden shadow-lg my-2 bg-card-text py-6 px-4">
                    <h2 className="text-2xl text-pink-900 text-center py-1 font-bold">More about</h2>
                    <p className="text-pink-900 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere porta iaculis. Morbi tempus ante tellus, sit amet blandit enim condimentum ac. Fusce sagittis maximus nisl et consectetur. Cras non mattis elit. Mauris semper maximus massa, non posuere sem imperdiet ut. Morbi non justo nunc. Morbi congue, tellus ac aliquam congue, mi mi ullamcorper purus, eget pulvinar est mauris nec ipsum.Proin a vehicula eros, non luctus massa. Vestibulum porttitor lobortis massa, et ultrices mi semper quis. Pellentesque consequat facilisis ex, id ullamcorper neque efficitur at. Nam egestas, neque consectetur lacinia hendrerit, nibh diam lobortis sem, nec porttitor tortor sem sed risus. Donec a nisl pulvinar sapien volutpat vulputate sit amet quis nisl. Nam vel ligula tincidunt, tempor est ut, vehicula nulla. Aenean placerat massa et pulvinar tincidunt. Nunc sed sodales ante. Duis ante ipsum, sollicitudin vitae felis ut, pulvinar lacinia felis. Donec elementum tortor sit amet enim posuere, in interdum orci rhoncus. Nullam et neque pharetra, hendrerit magna a, tincidunt turpis. Fusce lobortis tellus et risus laoreet congue.</p>
                </div>
            </div>
            <div className="sm:w-full lg:w-1/2 px-4 py-2 flex items-center">
                <div className="rounded overflow-hidden shadow-lg my-1 bg-card-text">
                    <img className="w-full" src="/CardsX3.jpg" alt=""/>
                </div>
            </div>
            </div>
            <div className="flex flex-wrap py-2 px-2">
            <div className="sm:w-full lg:w-1/2 px-4 py-2 flex items-center lg:order-1 order-2">
                <div className="rounded overflow-hidden shadow-lg my-1 bg-card-text">
                    <img className="w-full" src="/Cards2X3.jpg" alt=""/>
                </div>
            </div>
            <div className="sm:w-full lg:w-1/2 px-4 py-2 flex items-center order-1 lg:order-2">
                <div className="rounded overflow-hidden shadow-lg my-2 bg-card-text py-6 px-4">
                    <h2 className="text-2xl text-pink-900 text-center py-1 font-bold">Mision and Vision</h2>
                    <p className="text-pink-900 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere porta iaculis. Morbi tempus ante tellus, sit amet blandit enim condimentum ac. Fusce sagittis maximus nisl et consectetur. Cras non mattis elit. Mauris semper maximus massa, non posuere sem imperdiet ut. Morbi non justo nunc. Morbi congue, tellus ac aliquam congue, mi mi ullamcorper purus, eget pulvinar est mauris nec ipsum.Proin a vehicula eros, non luctus massa. Vestibulum porttitor lobortis massa, et ultrices mi semper quis. Pellentesque consequat facilisis ex, id ullamcorper neque efficitur at. Nam egestas, neque consectetur lacinia hendrerit, nibh diam lobortis sem, nec porttitor tortor sem sed risus. Donec a nisl pulvinar sapien volutpat vulputate sit amet quis nisl. Nam vel ligula tincidunt, tempor est ut, vehicula nulla. Aenean placerat massa et pulvinar tincidunt. Nunc sed sodales ante. Duis ante ipsum, sollicitudin vitae felis ut, pulvinar lacinia felis. Donec elementum tortor sit amet enim posuere, in interdum orci rhoncus. Nullam et neque pharetra, hendrerit magna a, tincidunt turpis. Fusce lobortis tellus et risus laoreet congue.</p>
                </div>
            </div>
            </div>
        </section>
    </Container>
);

export default About;
