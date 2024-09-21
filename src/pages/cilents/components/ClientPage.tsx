import React from 'react';

const ClientPage: React.FC = () => {
  return (
    <div className="client-page bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Informations du Client</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700">Nom</label>
          <input 
            type="text" 
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Entrez le nom du client"
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input 
            type="email" 
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Entrez l'email du client"
          />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Soumettre
        </button>
      </form>
    </div>
  );
};

export default ClientPage;
