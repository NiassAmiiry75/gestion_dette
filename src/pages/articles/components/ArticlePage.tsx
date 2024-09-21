// import React from "react"
export default function ArticlePage(){
    return(
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
        </div>
    )
}