import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
}

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi! I'm Nikhil's AI Assistant. How can I help you today?", sender: 'ai' }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const generateResponse = (text: string) => {
    const lowerText = text.toLowerCase();
    if (lowerText.includes('resume') || lowerText.includes('cv')) {
      return "You can download Nikhil's resume by clicking the 'Download CV' button in the Hero section!";
    }
    if (lowerText.includes('contact') || lowerText.includes('email') || lowerText.includes('phone')) {
      return "You can reach Nikhil at wnikhil001@gmail.com or call him at +91-9860850969.";
    }
    if (lowerText.includes('experience') || lowerText.includes('work')) {
      return "Nikhil has 3.5+ years of experience as a MERN Stack Developer, working at companies like Globalion Technology Solutions and COREMAGIX SOFTWARE.";
    }
    if (lowerText.includes('skill') || lowerText.includes('tech')) {
      return "His core stack includes React.js, Node.js, MongoDB, Express.js, TypeScript, and Tailwind CSS. Check out the Arsenal section for more!";
    }
    if (lowerText.includes('project')) {
      return "He has built enterprise applications like a Loan Management System and an AI Credit Card Fraud Detection System. You can find more details in the Work section.";
    }
    if (lowerText.includes('hi') || lowerText.includes('hello') || lowerText.includes('hey')) {
      return "Hello there! Feel free to ask me about Nikhil's skills, experience, projects, or contact info.";
    }
    return "Thanks for your message! For more specific inquiries, please contact Nikhil directly using the details in the footer.";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: 'user'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Simulate AI thinking delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: Date.now() + 1,
        text: generateResponse(userMessage.text),
        sender: 'ai'
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 600);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[110]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-80 h-96 bg-[#030014]/90 border border-fuchsia-500/30 rounded-2xl backdrop-blur-xl shadow-[0_0_20px_rgba(217,70,239,0.2)] flex flex-col overflow-hidden"
          >
            <div className="p-4 border-b border-fuchsia-500/30 bg-fuchsia-500/10 font-bold text-fuchsia-300 flex justify-between items-center">
              <span>AI Assistant</span>
              <button onClick={() => setIsOpen(false)} className="text-fuchsia-400 hover:text-white transition-colors">✕</button>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 scrollbar-thin scrollbar-thumb-fuchsia-500/20 scrollbar-track-transparent">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                    msg.sender === 'user' 
                      ? 'bg-cyan-500/20 text-cyan-100 self-end rounded-tr-sm border border-cyan-500/20' 
                      : 'bg-fuchsia-500/10 text-fuchsia-100 self-start rounded-tl-sm border border-fuchsia-500/20'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-3 border-t border-fuchsia-500/20 flex gap-2">
              <input 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-400 placeholder:text-slate-500"
                placeholder="Ask about Nikhil..."
              />
              <button 
                onClick={handleSendMessage}
                className="p-2 bg-fuchsia-600/20 text-fuchsia-400 border border-fuchsia-500/30 rounded-lg hover:bg-fuchsia-500/40 hover:text-white transition-all"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-tr from-fuchsia-600 to-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-fuchsia-500/20 text-white text-2xl ml-auto"
      >
        {isOpen ? '✕' : '🤖'}
      </motion.button>
    </div>
  );
};

export default AIChatbot;