import React from 'react';

const DettePage: React.FC = () => {
  return (
    <div className="debt-page bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Gestion des Dettes</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Nom du Client</th>
            <th className="px-4 py-2 border">Montant dû</th>
            <th className="px-4 py-2 border">Date Limite</th>
            <th className="px-4 py-2 border">Statut</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border">John Doe</td>
            <td className="px-4 py-2 border">$500</td>
            <td className="px-4 py-2 border">2024-10-10</td>
            <td className="px-4 py-2 border">En attente</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Cheikh Niass</td>
            <td className="px-4 py-2 border">$800</td>
            <td className="px-4 py-2 border">2024-06-10</td>
            <td className="px-4 py-2 border">En Cours</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Baila Wane</td>
            <td className="px-4 py-2 border">$500</td>
            <td className="px-4 py-2 border">2024-03-10</td>
            <td className="px-4 py-2 border">Damande Annulé</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Imam Thiam</td>
            <td className="px-4 py-2 border">$1000</td>
            <td className="px-4 py-2 border">2024-01-10</td>
            <td className="px-4 py-2 border">En Succés</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DettePage;
