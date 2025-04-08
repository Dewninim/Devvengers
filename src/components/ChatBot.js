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
    setMessages(prev => [
      ...prev,
      { from: 'user', text: selected },
      { from: 'bot', text: 'Choose your field:' }
    ]);
    setStep(2);
  };

  const handleFieldChange = (e) => {
    const selected = e.target.value;
    setField(selected);
    setMessages(prev => [...prev, { from: 'user', text: selected }]);

    let prompt = '';

    // IT industry
    if (industry === 'IT' && selected === 'Software Engineering') {
      prompt = 'You should improve your knowledge in algorithms, data structures, system design, and teamwork.';
    } else if (industry === 'IT' && selected === 'Cybersecurity') {
      prompt = 'Focus on network security, encryption, and threat analysis.';
    } else if (industry === 'IT' && selected === 'Data Science') {
      prompt = 'Learn Python, statistics, machine learning, and big data tools.';
    } else if (industry === 'IT' && selected === 'UI/UX Design') {
      prompt = 'Work on wireframing, prototyping, and usability testing skills.';

    // Finance industry
    } else if (industry === 'Finance' && selected === 'Investment Banking') {
      prompt = 'Learn about financial markets, valuation methods, and corporate finance.';
    } else if (industry === 'Finance' && selected === 'Financial Analysis') {
      prompt = 'Develop skills in financial modeling, forecasting, and risk management.';
    } else if (industry === 'Finance' && selected === 'Accounting') {
      prompt = 'Strengthen your knowledge in GAAP/IFRS, bookkeeping, and auditing.';
    } else if (industry === 'Finance' && selected === 'FinTech') {
      prompt = 'Focus on blockchain, digital payments, and financial software development.';

    // Healthcare industry
    } else if (industry === 'Healthcare' && selected === 'Nursing') {
      prompt = 'Enhance your clinical skills and patient care techniques.';
    } else if (industry === 'Healthcare' && selected === 'Medical Research') {
      prompt = 'Focus on research methodologies and understanding the latest medical advancements.';
    } else if (industry === 'Healthcare' && selected === 'Pharmacy') {
      prompt = 'Study pharmacology, drug safety, and dispensing practices.';
    } else if (industry === 'Healthcare' && selected === 'Healthcare Management') {
      prompt = 'Learn about healthcare systems, hospital administration, and health policies.';

    } else {
      prompt = 'Qualification details coming soon...';
    }

    setMessages(prev => [...prev, { from: 'bot', text: prompt }]);
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

            {step === 2 && industry === 'IT' && (
              <select onChange={handleFieldChange}>
                <option value="">-- Select Field --</option>
                <option value="Software Engineering">Software Engineering</option>
                <option value="Cybersecurity">Cybersecurity</option>
                <option value="Data Science">Data Science</option>
                <option value="UI/UX Design">UI/UX Design</option>
              </select>
            )}

            {step === 2 && industry === 'Finance' && (
              <select onChange={handleFieldChange}>
                <option value="">-- Select Field --</option>
                <option value="Investment Banking">Investment Banking</option>
                <option value="Financial Analysis">Financial Analysis</option>
                <option value="Accounting">Accounting</option>
                <option value="FinTech">FinTech</option>
              </select>
            )}

            {step === 2 && industry === 'Healthcare' && (
              <select onChange={handleFieldChange}>
                <option value="">-- Select Field --</option>
                <option value="Nursing">Nursing</option>
                <option value="Medical Research">Medical Research</option>
                <option value="Pharmacy">Pharmacy</option>
                <option value="Healthcare Management">Healthcare Management</option>
              </select>
            )}

            {step >= 3 && field && (
              <div className="chat-summary">
                <small>Industry: {industry} | Field: {field}</small>
              </div>
            )}
          </div>

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
