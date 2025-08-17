'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, Sparkles, ExternalLink } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type: 'text' | 'link' | 'quick_reply';
  quickReplies?: string[];
}

const LiveChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI assistant from LevelUp NationX. How can I help you today? 🤖",
      sender: 'bot',
      timestamp: new Date(),
      type: 'text'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [conversationContext, setConversationContext] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Enhanced bot responses with more context and variations
  const botResponses = {
    greeting: [
      "Hello! Welcome to LevelUp NationX! How can I assist you today? 🚀",
      "Hi there! I'm here to help you with our services. What would you like to know? 💫",
      "Welcome! I'm your AI assistant. How can I help you level up your business? ⚡",
      "Hey! Thanks for reaching out to LevelUp NationX. What can I help you with? 🎯"
    ],
    services: [
      {
        text: "We offer 4 main services:\n\n🚀 **Website Templates** - Ready-to-use, high-quality templates to get your business online fast\n💻 **Custom Websites** - Tailored, scalable websites designed for your unique brand\n🤖 **AI Receptionists** - 24/7 virtual receptionists powered by AI to handle customer queries\n⚡ **AI Automation Agents** - Smart AI agents to automate repetitive tasks and boost productivity\n\nWhich service interests you most?",
        quickReplies: ["Tell me about Website Templates", "Tell me about Custom Websites", "Tell me about AI Receptionists", "Tell me about AI Automation"]
      },
      {
        text: "Our services include:\n\n• **Website Templates** - Quick setup, professional designs\n• **Custom Websites** - Unique solutions for your brand\n• **AI Receptionists** - Always available customer support\n• **AI Automation Agents** - Streamline your operations\n\nWould you like details about any specific service?",
        quickReplies: ["Website Templates", "Custom Websites", "AI Receptionists", "AI Automation"]
      }
    ],
    pricing: [
      {
        text: "Our pricing varies based on your specific needs and project requirements. We offer competitive rates for startups and local businesses.\n\n**Typical ranges:**\n• Website Templates: ₹5,000 - ₹15,000\n• Custom Websites: ₹25,000 - ₹1,00,000+\n• AI Receptionists: ₹10,000 - ₹50,000/month\n• AI Automation: ₹15,000 - ₹75,000\n\nWould you like a personalized quote?",
        quickReplies: ["Get a quote", "Tell me more about pricing", "Contact sales team"]
      },
      {
        text: "Pricing depends on the scope and complexity of your project. We offer flexible packages for different business sizes.\n\n**What affects pricing:**\n• Project complexity\n• Features required\n• Timeline\n• Maintenance needs\n\nLet me connect you with our team for a detailed quote!",
        quickReplies: ["Request quote", "Schedule consultation", "View packages"]
      }
    ],
    contact: [
      {
        text: "Here's how you can reach us:\n\n📧 **Email:** leveluphelpx@gmail.com\n📞 **Phone:** +91 9154715453\n📍 **Location:** Hyderabad, India\n\n**Quick actions:**\n• Fill out our project form\n• Schedule a consultation\n• Send us a WhatsApp message\n\nWe're here to help! 🎯",
        quickReplies: ["Fill project form", "Schedule consultation", "WhatsApp contact"]
      },
      {
        text: "Contact us at:\n\n• **Email:** leveluphelpx@gmail.com\n• **Phone:** +91 9154715453\n• **Location:** Hyderabad, India\n\n**Business Hours:**\nMonday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\n\nAI Support available 24/7! 🤖",
        quickReplies: ["Send email", "Call now", "Visit location"]
      }
    ],
    portfolio: [
      {
        text: "We've completed several exciting projects including:\n\n🏋️ **FitNation Hyderabad** - Modern gym website with online booking and member portal\n🔵 **Blue Glass** - Glass manufacturing company with product catalog\n🛒 **E-Commerce Platform** - AI-powered recommendations and inventory management\n🍽️ **Restaurant Management** - Complete system with online ordering and AI receptionist\n\nEach project showcases our expertise in modern web development and AI integration!",
        quickReplies: ["View FitNation project", "View Blue Glass project", "View E-Commerce project", "View Restaurant project"]
      },
      {
        text: "Our portfolio includes diverse projects:\n\n**Recent Work:**\n• Gym websites with booking systems\n• Manufacturing company portals\n• E-commerce platforms with AI\n• Restaurant management systems\n\nAll projects feature:\n✅ Modern design\n✅ Mobile responsiveness\n✅ AI integration\n✅ Performance optimization\n\nWould you like to see specific project details?",
        quickReplies: ["Show me examples", "Case studies", "Client testimonials"]
      }
    ],
    website_templates: [
      "Our website templates are ready-to-use, high-quality designs that you can customize for your business. They include:\n\n✅ Responsive design\n✅ SEO optimized\n✅ Fast loading\n✅ Easy customization\n✅ Professional layouts\n\n**Popular categories:**\n• Business & Corporate\n• E-commerce\n• Restaurant & Food\n• Fitness & Health\n• Real Estate\n\nWould you like to see some template examples?"
    ],
    custom_websites: [
      "Custom websites are tailored specifically for your brand and business needs. We offer:\n\n✅ Unique design based on your brand\n✅ Scalable architecture\n✅ Advanced features\n✅ Performance optimization\n✅ Ongoing support\n\n**What's included:**\n• Custom design & development\n• Content management system\n• SEO optimization\n• Mobile responsiveness\n• Analytics integration\n\nReady to discuss your custom website project?"
    ],
    ai_receptionists: [
      "Our AI Receptionists provide 24/7 customer support with:\n\n✅ Instant responses\n✅ Multi-language support\n✅ Lead qualification\n✅ Appointment scheduling\n✅ FAQ handling\n\n**Features:**\n• Natural language processing\n• Integration with your systems\n• Custom training for your business\n• Analytics and reporting\n• Human handoff when needed\n\nPerfect for businesses that want to provide excellent customer service around the clock!"
    ],
    ai_automation: [
      "AI Automation Agents can streamline your business operations:\n\n✅ Task automation\n✅ Data processing\n✅ Customer service\n✅ Marketing automation\n✅ Process optimization\n\n**Common use cases:**\n• Email marketing automation\n• Customer data analysis\n• Social media management\n• Inventory tracking\n• Report generation\n\nLet's discuss how AI can automate your specific business processes!"
    ],
    quote_request: [
      {
        text: "Great! To provide you with an accurate quote, I need some information:\n\n**Please tell me:**\n• What type of project you need (website, AI, etc.)\n• Your business industry\n• Timeline requirements\n• Budget range\n• Specific features needed\n\nYou can also fill out our detailed project form for a comprehensive quote!",
        quickReplies: ["Fill project form", "Schedule consultation", "Tell me about my project"]
      }
    ],
    consultation: [
      {
        text: "Perfect! Let's schedule a consultation to discuss your project in detail.\n\n**Available options:**\n• **WhatsApp consultation** - Quick chat\n• **Video call** - Detailed discussion\n• **Project form** - Comprehensive assessment\n\n**What we'll discuss:**\n• Your business goals\n• Technical requirements\n• Timeline and budget\n• Next steps\n\nWhich option works best for you?",
        quickReplies: ["WhatsApp consultation", "Video call", "Fill project form"]
      }
    ],
    default: [
      "That's a great question! Let me connect you with our team for detailed information. You can reach us at leveluphelpx@gmail.com or call +91 9154715453.",
      "I'd be happy to help! For specific details, please contact our team at leveluphelpx@gmail.com or +91 9154715453.",
      "Great question! Our team would love to discuss this with you. Reach out at leveluphelpx@gmail.com or +91 9154715453.",
      "That's an interesting point! For detailed information, please contact our experts at leveluphelpx@gmail.com or +91 9154715453."
    ]
  };

  const getBotResponse = (userMessage: string): { text: string; quickReplies?: string[] } => {
    const message = userMessage.toLowerCase();
    const context = [...conversationContext, message];
    
    // Update conversation context (keep last 5 messages)
    setConversationContext(context.slice(-5));
    
    // Check for specific service inquiries
    if (message.includes('template') || message.includes('ready-to-use')) {
      return { text: botResponses.website_templates[0] };
    }
    
    if (message.includes('custom') || message.includes('tailored') || message.includes('unique')) {
      return { text: botResponses.custom_websites[0] };
    }
    
    if (message.includes('receptionist') || message.includes('customer support') || message.includes('24/7')) {
      return { text: botResponses.ai_receptionists[0] };
    }
    
    if (message.includes('automation') || message.includes('automate') || message.includes('streamline')) {
      return { text: botResponses.ai_automation[0] };
    }
    
    // Check for quote requests
    if (message.includes('quote') || message.includes('price') || message.includes('cost') || message.includes('how much')) {
      return botResponses.pricing[Math.floor(Math.random() * botResponses.pricing.length)];
    }
    
    // Check for consultation requests
    if (message.includes('consultation') || message.includes('meet') || message.includes('discuss') || message.includes('schedule')) {
      return botResponses.consultation[0];
    }
    
    // Check for greetings
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('good morning') || message.includes('good afternoon')) {
      return { text: botResponses.greeting[Math.floor(Math.random() * botResponses.greeting.length)] };
    }
    
    // Check for service inquiries
    if (message.includes('service') || message.includes('what do you do') || message.includes('offer') || message.includes('provide')) {
      return botResponses.services[Math.floor(Math.random() * botResponses.services.length)];
    }
    
    // Check for contact information
    if (message.includes('contact') || message.includes('email') || message.includes('phone') || message.includes('reach') || message.includes('location')) {
      return botResponses.contact[Math.floor(Math.random() * botResponses.contact.length)];
    }
    
    // Check for portfolio/work examples
    if (message.includes('portfolio') || message.includes('project') || message.includes('work') || message.includes('example') || message.includes('case study')) {
      return botResponses.portfolio[Math.floor(Math.random() * botResponses.portfolio.length)];
    }
    
    // Check for specific project types
    if (message.includes('gym') || message.includes('fitness') || message.includes('restaurant') || message.includes('e-commerce') || message.includes('manufacturing')) {
      return { text: "Great! We have experience with that type of project. We've worked on similar businesses including gyms, restaurants, e-commerce platforms, and manufacturing companies. Would you like to see some examples or discuss your specific requirements?" };
    }
    
    // Check for technology questions
    if (message.includes('technology') || message.includes('tech stack') || message.includes('framework') || message.includes('platform')) {
      return { text: "We use modern technologies including Next.js, React, Node.js, and various AI/ML frameworks. Our tech stack is chosen based on your specific requirements to ensure the best performance and scalability. Would you like to discuss the technical details of your project?" };
    }
    
    // Check for timeline questions
    if (message.includes('timeline') || message.includes('duration') || message.includes('how long') || message.includes('delivery')) {
      return { text: "Project timelines vary based on complexity:\n\n• **Website Templates:** 1-3 days\n• **Custom Websites:** 2-8 weeks\n• **AI Solutions:** 1-4 weeks\n\nWe'll provide a detailed timeline during our consultation based on your specific requirements." };
    }
    
    // Check for support/maintenance questions
    if (message.includes('support') || message.includes('maintenance') || message.includes('updates') || message.includes('hosting')) {
      return { text: "We provide comprehensive support and maintenance:\n\n✅ **Hosting & Domain Management**\n✅ **Regular Updates & Security**\n✅ **Technical Support**\n✅ **Performance Monitoring**\n✅ **Content Updates**\n\nWe offer different support packages to match your needs." };
    }
    
    // Default response
    return { text: botResponses.default[Math.floor(Math.random() * botResponses.default.length)] };
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim() || isTyping) return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
      type: 'text'
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = getBotResponse(inputMessage);
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse.text,
        sender: 'bot',
        timestamp: new Date(),
        type: 'text',
        quickReplies: botResponse.quickReplies
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuickReply = (reply: string) => {
    setInputMessage(reply);
    setTimeout(() => handleSendMessage(), 100);
  };

  const handleExternalAction = (action: string) => {
    switch (action) {
      case 'whatsapp':
        window.open('https://wa.me/919154715453?text=Hello%20LevelUp%20NationX!%20I%20found%20you%20through%20your%20website.', '_blank');
        break;
      case 'email':
        window.open('mailto:leveluphelpx@gmail.com', '_blank');
        break;
      case 'form':
        window.open('https://share.google/lHxZyyzuwSP8xQtm1', '_blank');
        break;
      case 'phone':
        window.open('tel:+919154715453', '_blank');
        break;
    }
  };

  const initialQuickReplies = [
    "What services do you offer?",
    "Tell me about pricing",
    "Show me your portfolio",
    "How can I contact you?"
  ];

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[60] w-14 h-14 bg-gradient-to-r from-picton-blue to-picton-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <MessageCircle size={24} className="text-white" />
        )}
      </motion.button>

      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 z-[55] w-80 h-96 bg-gunmetal-500 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-md"
          >
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-picton-blue to-picton-blue-600 rounded-full flex items-center justify-center">
                  <Bot size={16} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">LevelUp NationX</h3>
                  <p className="text-white/60 text-xs">AI Assistant</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white/60 text-xs">Online</span>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-64 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-picton-blue text-white'
                        : 'bg-white/10 text-white'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <p className="text-xs opacity-60 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/10 text-white px-3 py-2 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <div className="flex flex-wrap gap-2">
                  {initialQuickReplies.map((reply, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/80 text-xs hover:bg-white/10 transition-colors"
                    >
                      {reply}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Bot Quick Replies */}
            {messages.length > 1 && messages[messages.length - 1].sender === 'bot' && messages[messages.length - 1].quickReplies && (
              <div className="px-4 pb-2">
                <div className="flex flex-wrap gap-2">
                  {messages[messages.length - 1].quickReplies?.map((reply, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-1 bg-picton-blue/20 border border-picton-blue/30 rounded-full text-picton-blue text-xs hover:bg-picton-blue/30 transition-colors"
                    >
                      {reply}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* External Action Buttons */}
            {messages.length > 2 && (
              <div className="px-4 pb-2">
                <div className="flex justify-center space-x-2">
                  <motion.button
                    onClick={() => handleExternalAction('whatsapp')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-xs hover:bg-green-500/30 transition-colors flex items-center space-x-1"
                  >
                    <span>📱</span>
                    <span>WhatsApp</span>
                  </motion.button>
                  <motion.button
                    onClick={() => handleExternalAction('form')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-1 bg-picton-blue/20 border border-picton-blue/30 rounded-full text-picton-blue text-xs hover:bg-picton-blue/30 transition-colors flex items-center space-x-1"
                  >
                    <ExternalLink size={12} />
                    <span>Form</span>
                  </motion.button>
                </div>
              </div>
            )}

            {/* Chat Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-picton-blue transition-colors"
                  disabled={isTyping}
                />
                <motion.button
                  onClick={handleSendMessage}
                  disabled={isTyping || !inputMessage.trim()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                    isTyping || !inputMessage.trim()
                      ? 'bg-white/10 text-white/40 cursor-not-allowed'
                      : 'bg-picton-blue hover:bg-picton-blue-600 text-white'
                  }`}
                >
                  <Send size={16} />
                </motion.button>
              </div>
              <div className="flex items-center justify-between mt-2">
                <p className="text-white/40 text-xs">
                  AI Assistant • 24/7 Support
                </p>
                <div className="flex items-center space-x-1">
                  <Sparkles size={12} className="text-picton-blue" />
                  <span className="text-picton-blue text-xs">Powered by AI</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LiveChatWidget;
