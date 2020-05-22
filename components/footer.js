import Link from 'next/link'

const Footer = () => (
    <footer>
    <div className="flex flex-wrap">
      <div className="w-full bt-color py-2">
        <img className="h-16 w-16 rounded-full border-solid border-2 border-white m-auto" src="/TechCube.png" alt="Tech Cube" />
        <p className="text-purple-100 text-2xl text-center items-center">
          Tech Cube
        </p>
        <p className="text-purple-100 text-lg px-5 py-2 text-center items-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
    <div className="flex flex-wrap">
      <div className="w-full cr-color py-2">
        <p className="text-purple-100 text-1xl text-center items-center">
        Develop by MetalSyntax.
        </p>
        <p className="text-purple-100 text-1xl text-center items-center">
          © {(new Date().getFullYear())}
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
