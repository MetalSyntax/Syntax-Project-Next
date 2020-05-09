export default () => (
  <div id="home">
    <nav className="flex items-center justify-between flex-wrap nav-bg p-4">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img className="h-16 w-16 rounded-full border-solid border-2 border-white" src="/TechCube.png" alt="Tech Cube" />
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 rounded text-purple-200 ">
          <svg className="fill-current h-8 w-8" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a href="#" className="block lg:inline-block text-purple-100 text-2xl mr-4 text-right">
            About Us
          </a>
          <a href="#" className="block lg:inline-block text-purple-100 text-2xl mr-4 text-right">
            Services
          </a>
          <a href="#" className="block lg:inline-block text-purple-100 text-2xl mr-4 text-right">
          Contact Us
          </a>
        </div>
      </div>
    </nav>
    <section id="hero" className="flex flex-wrap content-center py-8 px-4 h-screen">
      <div className="w-full">
        <h1 className="text-purple-100 text-4xl md:text-5xl lg:text-6xl text-center items-center">
          Tech Cube
        </h1>
      </div>
    </section>
    <section id="cards" className="flex flex-wrap py-6 px-2">
    <div className="sm:w-full lg:w-1/3 px-4 py-2">
      <div className="rounded overflow-hidden shadow-lg my-2 bg-card">
      <img class="w-full" src="/CardsX3.jpg" alt=""/>
        <div className="px-4 py-4">
          <div className="font-bold text-xl text-center">
          <button className="bt-color bd-color font-bold rounded py-1 px-10">
            Learn More
          </button>
          </div>
        </div>
      </div>
    </div>
    <div className="sm:w-full lg:w-1/3 px-4 py-2">
      <div className="rounded overflow-hidden shadow-lg my-2 bg-card">
      <img class="w-full" src="/Cards2X3.jpg" alt=""/>
        <div className="px-4 py-4">
          <div className="font-bold text-xl text-center">
          <button className="bt-color bd-color font-bold rounded py-1 px-10">
            Learn More
          </button>
          </div>
        </div>
      </div>
    </div>
    <div className="sm:w-full lg:w-1/3 px-4 py-2">
      <div className="rounded overflow-hidden shadow-lg my-2 bg-card">
      <img class="w-full" src="/Cards3X3.jpg" alt=""/>
        <div className="px-4 py-4">
        <div className="font-bold text-xl text-center">
          <button className="bt-color bd-color font-bold rounded py-1 px-10">
            Learn More
          </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer>
    <div class="flex flex-wrap">
      <div class="w-full bt-color py-2">
        <img className="h-16 w-16 rounded-full border-solid border-2 border-white m-auto" src="/TechCube.png" alt="Tech Cube" />
        <p className="text-purple-100 text-2xl text-center items-center">
          Tech Cube
        </p>
      </div>
    </div>
    <div class="flex flex-wrap">
      <div class="w-full cr-color py-2">
        <p className="text-purple-100 text-1xl text-center items-center">
        Develop by MetalSyntax. 2020
        </p>
      </div>
    </div>
  </footer>
</div>
);
