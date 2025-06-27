
import { Linkedin, Facebook } from "lucide-react"
import { facebook, linkedin, twitter } from "../assets/data"
import { Link } from "react-router-dom"


export default function Footer() {
  const healthInsuranceLinks = ["Family Floater Health Insurance", "Critical Illness cover", "Personal Accident Policy"]

  const motorInsuranceLinks = [
    "Car Insurance",
    "Two Wheeler Insurance",
    "Pay as you Drive",
    "Third Party Insurance",
    "Commercial Vehicle Insurance",
  ]

  const otherInsuranceLinks = [
    "International Travel Insurance",
    "Home Insurance",
    "Home loan Insurance",
    "Director & Officer Insurance",
    "Transit Insurance(Marine)",
    "CPM Insurance",
    "Contractor All risk Insurance",
  ]

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info Section */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-orange-500 mb-4">Demo</h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              The company is India's largest insurance aggregator, and has expanded its operations to the United Arab
              Emirates.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-5">
              <Link to="#" className="text-blue-400 hover:text-blue-300 transition-colors w-10  ">
                <img src={linkedin} className="w-20 hover:scale-110 duration-300 cursor-pointer" alt="" />
              </Link>
              <Link to="#" className="text-blue-600 hover:text-blue-500 transition-colors w-10">
                <img src={facebook} className="w-20 hover:scale-110 duration-300 cursor-pointer" alt="" />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-gray-300 transition-colors w-10">
                <img src={twitter} className="w-20 hover:scale-110 duration-300 cursor-pointer" alt="" />
              </Link>
            </div>
          </div>

          {/* Health Insurance Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-400 mb-4">Health Insurance</h3>
            <ul className="space-y-3">
              {healthInsuranceLinks.map((link, index) => (
                <li key={index}>
                  <Link to="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Motor Insurance Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-400 mb-4">Motor Insurance</h3>
            <ul className="space-y-3">
              {motorInsuranceLinks.map((link, index) => (
                <li key={index}>
                  <Link to="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Insurance Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-400 mb-4">Other Insurance</h3>
            <ul className="space-y-3">
              {otherInsuranceLinks.map((link, index) => (
                <li key={index}>
                  <Link to="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Login as Agent Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="text-center">
            <Link
              to="#"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors"
            >
              Login as Agent
            </Link>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">©2025 Demo, All Rights Reserved.</p>
            <div className="flex space-x-6">
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Policy Statements
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
