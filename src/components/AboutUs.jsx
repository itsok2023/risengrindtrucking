import { motion } from "framer-motion";
import aboutImage from "/localy.avif"; // replace with your image

const AboutUs = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-gray-100 text-gray-900"
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12">
        {/* Image */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={aboutImage}
            alt="Rise-N-Grind Truck"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Us</h2>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            At <strong>Rise-N-Grind Trucking</strong>, we specialize in hauling after construction cleaning, driveway preparation, equipment rental and distribution services, ensuring that our clients receive top-quality support from start to finish. Whether it’s clearing away debris after a construction project, transporting heavy equipment, or distributing essential materials, we bring the same level of commitment and professionalism to every job.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            In addition, we proudly serve apartment complexes and commercial buildings with dependable trash hauling services, helping property owners and managers maintain clean and safe environments for their tenants and customers.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            Our mission is to provide trustworthy, efficient, and affordable trucking solutions that meet the unique needs of each client. With a team that values punctuality, safety, and customer satisfaction above all else, <strong>Rise-N-Grind Trucking</strong> is more than just a service provider—we’re your reliable partner on the road to success.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
