import { motion } from "framer-motion";
import { testimonialsData } from "../assets/assets"; // import your data

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 mr-5">
          What Our Clients Say
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonialsData.map((client, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Client Image */}
              <img
                src={client.image}
                alt={client.alt}
                className="w-16 h-16 rounded-full mb-4 object-cover"
              />

              {/* Rating Stars */}
              <div className="flex mb-2">
                {Array.from({ length: client.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400">&#9733;</span>
                ))}
                {Array.from({ length: 5 - client.rating }).map((_, i) => (
                  <span key={i} className="text-gray-300">&#9733;</span>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-4">{client.text}</p>

              {/* Client Name & Title */}
              <h3 className="font-bold text-lg">{client.name}</h3>
              <p className="text-sm text-gray-500">{client.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
