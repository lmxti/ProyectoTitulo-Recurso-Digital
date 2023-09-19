import React from "react";
const NavBar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="images/Logo.png" alt="Logo" className="w-25 h-20 mr-2" />
        </div>
        <div className="flex items-center space-x-6">
          <a className="text-white font-bold text-xl" href="/">
            Inicio
          </a>
          <a className="text-white font-bold text-xl" href="/explorar">
            Explorar
          </a>
          <a className="text-white font-bold text-xl" href="/prueba">
            Prueba
          </a>
        </div>
        <div>
          <button className="px-6 py-3 text-white font-bold text-xl bg-blue-600 rounded-lg hover:bg-blue-700 hover:text-white">
            Empezar!
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
