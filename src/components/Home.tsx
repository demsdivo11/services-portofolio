import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import { Code, Cloud, Lock, Globe, Bot } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "CODER GTPS",
    icon: <Code className="w-12 h-12 text-blue-600 mb-4" />,
    prices: [
      { duration: "7 HARI", price: "15K" },
      { duration: "2 MINGGU", price: "25K" },
      { duration: "1 BULAN", price: "50K" },
      { duration: "6 BULAN", price: "100K" }
    ],
    description: "REQ FITUR, FIX BUG, ETC"
  },
  {
    id: 2,
    title: "ONSUPERMAIN GTPS (CDN)",
    icon: <Cloud className="w-12 h-12 text-blue-600 mb-4" />,
    prices: [
      { duration: "1 BULAN", price: "10K" },
      { duration: "2 BULAN", price: "15K" },
      { duration: "3 BULAN", price: "20K" },
      { duration: "6 BULAN", price: "50K" }
    ],
    description: "CDN 24 NEGARA, ANTI DDOS, FAST UPDATING, ETC"
  },
  {
    id: 3,
    title: "ADD BACKDOOR IN GTPS SOURCE",
    icon: <Lock className="w-12 h-12 text-blue-600 mb-4" />,
    prices: [
      { type: "WEBHOOK DISCORD", price: "30K" },
      { type: "BOT DISCORD", price: "50K" }
    ]
  },
  {
    id: 4,
    title: "WEBSITE GTPS",
    icon: <Globe className="w-12 h-12 text-blue-600 mb-4" />,
    prices: [
      { type: "NO BACKEND", price: "30K" },
      { type: "WITH BACKEND", price: "50K" }
    ],
    description: "CAN REQ DESIGN, UNLI PAGE, ETC"
  },
  {
    id: 5,
    title: "BOT DISCORD/TELEGRAM",
    icon: <Bot className="w-12 h-12 text-blue-600 mb-4" />,
    prices: [
      { type: "SIMPLE BOT", price: "30K" },
      { type: "INTERAKTIF BOT", price: "50K" }
    ],
    description: "CAN REQUEST COMMAND, FITUR"
  }
];

const Home: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-fade-in');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top <= windowHeight * 0.75) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 text-blue-600">WELCOME TO DEMS SERVICE</h1>
        <p className="text-2xl mb-8 text-gray-700">NEED SERVICE FOR GTPS OR ETC?</p>
        <Link to="services" smooth={true} duration={500} className="btn btn-primary">
          View Services
        </Link>
      </section>

      <section id="services" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-md p-6 scroll-fade-in">
            {service.icon}
            <h2 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h2>
            <ul className="mb-4">
              {service.prices.map((price, index) => (
                <li key={index} className="mb-2 text-gray-700">
                  <span className="font-semibold">{price.duration || price.type}:</span> {price.price}
                </li>
              ))}
            </ul>
            {service.description && <p className="text-sm text-gray-600">{service.description}</p>}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;