'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Code, MessageCircle, Zap } from 'lucide-react';

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Globe,
      title: "Website Templates",
      description: "Ready-to-use, high-quality templates to get your business online fast.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Easy Customization"]
    },
    {
      icon: Code,
      title: "Custom Websites",
      description: "Tailored, scalable websites designed for your unique brand.",
      features: ["Custom Design", "Scalable Architecture", "Performance Optimized", "Brand Integration"]
    },
    {
      icon: MessageCircle,
      title: "AI Receptionists",
      description: "24/7 virtual receptionists powered by AI to handle customer queries.",
      features: ["24/7 Availability", "Multi-language Support", "Smart Routing", "Analytics Dashboard"]
    },
    {
      icon: Zap,
      title: "AI Automation Agents",
      description: "Smart AI agents to automate repetitive tasks and boost productivity.",
      features: ["Task Automation", "Workflow Integration", "Custom Scripts", "Performance Tracking"]
    }
  ];

  const achievements = [
    "🚀 Launched in 2025",
    "💼 3+ Projects Completed",
    "👩‍💻 Team of Skilled Developers",
    "🔗 Built Our Own Company Website"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };



  return (
    <section id="services" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gunmetal-100 to-gunmetal-200"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
            <span className="text-picton-blue text-sm font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How Our Platform Makes Your
            <br />
            <span className="gradient-text">Workflow Easier</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            We provide comprehensive digital solutions to help your business thrive in the modern world.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card p-8 h-full group cursor-pointer"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-picton-blue to-picton-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={32} className="text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-picton-blue transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-picton-blue rounded-full"></div>
                    <span className="text-white/60 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="border-t border-white/10 pt-12">
            <p className="text-white/60 text-sm mb-8">Achievements / Milestones</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              {achievements.map((achievement, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: 1 + i * 0.2 }}
                  className="glass-card px-6 py-3 rounded-full"
                >
                  <span className="text-white/80 font-medium">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
