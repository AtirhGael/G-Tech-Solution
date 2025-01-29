import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Scale, 
  LineChart, 
  Shield, 
  Clock, 
  Users,
  Code2,
  Lightbulb
} from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Higher Software Quality',
    description: 'Our rigorous development process and quality assurance ensure exceptional software standards.'
  },
  {
    icon: Scale,
    title: 'Scalability',
    description: 'Build solutions that grow with your business, handling increased loads efficiently.'
  },
  {
    icon: Clock,
    title: 'Time Efficiency',
    description: 'Streamlined processes and experienced team deliver projects on schedule.'
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Advanced security measures protect your data and applications.'
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: '24/7 support team ensures smooth operation of your solutions.'
  },
  {
    icon: LineChart,
    title: 'Transparency',
    description: 'Clear communication and regular updates throughout the development process.'
  },
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Maintainable and efficient code following best practices.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Cutting-edge solutions using the latest technologies.'
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We deliver excellence through innovation, quality, and dedication
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all"
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;