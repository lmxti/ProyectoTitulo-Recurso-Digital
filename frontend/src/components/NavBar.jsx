import React from "react";
const NavBar = () => {
    return (
        <nav className="bg-blue-500 p-1">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img src="images/Logo.png" alt="Logo" className="w-20 h-fit mr-2" />
                </div>
                <div className="flex items-center space-x-6">
                    <a className="text-white font-bold text-xl" href="/">
                        Inicio
                    </a>
                    <a className="text-white font-bold text-xl" href="/">
                        Explorar
                    </a>
                    <a className="text-white font-bold text-xl" href="/Leccion/1">
                        Leccion 1
                    </a>
                    <a className="text-white font-bold text-xl" href="/Leccion/2">
                        Leccion 2
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
