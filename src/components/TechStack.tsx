import React from 'react';
import { motion } from 'framer-motion';
import {
  Database,
  Server,
  Layout,
  Smartphone,
  Cloud,
  Shield,
  Cpu,
  Code2,
  Boxes,
  Workflow,
  Binary,
  Layers
} from 'lucide-react';

const technologies = [
  {
    category: "Frontend Development",
    icon: Layout,
    stacks: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 }
    ]
  },
  {
    category: "Backend Development",
    icon: Server,
    stacks: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 85 },
      { name: "Express.js", level: 86 },
      { name: "FastAPI", level: 82 }
    ]
  },
  {
    category: "Database",
    icon: Database,
    stacks: [
      { name: "PostgreSQL", level: 87 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 80 },
      { name: "Supabase", level: 84 }
    ]
  },
  {
    category: "Mobile Development",
    icon: Smartphone,
    stacks: [
      { name: "React Native", level: 85 },
      { name: "Flutter", level: 82 },
      { name: "iOS", level: 80 },
      { name: "Android", level: 80 }
    ]
  },
  {
    category: "Cloud Services",
    icon: Cloud,
    stacks: [
      { name: "AWS", level: 86 },
      { name: "Google Cloud", level: 84 },
      { name: "Azure", level: 82 },
      { name: "Vercel", level: 88 }
    ]
  },
  {
    category: "DevOps",
    icon: Workflow,
    stacks: [
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 82 },
      { name: "CI/CD", level: 84 },
      { name: "Git", level: 90 }
    ]
  }
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Tech Stack</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Cutting-edge technologies we use to build powerful solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <tech.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white ml-4">{tech.category}</h3>
              </div>

              <div className="space-y-4">
                {tech.stacks.map((stack, stackIndex) => (
                  <motion.div
                    key={stackIndex}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + stackIndex * 0.1 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{stack.name}</span>
                      <span className="text-blue-400">{stack.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stack.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 + stackIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;