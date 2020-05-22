import Link from 'next/link'

export default function Navigation(){
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <nav className="flex items-center justify-between flex-wrap nav-bg px-4 py-2 fixed w-full top-0 ">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
      <Link href="/">
        <img className="h-12 w-12 rounded-full border-solid border-2 border-white cursor-pointer" src="/TechCube.png" alt="Tech Cube" />
      </Link>
      <Link href="/">
      <p className="lg:flex pl-2 text-2xl sm:text-xl cursor-pointer">Tech Cube</p>
      </Link>
      </div>
      <div className="block lg:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="flex items-center px-3 py-2 rounded text-purple-200 ">
          <svg className="fill-current w-6 h-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div id="menu" className={"w-full block flex-grow lg:flex lg:items-center lg:w-auto my-3 order-0" + (menuOpen ? " flex" : " hidden")}>
        <div className="text-sm flex flex-col lg:flex-row ml-auto">
        <Link href="/contact">
          <a className="flex flex-col lg:inline-block text-purple-100 hover:bg-purple-100 hover:text-purple-900 rounded-lg hover:rounded-lg text-xl py-1 px-2 my-1 mx-4 lg:float-right text-center order-3"> 
          Contact Us
          </a>
        </Link>
        <Link href="/services">
          <a className="flex flex-col lg:inline-block text-purple-100 hover:bg-purple-100 hover:text-purple-900 rounded-lg hover:rounded-lg text-xl py-1 px-2 my-1 mx-4 lg:float-right text-center order-2">
            Services
          </a>
        </Link>
        <Link href="/about">
          <a className="flex flex-col lg:inline-block text-purple-100 hover:bg-purple-100 hover:text-purple-900 rounded-lg hover:rounded-lg text-xl py-1 px-2 my-1 mx-4 lg:float-right text-center order-1">
          About Us
          </a>
        </Link>
        </div>
      </div>
    </nav>
  );
}