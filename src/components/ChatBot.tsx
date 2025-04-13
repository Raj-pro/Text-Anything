import React, { useState } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { companyInfo, products } from '../data/companyData';

interface Message {
  text: string;
  sender: 'bot' | 'user';
  image?: string;
}

interface ContactInfo {
  name: string;
  email: string;
  phone: string;
}

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! Welcome to ABC Lighting Corp. I'm your virtual assistant. How can I help you today?",
      sender: 'bot'
    }
  ]);
  const [input, setInput] = useState('');
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    name: '',
    email: '',
    phone: ''
  });

  const generateResponse = (userInput: string): Message[] => {
    const input = userInput.toLowerCase();
    const response: Message[] = [];

    // Check for business hours
    if (input.includes('hours') || input.includes('open')) {
      response.push({
        text: `Our hours of operation are:\nWeekdays: ${companyInfo.hours.weekdays}\nSaturday: ${companyInfo.hours.saturday}\nSunday: ${companyInfo.hours.sunday}`,
        sender: 'bot'
      });
    }
    // Check for location
    else if (input.includes('location') || input.includes('address')) {
      const locations = companyInfo.locations.map(loc => 
        `${loc.address}\nPhone: ${loc.phone}`
      ).join('\n\n');
      response.push({
        text: `We have two locations:\n${locations}`,
        sender: 'bot'
      });
    }
    // Check for specific products
    else if (input.includes('street light') || input.includes('streetlight')) {
      const product = products[0];
      response.push({
        text: `The ${product.name} is our premium street lighting solution.\n\nSpecifications:\n- Height: ${product.specs.height}\n- Power: ${product.specs.power}\n- Battery Life: ${product.specs.batteryLife}\n- Brightness: ${product.specs.lumens} lumens\n\nPrice: ${product.price}`,
        sender: 'bot'
      }, {
        text: "Here's what it looks like:",
        sender: 'bot',
        image: product.imageUrl
      });
    }
    else if (input.includes('driveway')) {
      const product = products[1];
      response.push({
        text: `The ${product.name} is perfect for residential driveways.\n\nSpecifications:\n- Height: ${product.specs.height}\n- Power: ${product.specs.power}\n- Battery Life: ${product.specs.batteryLife}\n- Brightness: ${product.specs.lumens} lumens\n\nPrice: ${product.price}`,
        sender: 'bot'
      }, {
        text: "Here's what it looks like:",
        sender: 'bot',
        image: product.imageUrl
      });
    }
    else if (input.includes('wall')) {
      const product = products[2];
      response.push({
        text: `The ${product.name} is our versatile wall-mounted solution.\n\nSpecifications:\n- Dimensions: ${product.specs.dimensions}\n- Power: ${product.specs.power}\n- Battery Life: ${product.specs.batteryLife}\n- Brightness: ${product.specs.lumens} lumens\n\nPrice: ${product.price}`,
        sender: 'bot'
      }, {
        text: "Here's what it looks like:",
        sender: 'bot',
        image: product.imageUrl
      });
    }
    // General product inquiry
    else if (input.includes('product') || input.includes('lights')) {
      response.push({
        text: "We offer three main product lines:\n\n1. SolarMax Pro Street Light - Perfect for commercial and municipal lighting\n2. PathBrite Solar Driveway Light - Ideal for residential driveways\n3. LumiWall Solar Security Light - Great for wall-mounted security lighting\n\nWhich would you like to know more about?",
        sender: 'bot'
      });
    }
    // Default response
    else {
      response.push({
        text: "I can help you with information about our products, business hours, and locations. What would you like to know?",
        sender: 'bot'
      });
    }

    response.push({
      text: "Is there anything else I can help you with?",
      sender: 'bot'
    });

    return response;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' as const };
    const newMessages = [...messages, userMessage];

    if (input.toLowerCase() === 'no') {
      setShowContactForm(true);
    } else {
      const botResponses = generateResponse(input);
      newMessages.push(...botResponses);
    }

    setMessages(newMessages);
    setInput('');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessages([...messages, {
      text: `Thank you ${contactInfo.name}! We'll reach out to you soon at ${contactInfo.email} or ${contactInfo.phone}.`,
      sender: 'bot'
    }]);
    setShowContactForm(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-blue-600 p-4 text-white flex items-center gap-2">
          <Bot className="w-6 h-6" />
          <h1 className="text-xl font-semibold">ABC Lighting Assistant</h1>
        </div>
        
        <div className="h-[500px] overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.sender === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {message.sender === 'user' ? (
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <p className="whitespace-pre-wrap">{message.text}</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Bot className="w-4 h-4" />
                      <p className="whitespace-pre-wrap">{message.text}</p>
                    </div>
                    {message.image && (
                      <img
                        src={message.image}
                        alt="Product"
                        className="rounded-lg max-w-full h-auto mt-2"
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {showContactForm ? (
          <form onSubmit={handleContactSubmit} className="p-4 border-t">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={contactInfo.name}
                  onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={contactInfo.email}
                  onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={contactInfo.phone}
                  onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white rounded-md p-2 hover:bg-blue-700 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}