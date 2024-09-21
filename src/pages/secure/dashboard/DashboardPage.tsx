import CardComponent from "./components/card/CardComponent"
import datasCard from "./data"
export default function DashboardPage(){
    return(
       <main className="mt-8 mx-4 md:mr-8 rounded-xl bg-white p-4 shadow-sm flex flex-col">
        <div className="p-8" style={{background:'linear-gradient(to right, #2b6cb0,#2d3748'}}>
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-4 gap-6"
            style={{height:"80%"}}>
                {
                    datasCard.map((card,index)=>
                    <CardComponent key={index} data={card}/>
                )
                }
            </div>
        </div>
        <div className="product-lists mt-2">
            <div className="product-list-2 bg-white rounded-lg shadow p-4 mb-4">
                <h3 className="text-xl font-bold mb-4">Lister les produits</h3>
                <div className="overflow-x-auto">
                    <div className=" overflow-x-auto">
                        <table className="bg-white shadow-lg rounded-lg w-full">
                            <thead>
                              <tr>
                                <th className="py-3 px-6 text-center">Nom</th>
                                <th className="py-3 px-6 text-center">Prenom</th>
                                <th className="py-3 px-6 text-center">Telephone</th>
                                <th className="py-3 px-6 text-center">Montant Dette</th>
                              </tr>
                            </thead>
                            <tbody>
                             <tr>
                                <td className="py-3 px-6 text-center">John</td>
                                <td className="py-3 px-6 text-center">Doe</td>
                                <td className="py-3 px-6 text-center">77 123 45 67</td>
                                <td className="py-3 px-6 text-center">4500 CFA</td>
                             </tr>
                             <tr>
                                <td className="py-3 px-6 text-center">Amina</td>
                                <td className="py-3 px-6 text-center">Diop</td>
                                <td className="py-3 px-6 text-center">78 1987 65 43</td>
                                <td className="py-3 px-6 text-center">3500 CFA</td>
                             </tr>
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="product-list-1 bg-white rounded-lg shadow p-4 mb-4">
                <h3 className="text-base font-bold mb-4">Lister les Produits</h3>
                <div className="overflow-x-auto">
                <div className="overflow-x-auto">
                    <table className="bg-white shadow-lg rounded-lg w-full">
                        <thead>
                            <tr>
                                <th className="py-3 px-6 text-center">Articles</th>
                                <th className="py-3 px-6 text-center">Quantite Restants</th>
                                <th className="py-3 px-6 text-center">Prix</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-3 px-6 text-center">Savon</td>
                                <td className="py-3 px-6 text-center">0</td>
                                <td className="py-3 px-6 text-center">300 CFA</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-6 text-center">Shampooing</td>
                                <td className="py-3 px-6 text-center">2</td>
                                <td className="py-3 px-6 text-center">2020 CFA</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
       </main>
    )
}