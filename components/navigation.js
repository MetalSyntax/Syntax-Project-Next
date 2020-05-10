import Link from "next/link";

const Navigation = () => (
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
        <Link href="#">
          <a className="block lg:inline-block text-purple-100 text-2xl mr-4 text-right">
            About Us
          </a>
        </Link>
        <Link href="#">
          <a className="block lg:inline-block text-purple-100 text-2xl mr-4 text-right">
            Services
          </a>
        </Link>
        <Link href="#">
          <a className="block lg:inline-block text-purple-100 text-2xl mr-4 text-right">
          Contact Us
          </a>
        </Link>
        </div>
      </div>
    </nav>
);

export default Navigation;
