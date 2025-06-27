"use client"

import { useState } from "react"
import { FireInsuranceImg, HealthInsuranceImg, HomeInsuranceImg, MotorInsuranceImg, ShopInsuranceImg, TravelInsuranceImg } from "../assets/data"


export default function InsurancePartners() {
  const [selectedCategory, setSelectedCategory] = useState("Health Insurance")

  const insuranceCategories = [
    { name: "Health Insurance", icon: HealthInsuranceImg, color: "bg-blue-100 text-blue-600" },
    { name: "Motor Insurance", icon: MotorInsuranceImg, color: "bg-green-100 text-green-600" },
    { name: "Travel Insurance", icon: TravelInsuranceImg, color: "bg-purple-100 text-purple-600" },
    { name: "Shop Insurance", icon: ShopInsuranceImg, color: "bg-indigo-100 text-indigo-600" },
    { name: "Home Insurance", icon: HomeInsuranceImg, color: "bg-orange-100 text-orange-600" },
    { name: "Fire Insurance", icon: FireInsuranceImg, color: "bg-red-100 text-red-600" },
  ]

  const partnerLogos = [
    { name: "Oriental Insurance", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Universal Sompo", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Bajaj Allianz", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Tata AIG", logo: "/placeholder.svg?height=80&width=120" },
    { name: "SBI General", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Royal Sundaram", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Reliance General", logo: "/placeholder.svg?height=80&width=120" },
    { name: "New India Assurance", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Liberty General", logo: "/placeholder.svg?height=80&width=120" },
    { name: "IFFCO-Tokio", logo: "/placeholder.svg?height=80&width=120" },
    { name: "ICICI Lombard", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Reliance General", logo: "/placeholder.svg?height=80&width=120" },
    { name: "SBI General", logo: "/placeholder.svg?height=80&width=120" },
    { name: "HDFC ERGO", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Universal Sompo", logo: "/placeholder.svg?height=80&width=120" },
  ]

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold mb-4">
            <span className="text-orange-500">Insurance</span> <span className="text-gray-900">Partner</span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Insurance Categories */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <div className="">
                {insuranceCategories.map((category, index) => {
                  
                  const isSelected = selectedCategory === category.name

                  return (
                    <button
                      key={index}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`w-full flex items-center space-x-4  rounded-xl transition-all duration-200 text-left ${
                        isSelected
                          ? "bg-blue-50 border-2 border-blue-200 shadow-md"
                          : "hover:bg-gray-50 border-2 border-transparent"
                      }`}
                    >
                      <div className={`p-3`}>
                        <img src={category.icon} alt={category.name} className="w-14" />
                    </div>
                      <span className="text-lg font-semibold text-gray-800">{category.name}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Side - Partner Logos Grid */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-6">
                {partnerLogos.map((partner, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-4 flex items-center justify-center hover:shadow-md transition-shadow duration-200 border border-gray-100 hover:border-gray-200"
                  >
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      className="max-w-full max-h-16 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Showing partners for <span className="font-semibold text-blue-600">{selectedCategory}</span>
              </p>
              <p className="text-sm text-gray-500 mt-2">
                We work with {partnerLogos.length}+ trusted insurance partners to provide you the best coverage options
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
