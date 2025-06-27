import { useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const healthOptions = [
    "Family Floater Health Insurance",
    "Critical Illness Cover",
    "Personal Accident Policy",
  ];

  const motorOptions = [
    "Car Insurance",
    "Bike Insurance",
    "Commercial Vehicle Insurance",
  ];

  const otherOptions = ["Travel Insurance", "Home Insurance", "Fire Insurance"];

  return (
    <div className="w-full">
      {/* Top Contact Bar */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            {/* Contact Info */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-blue-600">
                <Phone className="h-4 w-4" />
                <span>+4444444444</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-600">
                <Mail className="h-4 w-4" />
                <span>example@gmail.com</span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="hidden md:flex items-center space-x-3">
              <Facebook className="h-5 w-5 text-blue-600 hover:text-blue-800 cursor-pointer" />
              <Instagram className="h-5 w-5 text-blue-600 hover:text-blue-800 cursor-pointer" />
              <Twitter className="h-5 w-5 text-blue-600 hover:text-blue-800 cursor-pointer" />
              <Linkedin className="h-5 w-5 text-blue-600 hover:text-blue-800 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-600">DEMO</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Home */}
              <Link
                to={"/"}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Home
              </Link>

              {/* about */}
              <Link
                to={"about"}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                About
              </Link>
              {/* Health Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("health")}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium"
                >
                  <span>Health</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {activeDropdown === "health" && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    <div className="py-2">
                      {healthOptions.map((option, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {option}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Motor Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("motor")}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium"
                >
                  <span>Motor</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {activeDropdown === "motor" && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    <div className="py-2">
                      {motorOptions.map((option, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {option}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Others Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("others")}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium"
                >
                  <span>Others</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {activeDropdown === "others" && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    <div className="py-2">
                      {otherOptions.map((option, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {option}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* contact */}
              <Link
                to="contact"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Contact
              </Link>
            </div>

            {/* Login Button */}
            <div className="hidden lg:block">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Log in
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200">
              <div className="py-4 space-y-4">
                {/* contact Mobile */}
                <Link
                  to={"/"}
                  onClick={toggleMenu}
                  className="block text-gray-700 hover:text-blue-600 font-medium"
                >
                  Home
                </Link>

                {/* contact Mobile */}
                <Link
                  to={"about"}
                  onClick={toggleMenu}
                  className="block text-gray-700 hover:text-blue-600 font-medium"
                >
                  About
                </Link>

                {/* Health Mobile */}
                <div>
                  <button
                    onClick={() => toggleDropdown("health-mobile")}
                    className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 font-medium"
                  >
                    <span>Health</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {activeDropdown === "health-mobile" && (
                    <div className="mt-2 pl-4 space-y-2">
                      {healthOptions.map((option, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block text-sm text-gray-600 hover:text-blue-600"
                        >
                          {option}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Motor Mobile */}
                <div>
                  <button
                    onClick={() => toggleDropdown("motor-mobile")}
                    className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 font-medium"
                  >
                    <span>Motor</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {activeDropdown === "motor-mobile" && (
                    <div className="mt-2 pl-4 space-y-2">
                      {motorOptions.map((option, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block text-sm text-gray-600 hover:text-blue-600"
                        >
                          {option}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Others Mobile */}
                <div>
                  <button
                    onClick={() => toggleDropdown("others-mobile")}
                    className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 font-medium"
                  >
                    <span>Others</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {activeDropdown === "others-mobile" && (
                    <div className="mt-2 pl-4 space-y-2">
                      {otherOptions.map((option, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block text-sm text-gray-600 hover:text-blue-600"
                        >
                          {option}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* contact Mobile */}
                <Link
                  onClick={toggleMenu}
                  to={"contact"}
                  className="block text-gray-700 hover:text-blue-600 font-medium"
                >
                  Contact
                </Link>

                {/* Login Button Mobile */}
                <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                  Log in
                </button>

                {/* Social Media Mobile */}
                <div className="flex items-center justify-center space-x-4 pt-4 border-t border-gray-200">
                  <Facebook className="h-5 w-5 text-blue-600 hover:text-blue-800 cursor-pointer" />
                  <Instagram className="h-5 w-5 text-blue-600 hover:text-blue-800 cursor-pointer" />
                  <Twitter className="h-5 w-5 text-blue-600 hover:text-blue-800 cursor-pointer" />
                  <Linkedin className="h-5 w-5 text-blue-600 hover:text-blue-800 cursor-pointer" />
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
