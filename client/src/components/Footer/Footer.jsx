import { images } from "../../assets";

function Footer() {
  return (
    <footer
      style={{
        background:
          " linear-gradient(66deg, #1CA8C7 -5.25%, #439FA5 46.76%, #4C7D8C 98.77%)",
      }}
    >
      <div className="grid lg:grid-cols-2 grid-cols-1  text-white py-20 gap-4 max-w-6xl mx-auto ">
        {/* Social */}
        <div className="space-y-4 flex lg:block flex-col justify-center items-center">
          <p className="text-lg lg:w-[50%] w-[70%] text-center lg:text-start">
            Copyright © Smartcare. All Rights Reserved{" "}
          </p>
          <p className="font-semibold text-lg">Follow us </p>
          <ul className="flex space-x-4">
            <li>
              <a href="">
                <img src={images.youtube} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={images.youtube} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={images.youtube} alt="" />
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div className="grid lg:grid-cols-2 grid-cols-1 mx-auto lg:mx-0 lg:space-y-0 space-y-8 text-center lg:text-start">
          <div>
            <h4 className="font-semibold text-lg mb-8">Company</h4>
            <ul className="text-gray-100 space-y-4">
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact us</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Culture</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
          </div>
          {/* Support */}
          <div>
            <div className="">
              <h4 className="font-semibold text-lg mb-8">Support</h4>
              <ul className="text-gray-100 space-y-4">
                <li>
                  <a href="">Getting started</a>
                </li>
                <li>
                  <a href="">Help center</a>
                </li>
                <li>
                  <a href="">Server status</a>
                </li>
                <li>
                  <a href="">Report a bug</a>
                </li>
                <li>
                  <a href="">Chat support</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
