
import { Headphones, Edit3, CreditCard } from "lucide-react"

export default function BestServices() {
  const servicesData = [
    {
      id: 1,
      title: "24x7 Support",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industr",
      icon: Headphones,
      iconColor: "text-gray-600",
      iconBg: "bg-gray-100",
    },
    {
      id: 2,
      title: "Easy Claim System",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industr",
      icon: Edit3,
      iconColor: "text-gray-600",
      iconBg: "bg-gray-100",
    },
    {
      id: 3,
      title: "Easy Installments",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industr",
      icon: CreditCard,
      iconColor: "text-gray-600",
      iconBg: "bg-gray-100",
    },
  ]

  return (
    <section className="py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold">
            <span className="text-gray-900">Best </span>
            <span className="text-orange-500">Services</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {servicesData.map((service) => {
            const IconComponent = service.icon

            return (
              <div key={service.id} className="group">
                {/* Service Card */}
                <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl cursor-pointer transition-shadow duration-300">
                  {/* Icon and Title Container */}
                  <div className="flex items-start space-x-4 mb-4">
                    {/* Icon */}
                    <div className={`p-3 rounded-lg ${service.iconBg} flex-shrink-0`}>
                      <IconComponent className={`h-8 w-8 ${service.iconColor}`} />
                    </div>

                    {/* Title */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
