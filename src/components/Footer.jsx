import robotIcon from "/src/assets/robot-tab-icon.png";

function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6 px-6 md:px-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Brand & Description */}
        <div className="space-y-3 max-w-sm">
          <div className="flex items-center gap-3">
            <img src={robotIcon} alt="Logo" className="w-8 h-8" />
            <h2 className="font-semibold text-xl">AI Tools Directory</h2>
          </div>
          <p className="text-gray-400 text-sm">
            Discover and compare the best AI-powered tools for productivity and
            creativity.
          </p>
          <div className="flex gap-8 flex-wrap">
            <i className="fa-brands fa-square-github text-gray-400 hover:text-white cursor-pointer text-3xl"></i>
            <i className="fa-brands fa-linkedin text-gray-400 hover:text-white cursor-pointer text-3xl"></i>
            <i className="fa-brands fa-instagram text-gray-400 hover:text-white cursor-pointer text-3xl"></i>
            <i className="fa-brands fa-square-facebook text-gray-400 hover:text-white cursor-pointer text-3xl"></i>
            <i className="fa-brands fa-x-twitter text-gray-400 hover:text-white cursor-pointer text-3xl"></i>
            <i className="fa-brands fa-youtube text-gray-400 hover:text-white cursor-pointer text-3xl"></i>
          </div>
        </div>

        {/* Pages */}
        <div className="flex"></div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h3 className="font-semibold text-sky-500">Company</h3>
          <ul className="space-y-1 text-gray-400">
            <li>
              <a href="#home" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#home" className="hover:text-white transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#home" className="hover:text-white transition">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-4 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
        <p>
          © {new Date().getFullYear()} AI Tools Directory. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="#home" className="hover:text-gray-400">
            Privacy Policy
          </a>
          <a href="#home" className="hover:text-gray-400">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
