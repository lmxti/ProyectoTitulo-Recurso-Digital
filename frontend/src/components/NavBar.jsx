
import Link from 'next/link';

const NavBar = () => {

    
    
    return (
        <header className="bg-[#3A3F43]">
            <nav className="flex justify-between items-center w-[92%] mx-auto p-2">
                <div>
                    <img src="images/cabeza-panda-rojo.png" alt="Logo" className="w-16 cursor-pointer" />
                </div>
                <div
                    className="nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
                <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                    <li>
                        <Link className="text-white" href="/">Inicio</Link>
                    </li>
                </ul>
            </div>
                <div>
                    <Link href="/Etapas">
                        <button className="bg-primary hover:bg-emerald-500 rounded-full text-white px-5 py-2">
                            Comenzar
                        </button>
                    </Link>
                </div>
            </nav>
        </header>



        // <nav className="bg-blue-500 p-2">
        //     <div className="container mx-auto flex justify-between items-center">
        //         <div className="flex items-center">
        //             <img src="images/Logo.png" alt="Logo" className="w-20 h-fit mr-2" />
        //         </div>
        //         <div className="flex items-center space-x-6">
        //             <a className="text-white font-bold text-xl" href="/">
        //                 Inicio
        //             </a>
        //             <a className="text-white font-bold text-xl" href="/lessonsStages">
        //                 Explorar
        //             </a>
        //         </div>
        //         <div>
                    
        //         <a href="/Etapa/1/0">Empezar</a>
        //         </div>
        //     </div>
        // </nav>
    );
};

export default NavBar;
