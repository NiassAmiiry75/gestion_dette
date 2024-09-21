import React, { useState } from 'react';

const DemandePage: React.FC = () => {
  // Utilisation d'un état pour simuler les demandes de dette
  const [demandes, setDemandes] = useState([
    { id: 1, clientName: 'Cheikh Niass', amount: 500, dueDate: '2024-10-10', status: 'En attente' },
    { id: 2, clientName: 'Barham Cisse', amount: 400, dueDate: '2024-09-20', status: 'Payée' },
    { id: 3, clientName: 'Mouhamadoul Moustapha Niass', amount: 600, dueDate: '2024-09-20', status: 'Payée' },
    { id: 4, clientName: 'Adja Khadijatou Niass', amount: 700, dueDate: '2024-09-20', status: 'Payée' },
    { id: 5, clientName: 'Oumoukalsoum Cisse', amount: 800, dueDate: '2024-09-20', status: 'Payée' },
    { id: 6, clientName: 'Rokhayatou Cisse', amount: 900, dueDate: '2024-09-20', status: 'Payée' }
  ]);

  return (
    <div className="debt-page bg-gray-50 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Gestion des Dettes</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {demandes.map(demande => (
          <div key={demande.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Client : {demande.clientName}</h2>
            <p className="text-gray-600 mb-2">Montant dû : <span className="text-red-500">${demande.amount}</span></p>
            <p className="text-gray-600 mb-2">Date limite : <span className="text-gray-800">{demande.dueDate}</span></p>
            <p className={`font-bold ${demande.status === 'En attente' ? 'text-yellow-500' : 'text-green-500'}`}>
              Statut : {demande.status}
            </p>
            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
              Voir les détails
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DemandePage;
