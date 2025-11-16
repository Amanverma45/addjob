import React from 'react';
import '../Components/Style/Client.css';

const demoClients = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Facebook", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" },
  { name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" },
];

const Client = () => {
  return (
    <div className="client-container px-6 py-12 bg-gray-50 text-gray-800">
      <div className="heading-client text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Our Clients</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We proudly work with some of the top companies worldwide. Here are a few of our esteemed clients.
        </p>
      </div>

      <div className="client-logos flex flex-wrap justify-center gap-8">
        {demoClients.map((client, index) => (
          <div key={index} className="client-card bg-white shadow-md rounded-2xl p-6 flex items-center justify-center hover:shadow-xl transition">
            <img src={client.logo} alt={client.name} className="h-16 object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
