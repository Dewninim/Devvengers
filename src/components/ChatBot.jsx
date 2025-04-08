import React, { useState } from 'react';
import './ChatBot.css';

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [messages, setMessages] = useState([]);
  const [industry, setIndustry] = useState('');
  const [field, setField] = useState('');
  const [input, setInput] = useState('');

  const handleToggle = () => {
    setOpen(!open);
    if (!open) handleStart();
  };

  const handleStart = () => {
    setMessages([
      { from: 'bot', text: 'Hello! How can I help you?' },
      { from: 'bot', text: 'Choose your industry:' }
    ]);
    setStep(1);
  };

  const handleIndustryChange = (e) => {
    const selected = e.target.value;
    setIndustry(selected);
    setMessages(prev => [...prev, { from: 'user', text: selected }]);
    setMessages(prev => [...prev, { from: 'bot', text: 'Choose your field:' }]);
    setStep(2);
  };

  const handleFieldChange = (e) => {
    const selected = e.target.value;
    setField(selected);
    setMessages(prev => [...prev, { from: 'user', text: selected }]);

    let prompt = '';
    if (industry === 'IT' && selected === 'Software Engineering') {
      prompt = 'You should improve your knowledge in algorithms, data structures, system design, and teamwork.';
    } else {
      prompt = 'Qualification details coming soon...';
    }

    setMessages(prev => [...prev, { from: 'bot', text: prompt + ' (ty)' }]);
    setStep(3);
  };

  const handleSend = () => {
    if (input.trim() === '') return;
    setMessages(prev => [...prev, { from: 'user', text: input }]);
    setInput('');
  };

  return (
    <>
      <div className="chatbot-icon" onClick={handleToggle}>
        💬
      </div>

      {open && (
        <div className="chatbot-box">
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-msg ${msg.from}`}>{msg.text}</div>
            ))}

            {step === 1 && (
              <select onChange={handleIndustryChange}>
                <option value="">-- Select Industry --</option>
                <option value="IT">IT</option>
                <option value="Finance">Finance</option>
                <option value="Healthcare">Healthcare</option>
              </select>
            )}

            {step === 2 && (
              <select onChange={handleFieldChange}>
                <option value="">-- Select Field --</option>
                <option value="Software Engineering">Software Engineering</option>
                <option value="Cybersecurity">Cybersecurity</option>
              </select>
            )}
          </div>

          {/* Input + Send button */}
          <div className="chatbot-input-section">
            <input
              className="chatbot-input"
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button className="send-button" onClick={handleSend}>
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
