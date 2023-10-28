import React from "react";
const NavBar = () => {
    return (
        <nav className="bg-blue-500 p-2">
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
                </div>
                <div>
                    
                <a href="/Etapa/1/0">Empezar</a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
