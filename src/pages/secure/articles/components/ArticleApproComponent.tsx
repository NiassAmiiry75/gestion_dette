export default function ArticleApproComponent(){
    return(
        // <h1>hello!</h1>
        <div className="product-list-2 bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-center mb-4 flex-wrap">
                <h3 className="text-xl font-bold mb-2 sm:mb-0">Pannier Appro</h3>
            </div>
            <div className="mb-4 flex gap-2 justify-end">
                <button className="bg-red-500 text-white text-xl px-4 py-2">Total:RUP</button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="bg-blue-500 text-white">
                            <th className="py-2 px-4 text-center">ARTICLE</th>
                            <th className="py-2 px-4 text-center">PRIX</th>
                            <th className="py-2 px-4 text-center">QUANTITE</th>
                            <th className="py-2 px-4 text-center">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 text-center">24/07/2024</td>
                            <td className="py-2 px-4 text-center">20.000</td>
                            <td className="py-2 px-4 text-center">
                                <button className="px-2 py-1 border rounded">-</button>
                                <span className="mx-2">1</span>
                                <button className="px-2 py-1 border rounded">+</button>
                            </td>
                            <td className="py-2 px-4 text-center">
                                <button className="text-red-500">
                                    <i className="fas fa-trash"></i>Supprimer
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="w-full h-12 flex justify-between mt-4 flex-wrap">
                <div className="flex justify-center mt-4 mb-2 sm:mb-0">
                <button  className="px-3 py-1 border rounded mr-1">&lt;</button>
                <button  className="px-3 py-1 border rounded mr-1 bg-blue-500">1</button>
                    <button  className="px-3 py-1 border rounded mr-1">2</button>
                    <button className="px-3 py-1 border rounded">&lt;</button>
                </div>
                <button className="bg-blue-500 text-white px-3 rounded mt-2 sm:mt-0">SAVE</button>
            </div>
        </div>
    );}