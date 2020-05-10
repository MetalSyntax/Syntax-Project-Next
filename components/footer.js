import Link from "next/link";

const Footer = () => (
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
);

export default Footer;
