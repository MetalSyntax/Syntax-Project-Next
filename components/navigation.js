import Link from 'next/link'

export default function Navigation({fixed}){
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <nav className="flex items-center justify-between flex-wrap nav-bg p-4">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
      <Link href="/">
        <img className="h-16 w-16 rounded-full border-solid border-2 border-white cursor-pointer" src="/TechCube.png" alt="Tech Cube" />
      </Link>
      </div>
      <div className="block lg:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="flex items-center px-3 py-2 rounded text-purple-200 ">
          <svg className="fill-current h-8 w-8" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div id="menu" className={"w-full block flex-grow lg:flex lg:items-center lg:w-auto" + (menuOpen ? " flex" : " hidden")}>
        <div className="text-sm lg:flex-grow ml-auto">
        <Link href="/contact">
          <a className="block lg:inline-block text-purple-100 text-2xl mr-4 lg:float-right"> 
            Contact Us
          </a>
        </Link>
        <Link href="/services">
          <a className="block lg:inline-block text-purple-100 text-2xl mr-4 lg:float-right">
            Services
          </a>
        </Link>
        <Link href="/about">
          <a className="block lg:inline-block text-purple-100 text-2xl mr-4 lg:float-right">
          About Us
          </a>
        </Link>
        </div>
      </div>
    </nav>
  );
}