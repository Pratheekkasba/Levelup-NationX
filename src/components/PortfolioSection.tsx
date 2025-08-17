'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "FitNation Hyderabad",
      description: "A modern gym website for FitNation Hyderabad with online booking, class schedules, and member portal.",
      image: "/api/placeholder/400/300",
      category: "Custom Website",
      technologies: ["Next.js", "TailwindCSS", "Booking System"],
      link: "#",
      github: "#"
    },
    {
      title: "Blue Glass",
      description: "A sophisticated glass manufacturing company website with product catalog and inquiry system.",
      image: "/api/placeholder/400/300",
      category: "Custom Website",
      technologies: ["React", "Product Catalog", "Contact Forms"],
      link: "#",
      github: "#"
    },
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce website with AI-powered product recommendations and automated inventory management.",
      image: "/api/placeholder/400/300",
      category: "Custom Website + AI",
      technologies: ["Next.js", "AI Integration", "Payment Gateway"],
      link: "#",
      github: "#"
    },
    {
      title: "Restaurant Management System",
      description: "Complete restaurant website with online ordering, AI receptionist for reservations, and automated order processing.",
      image: "/api/placeholder/400/300",
      category: "Website + AI Receptionist",
      technologies: ["React", "AI Chatbot", "Order System"],
      link: "#",
      github: "#"
    }
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
    <section id="portfolio" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gunmetal-200 to-gunmetal-300"></div>
      
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
            <span className="text-picton-blue text-sm font-medium">Our Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Showcasing Our
            <br />
            <span className="gradient-text">Latest Projects</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Discover how we&apos;ve helped businesses transform their digital presence with our innovative solutions.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass-card overflow-hidden group cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative h-64 bg-gradient-to-br from-picton-blue/20 to-picton-blue-600/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">P</span>
                    </div>
                    <p className="text-white/80 text-sm">Project</p>
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-picton-blue rounded-full flex items-center justify-center hover:bg-picton-blue-600 transition-colors"
                  >
                    <ExternalLink size={20} className="text-white" />
                  </motion.a>
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <Github size={20} className="text-white" />
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-picton-blue text-sm font-medium">{project.category}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-picton-blue transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-white/70 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/60 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
