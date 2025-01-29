import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Cpu, Network } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Animated AI Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 ai-circuit-pattern animate-circuit-flow opacity-20" />
        <div className="absolute inset-0 bg-ai-gradient animate-pulse-slow" />
        
        {/* Floating AI Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {[...Array(5)].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0.4, 0.2, 0.4], 
                scale: [1, 1.2, 1],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 5,
                delay: index * 0.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute"
              style={{
                left: `${15 + index * 20}%`,
                top: `${20 + (index % 3) * 25}%`
              }}
            >
              {index % 3 === 0 ? (
                <Brain className="w-16 h-16 text-blue-400/30" />
              ) : index % 3 === 1 ? (
                <Cpu className="w-20 h-20 text-blue-500/30" />
              ) : (
                <Network className="w-18 h-18 text-blue-300/30" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            <span className="block">Transforming Ideas</span>
            <span className="text-blue-400 block mt-2">Into Digital Reality</span>
          </h1>
          
          <p className="mt-8 text-xl text-gray-300 max-w-2xl mx-auto">
            We craft innovative AI-powered solutions that empower businesses 
            to thrive in the modern world. Let's build something extraordinary together.
          </p>
          
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#why-us"
              className="inline-flex items-center px-8 py-4 border-2 border-blue-400/30 text-blue-100 font-medium rounded-lg hover:border-blue-400 hover:text-blue-400 transition-colors"
            >
              Why Choose Us
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;