import React, { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [step, setStep] = useState(0);
  const [userData, setUserData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const chatContainerRef = useRef(null);

  const botMessages = [
    { text: "Welcome to our site, if you need help simply reply to this message, we are online and ready to help.", type: 'bot' },
    { text: "Great! What is your name?", type: 'bot' },
    { text: "Thanks! What is your phone number?", type: 'bot' },
    { text: "Perfect. Please leave a short message or feedback.", type: 'bot' },
    { text: "Got it. Can we send this information to the company?", type: 'bot' },
    { text: "Thank you! We have sent your request. Someone will be in touch shortly.", type: 'bot' },
    { text: "No problem! Have a great day.", type: 'bot' },
    { text: "Thank you for your feedback!", type: 'bot' },
  ];

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([botMessages[0]]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);


  const handleUserInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = (messageText) => {
    const text = messageText.trim();
    if (!text) return;

    const newUserMessage = { text, type: 'user' };
    setMessages(prev => [...prev, newUserMessage]);
    setUserInput('');

    setTimeout(() => processUserResponse(text), 500);
  };

  const handleQuickReply = (reply) => {
    const newUserMessage = { text: reply, type: 'user' };
    setMessages(prev => [...prev, newUserMessage]);
    setTimeout(() => processUserResponse(reply), 500);
  };

  const processUserResponse = (response) => {
    let nextBotMessage = null;

    switch (step) {
      case 0: // "Would you like to get a quote?"
        if (response.toLowerCase() === 'yes') {
          nextBotMessage = botMessages[1];
          setStep(1);
        } else {
          nextBotMessage = botMessages[6];
          setStep(99); // End conversation
        }
        break;
      case 1: // "What is your name?"
        setUserData(prev => ({ ...prev, name: response }));
        nextBotMessage = botMessages[2];
        setStep(2);
        break;
      case 2: // "What is your phone number?"
        setUserData(prev => ({ ...prev, phone: response }));
        nextBotMessage = botMessages[3];
        setStep(3);
        break;
      case 3: // "Please leave a short message or feedback."
        setUserData(prev => ({ ...prev, message: response }));
        nextBotMessage = botMessages[4];
        setStep(4);
        break;
      case 4: // "Can we send this information?"
        if (response.toLowerCase() === 'yes') {
          // Add a "sending..." message for better UX
          setMessages(prev => [...prev, { text: 'Sending your request...', type: 'bot' }]);

          const templateParams = {
            name: userData.name,
            phone: userData.phone,
            message: userData.message,
          };

          // Replace with your actual EmailJS credentials
          const serviceID = 'service_19gzj3c';
          const templateID = 'template_yhey6tr';
          const publicKey = 'XL7fCY_RL7PSOWLBv';
          
          if (window.emailjs) {
            window.emailjs.send(serviceID, templateID, templateParams, publicKey)
              .then((result) => {
                  console.log('Email successfully sent!', result.text);
                  // Replace the "sending..." message with the success message
                  setMessages(prev => {
                      const newMessages = [...prev];
                      newMessages[newMessages.length - 1] = botMessages[5];
                      return newMessages;
                  });
              }, (error) => {
                  console.error('Failed to send email.', error.text);
                   // Replace the "sending..." message with an error message
                  setMessages(prev => {
                      const newMessages = [...prev];
                      newMessages[newMessages.length - 1] = { text: "Sorry, there was an error sending your request. Please try again later.", type: 'bot' };
                      return newMessages;
                  });
              });
          } else {
              console.error('EmailJS script has not loaded yet.');
              setMessages(prev => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1] = { text: "Sorry, the email service is unavailable right now. Please try again later.", type: 'bot' };
                    return newMessages;
              });
          }


          setStep(99); // End conversation
          return; // Exit here because the async operation will handle the next message
        } else {
          nextBotMessage = botMessages[7];
        }
        setStep(99); // End conversation
        break;
      default:
        break;
    }

    if (nextBotMessage) {
      setMessages(prev => [...prev, nextBotMessage]);
    }
  };

  return (
    <>
      {/* Chatbot Window */}
      <div className={`fixed bottom-24 right-4 sm:right-8 w-80 sm:w-96 h-[60vh] sm:h-[70vh] bg-white rounded-lg shadow-2xl z-50 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="text-lg font-semibold">RISE-N-GRIND TRUCKING</h3>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div ref={chatContainerRef} className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} mb-3`}>
                <div className={`px-4 py-2 rounded-2xl max-w-[75%] ${msg.type === 'user' ? 'bg-blue-500 text-white rounded-br-none' : 'bg-gray-200 text-gray-800 rounded-bl-none'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {step === 0 && messages.length === 1 && (
                <div className="flex justify-center space-x-2 mt-4">
                    <button onClick={() => handleQuickReply('Yes')} className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors">Yes</button>
                    <button onClick={() => handleQuickReply('No')} className="bg-gray-300 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-400 transition-colors">No</button>
                </div>
            )}
             {step === 4 && (
                <div className="flex justify-center space-x-2 mt-4">
                    <button onClick={() => handleQuickReply('Yes')} className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors">Yes, send it</button>
                    <button onClick={() => handleQuickReply('No')} className="bg-gray-300 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-400 transition-colors">No, cancel</button>
                </div>
            )}
          </div>

          {/* Input */}
          {step > 0 && step < 4 && (
            <div className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
              <div className="flex">
                <input
                  type="text"
                  value={userInput}
                  onChange={handleUserInputChange}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(userInput)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button onClick={() => handleSendMessage(userInput)} className="bg-blue-600 text-white px-5 py-2 rounded-r-full hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 sm:right-8 bg-blue-600 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center z-50 hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        aria-label="Open chat"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
         <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 absolute transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </>
  );
};

// Main App component to render the Chatbot
const App = () => {
  // FIX: Dynamically load the EmailJS script when the app mounts
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.async = true;

    document.head.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="font-sans antialiased text-gray-900 bg-gray-100">
      {/* Your existing website content can go here */}
      
      <Chatbot />
    </div>
  );
}


export default App;

