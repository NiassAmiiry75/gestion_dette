export default function HeaderSecure(){
    return(
      <header className="flex flex-col sm:flex-row justify-between items-center 
      bg-white shadow-md px-4 py-2 header">
        <button id="sidebarToggle" className="sm:hidden text-gray-500 mb-2 sm:mb-0">
          <svg className="w-8 h-8" fill="none" stroke="currentColor"
          viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" strke-width="2" d="M4 6h16M4 18h16"></path>
          </svg>
        </button>
        <div className="search-bar flex item-center w-full sm:w-1/2 lg:w-3/5 mb-2 sm:mb-0">
          <input type="text" placeholder="Rechercher dans votre boutique..."
          className="w-full px-4 py-2 rounded-full border border-gray-300
          focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm sm:text-base"/>
        </div>
        <button className="header-user flex items-center mt-2 sm:mt-0"
        data-prover-target="popover-bottom"
        data-popover-placement="bottom" type="button"
        data-popover-trigger="click">
          <img src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2" alt="photoUtilisateur"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-blue-500"/>
             <div className="pl-2 sm:pl-4 py-1 ml-2">
              <p className="text-gray-700 text-xs sm:text-sm font-semibold">Mouhamed R.B.B</p>
              <p className="text-gray-700 text-xs sm:text-sm font-semibold">Wane</p>
             </div>
        </button>
        <div data-popover id="popover-bottom" role="tooltip" className="absolute rigth-2 mt-2 w-48 bg-white rounded-md shadow-lg py-1 
        z-10 invisible" style={{top:'3rem'}}>
          <div className="px-4 py-2 text-center">
            <img className="w-16 h-16 rounded-full mx-auto"
            src="Https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2" alt="User avatar"/>
            <p className="mt-2 font-semibold">Mouhamed R.B.B</p>
          </div>
          <a href="../client/profile.html" className="block px-4 py-2 text-sm text-center text-gray-700 hover:bg-gray100">MODIFIER</a>
          <a href="../auth/login.html" className="block px-4 py-2 text-sm text-center text-gray-700 hover:bg-gray100">DECONNEXION</a>
        </div>
        <div data-popover id="popover-bottom" role="tooltip" className="absolute rigth-2 mt-2 w-48 bg-white rounded-md shadow-lg py-1 
        z-10 invisible" style={{top:'3rem'}}>
          <div className="px-4 py-2 text-center">
            <img className="w-16 h-16 rounded-full mx-auto"
            src="Https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2" alt="User avatar"/>
            <p className="mt-2 font-semibold">OUSSEYNOU DIEDHIOU </p>
          </div>
          <a href="../client/profile.html" className="block px-4 py-2 text-sm text-center text-gray-700 hover:bg-gray100">MODIFIER</a>
          <a href="../auth/login.html" className="block px-4 py-2 text-sm text-center text-gray-700 hover:bg-gray100">DECONNEXION</a>

          </div>
      </header>
    )
}