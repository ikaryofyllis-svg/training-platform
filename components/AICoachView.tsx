
import React, { useState, useEffect, useRef } from 'react';
import { FitnessCoachService } from '../services/gemini';

const AICoachView: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'coach'; text: string }[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const coach = useRef(new FitnessCoachService());

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ role: 'coach', text: "BEAXST here. You're 65% through your peak. What's the roadblock? Form, fatigue, or focus?" }]);
    }
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsTyping(true);

    const response = await coach.current.getAdvice(userText);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'coach', text: response }]);
  };

  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark animate-in zoom-in-95 duration-300">
      <div className="bg-primary p-6 text-white shrink-0">
        <h2 className="text-2xl font-black uppercase tracking-tighter">AI Performance Coach</h2>
        <p className="text-[10px] font-bold opacity-70 uppercase tracking-widest mt-1">Direct Neural Interface • Model G-3</p>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl ${
              msg.role === 'user' 
                ? 'bg-primary text-white rounded-br-none shadow-lg shadow-primary/20' 
                : 'bg-white dark:bg-card-dark text-gray-800 dark:text-gray-100 rounded-bl-none shadow-sm border border-gray-100 dark:border-gray-800'
            }`}>
              <p className="text-sm font-medium leading-relaxed whitespace-pre-wrap">{msg.text}</p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white dark:bg-card-dark p-4 rounded-2xl rounded-bl-none border border-gray-100 dark:border-gray-800">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce delay-100"></div>
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-4 bg-white dark:bg-card-dark border-t border-gray-200 dark:border-gray-800 flex gap-2">
        <input 
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about your lift, diet, or recovery..."
          className="flex-1 bg-gray-50 dark:bg-black/20 border-gray-200 dark:border-gray-800 rounded-xl text-sm font-medium px-4 focus:ring-primary focus:border-primary"
        />
        <button 
          type="submit"
          className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 active:scale-90 transition-transform disabled:opacity-50"
          disabled={isTyping}
        >
          <span className="material-symbols-outlined active-icon">send</span>
        </button>
      </form>
    </div>
  );
};

export default AICoachView;
