import React from 'react';

const UtilisateurPage: React.FC = () => {
  return (
    <div className="user-page bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Gestion des Utilisateurs</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Nom d'utilisateur</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Rôle</th>
            <th className="px-4 py-2 border">Statut</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border">Imame Assane</td>
            <td className="px-4 py-2 border">imameassane@gmail.com</td>
            <td className="px-4 py-2 border">Administrateur</td>
            <td className="px-4 py-2 border">Non Actif</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Cheikh</td>
            <td className="px-4 py-2 border">cheikhniass@gmail.com</td>
            <td className="px-4 py-2 border">Administrateur</td>
            <td className="px-4 py-2 border">Non Actif</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Amadou Baila</td>
            <td className="px-4 py-2 border">amadoubaila@gmail.com</td>
            <td className="px-4 py-2 border">Administrateur</td>
            <td className="px-4 py-2 border">Actif</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Mouhamedoul Moustapha</td>
            <td className="px-4 py-2 border">mouhamadoulmoustapha@gmail.com</td>
            <td className="px-4 py-2 border">Administrateur</td>
            <td className="px-4 py-2 border">Actif</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Barham</td>
            <td className="px-4 py-2 border">barham@gmail.com</td>
            <td className="px-4 py-2 border">Administrateur</td>
            <td className="px-4 py-2 border">Actif</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UtilisateurPage;
