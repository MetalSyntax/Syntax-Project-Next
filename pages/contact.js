import Container from '../components/container'
import Head from 'next/head'
import Link from 'next/link'

const Contact = () => (
    <Container>
         <Head>
            <title>Contact Us</title>
        </Head>
        <section id="hero-contact" className="flex flex-wrap content-center py-8 px-4">
            <div className="w-full py-56 mx-8 bg-purple-700 bg-opacity-25">
                <h1 className="text-purple-100 text-4xl md:text-5xl lg:text-6xl text-center items-center">
                    Contact Us
                </h1>
            </div>
        </section>
        <section id="cards-contact">
        <div className="flex flex-wrap py-2 px-2">
            <div className="w-full px-6 py-4 flex items-center">
                <p className="text-pink-900 text-lg text-center xl:mr-32 xl:ml-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere porta iaculis. Morbi tempus ante tellus, sit amet blandit enim condimentum ac. Fusce sagittis maximus nisl et consectetur. Cras non mattis elit. Mauris semper maximus massa, non posuere sem imperdiet ut.</p>
            </div>
        </div>
        </section>
        <section id="contact-form">
            <form className="w-full">
                <div className="flex flex-wrap justify-center">
                    <div className="w-10/12 sm:w-1/2 xl:w-1/3 px-3 md:mb-0">
                        <input className="appearance-none block w-full bg-white placeholder-pink-900 placeholder-opacity-75 text-pink-900 border-pink-900 border-2 rounded py-3 px-4 mb-3 focus:outline-none" id="grid-name" type="text" placeholder="Name"/>
                        <input className="appearance-none block w-full bg-white placeholder-pink-900 placeholder-opacity-75 text-pink-900 border-pink-900 border-2 rounded py-3 px-4 mb-3 focus:outline-none" id="grid-email" type="email" placeholder="Email"/>
                        <textarea className="appearance-none block w-full bg-white placeholder-pink-900 placeholder-opacity-75 text-pink-900 border-pink-900 border-2 rounded py-3 px-4 mb-3 focus:outline-none" id="grid-message" type="text" placeholder="Message"/>
                        <button className="flex cr-color border-white border-2 font-bold rounded py-2 my-2 mb-6 px-10 focus:outline-none mx-auto justify-center">
                        Send
                        </button>
                    </div>
                </div>
            </form>
        </section>
     </Container>
);

export default Contact;
