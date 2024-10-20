import React from 'react';
import { Phone, MessageCircle, Github, Disc } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Information</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center">
              <Phone className="mr-2 text-blue-600" size={20} />
              <span>WhatsApp: <a href="https://wa.me/6283111515287" className="text-blue-600 hover:underline">+62 83111515287</a></span>
            </li>
            <li className="flex items-center">
              <MessageCircle className="mr-2 text-blue-600" size={20} />
              <span>Telegram: <a href="https://t.me/demsdivo" className="text-blue-600 hover:underline">@demsdivo</a></span>
            </li>
            <li className="flex items-center">
              <Github className="mr-2 text-blue-600" size={20} />
              <span>GitHub: <a href="https://github.com/demsdivo11" className="text-blue-600 hover:underline">demsdivo11</a></span>
            </li>
            <li className="flex items-center">
              <Disc className="mr-2 text-blue-600" size={20} />
              <span>Discord: dems.kom and demsm.kom</span>
            </li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Send us a message</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 text-gray-700">Name</label>
              <input type="text" id="name" className="w-full px-3 py-2 border rounded-md text-gray-800" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-gray-700">Email</label>
              <input type="email" id="email" className="w-full px-3 py-2 border rounded-md text-gray-800" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2 text-gray-700">Message</label>
              <textarea id="message" rows={4} className="w-full px-3 py-2 border rounded-md text-gray-800" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;