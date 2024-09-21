export default function ArticleListComponent(){
    return(
        // <h1>hello!</h1>
        <div className="product-list-1 bg-white rounded-lg shadow p-4 mb-4">
            <h2 className="text-xl font-bold mb-4">Lister les produits</h2>
            <div className="mb-4 flex flex-wrap gap-2">
                <button className="bg-red-500 text-white px-4 py-2">RUP</button>
                <button className="bg-red-300 text-gray-700 px-4 py-2">DIS</button>
                <button className="bg-red-300 text-gray-700 px-4 py-2">ALL</button>
            </div>
            <div className="flex mb-4 flex-wrap">
                <input type="text" placeholder="libelle" className="border rounded px-4 py-2 w-3/4"/>
                <button className="bg-blue-500 text-white px-4 py-2 rounded ml-4">OK</button>
            </div>
            <div className="overflow-x-auto">
            <table>
                <thead>
                    <tr className="bg-blue-500 text-white">
                        <th className="p-2 text-center">
                            <i className="fas fa-check-square"></i>
                        </th>
                        <th className="py-2 px-4 text-center">Article</th>
                        <th className="py-2 px-4 text-center">Prix</th>
                        <th className="py-2 px-4 text-center">Qte en Stock</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-2 text-center">
                        <input type="checkbox" name="article[]" value="1" className="form-checkbox rounded h-4 w-4 text-blue-600"/>
                        </td>
                        <td className="py-2 px-4 text-center">Chocolat</td>
                        <td className="py-2 px-4 text-center">2000</td>
                        <td className="py-2 px-4 text-center">5</td>
                    </tr>
                    
                </tbody>  
            </table>
        </div>
        <div className="flex justify-center mt-4">
            <button className="px-3 py-1 border rounded mr-1">2</button>
            <button className="px-3 py-1 border rounded ">&lt</button>
        </div>
        </div>
    );}