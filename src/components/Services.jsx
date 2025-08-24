import { motion } from "framer-motion";
import { FaTruck, FaTools, FaDolly, FaTrash } from "react-icons/fa";
import servicesBg from "/services2.jpg"; // put your background image in /public

const services = [
  {
    icon: <FaTruck className="text-4xl text-white" />,
    title: "After Construction Hauling",
    description: "Clearing debris and waste after construction projects efficiently.",
    bg: "bg-blue-500",
  },
  {
    icon: <FaTools className="text-4xl text-white" />,
    title: "Driveway Preparation",
    description: "Preparing driveways with care and precision for any project.",
    bg: "bg-green-500",
  },
  {
    icon: <FaDolly className="text-4xl text-white" />,
    title: "Equipment Rental & Transport",
    description: "Renting and transporting heavy equipment safely.",
    bg: "bg-yellow-500",
  },
  {
    icon: <FaTrash className="text-4xl text-white" />,
    title: "Trash Hauling for Apartments & Commercial Buildings",
    description: "Reliable trash removal for clean and safe environments.",
    bg: "bg-red-500",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative py-16 md:py-24 text-gray-900"
      style={{
        backgroundImage: `url(${servicesBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="relative inset-0 bg-black bg-opacity-60"></div>

      <div className="relative container mx-auto px-6 md:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12 mr-5">
          Our Services
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`rounded-lg p-8 flex flex-col items-center text-center ${service.bg} text-white shadow-lg`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
