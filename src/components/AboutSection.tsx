'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Users, Zap, Award } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Target, value: "10+", label: "Projects Completed" },
    { icon: Users, value: "5+", label: "Happy Clients" },
    { icon: Zap, value: "24/7", label: "AI Support" },
    { icon: Award, value: "100%", label: "Client Satisfaction" }
  ];

  const values = [
    {
      title: "Future-Driven",
      description: "We stay ahead of the curve, embracing cutting-edge technologies to deliver solutions that scale with your business."
    },
    {
      title: "Gen-Z Friendly",
      description: "Modern, intuitive interfaces and AI-powered solutions that resonate with the next generation of entrepreneurs."
    },
    {
      title: "Startup Focused",
      description: "Built for startups and local businesses, we understand the unique challenges and opportunities you face."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gunmetal-300 to-gunmetal-400"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
              <span className="text-picton-blue text-sm font-medium">About Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Building the Future of
              <br />
              <span className="gradient-text">Digital Business</span>
            </h2>
            
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              At LevelUp NationX, we&apos;re not just building websites and AI solutions – we&apos;re crafting the digital foundation for the next generation of successful businesses.
            </p>
            
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              Our mission is to democratize access to cutting-edge technology, making it possible for startups and local businesses to compete on a global scale. We believe that every business, regardless of size, deserves access to the same powerful tools that drive Fortune 500 companies.
            </p>

            {/* Values */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 * index, duration: 0.6 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-picton-blue to-picton-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                    <p className="text-white/60">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}
                  className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-picton-blue to-picton-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon size={24} className="text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.8 }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                To become the leading platform that empowers businesses of all sizes to leverage the power of AI and modern web technologies, creating a more inclusive and innovative digital economy.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-picton-blue rounded-full"></div>
                <span className="text-white/60 text-sm">AI-First Approach</span>
                <div className="w-2 h-2 bg-picton-blue rounded-full"></div>
                <span className="text-white/60 text-sm">Scalable Solutions</span>
                <div className="w-2 h-2 bg-picton-blue rounded-full"></div>
                <span className="text-white/60 text-sm">Future-Ready</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-8">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Pratheek Kasuba", role: "Founder & CEO", focus: "AI Strategy & Vision" },
              { name: "Pranav Sri Datta", role: "Co-Founder & CFO", focus: "Finance & Operations" }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.4 + index * 0.2, duration: 0.6 }}
                className="glass-card p-6 group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-picton-blue to-picton-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{member.name}</h4>
                <p className="text-picton-blue text-sm mb-2">{member.role}</p>
                <p className="text-white/60 text-sm">{member.focus}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
