"use client"

import { Users, Search, Tag, LifeBuoy } from "lucide-react"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function WhyDemo() {
  const whyDemoData = {
    title: {
      prefix: "Why is ",
      highlight: "Demo",
      suffix: " India's go-to for insurance?",
    },
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
    features: [
      {
        id: 1,
        title: "Over 9 Million",
        description: "customers trust us & have bought their insurance on Policybazaar",
        icon: Users,
        iconColor: "text-yellow-600",
        iconBg: "bg-yellow-100",
      },
      {
        id: 2,
        title: "50+ Insurers",
        description: "partnered with us so that you can compare easily & transparently",
        icon: Search,
        iconColor: "text-blue-600",
        iconBg: "bg-blue-100",
      },
      {
        id: 3,
        title: "Great Price",
        description:
          "for all kinds of insurance plans available online for all kinds of insurance plans available online",
        icon: Tag,
        iconColor: "text-red-600",
        iconBg: "bg-red-100",
      },
      {
        id: 4,
        title: "Claims",
        description: "support built in with every policy for help, when you need it the most",
        icon: LifeBuoy,
        iconColor: "text-orange-600",
        iconBg: "bg-orange-100",
      },
    ],
  }

  useEffect(() => {
    AOS.init({
      duration: 700,
    });
    
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-6">
            {whyDemoData.title.prefix}
            <span className="text-orange-500">{whyDemoData.title.highlight}</span>
            {whyDemoData.title.suffix}
          </h2>
          <p className=" max-w-4xl mx-auto leading-relaxed">{whyDemoData.description}</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {whyDemoData.features.map((feature) => {
            const IconComponent = feature.icon

            return (
              <div key={feature.id} className="group " data-aos="fade-up">
                <div className="flex items-start space-x-6 p-6 rounded-lg bg-white">
                  {/* Icon */}
                  <div className={`p-4 rounded-full ${feature.iconBg} flex-shrink-0`}>
                    <IconComponent className={`h-8 w-8 ${feature.iconColor}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Optional CTA Section */}
        
      </div>
    </section>
  )
}
