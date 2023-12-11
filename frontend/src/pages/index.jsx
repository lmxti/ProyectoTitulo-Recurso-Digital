import React from "react";
import NavBar from '@/components/NavBar';

const index = () => {
    return (
        <>
            <NavBar />
            <main>
                <section className="flex flex-wrap items-center  font-sans px-4 mx-auto w-full lg:max-w-screen-lg sm:max-w-screen-sm md:max-w-screen-md pb-20">
                    {/* Columna 1 */}
                    <div className="px-3 w-full lg:w-2/5">
                        <div
                            className="mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:max-w-md lg:text-left">
                            <h2 className="mb-4 text-3xl font-bold text-left lg:text-5xl">
                                Recursos digitales

                                <span className="text-5xl text-orange-500 leading-relaxeds" > 
                                    {"\n"}Aprendiendo a Programar
                                </span>

                            </h2>

                            <p className="visible mx-0 mt-3 mb-0 text-sm leading-relaxed text-left text-slate-400">
                                Introduccion a la programación y la POO en Java de manera visual e interactiva.
                            </p>
                        </div>

                        <div className="text-center lg:text-left">
                            <a className="block visible py-4 px-8 mb-4 text-xs font-semibold tracking-wide leading-none text-white bg-orange-500 transition duration-700 ease-in-out hover:bg-amber-700 hover:text-black rounded cursor-pointer sm:mr-3 sm:mb-0 sm:inline-block" >
                                Comenzar
                            </a>

                            <a className="block visible py-4 px-8 text-xs font-semibold leading-none bg-white transition duration-700 ease-in-out hover:bg-slate-900 hover:text-white  rounded border border-solid cursor-pointer sm:inline-block border-slate-200 text-slate-500"
                            >Más información
                            </a >
                        </div>
                    </div>

                    {/* Columna 2 */}
                    <div className="px-3 mb-12 w-full lg:mb-0 lg:w-3/5">
                        <div className="flex justify-center items-center">
                            <img src="/images/panda-rojo.png" alt="" />
                        </div>
                    </div>
                </section>

                {/* Parallax background*/}
                <section
                    className="flex-col w-full h-[500px] bg-cover bg-fixed bg-center flex justify-center items-center bg-[url('/images/wallpaper4.jpg')]" >
                    <h1 className="text-white text-5xl font-semibold mt-20 mb-20 text-center">
                        Aprende a programar
                    </h1>
                    <p className="text-center max-w-4xl mx-auto px-4">
                        En la actualidad, aprender a programar y comprender conceptos de programación orientada a objetos
                        puede ser una tarea dificil y compleja para los estudiantes, especialmente para aquellos que
                        no tienen experiencia previa y no han podido desarrollar un pensamiento programatico.
                    </p>

                    <span className="text-center font-bold my-10 text-white/90">
                        <a href="https://www.java.com/es/"
                            target="_blank"
                            className="text-white/90 hover:text-white">
                            Java - Sitio Oficial
                        </a>

                        <hr className="my-4" />
                    {/* 
                        <a href="#"
                            target="_blank"
                            className="text-white/90 hover:text-white">
                            Enlace en blanco
                        </a>

                        <hr className="my-4" /> 
                    */}

                    </span>

                </section>

                {/* Sección 1 */}
                <section className="p-20 space-y-8">
                    <h1 className="text-4xl text-center my-10">Habilidades cognitivas</h1>
                    <p className="text-center max-w-3xl mx-auto px-4">
                        La investigación en educación y psicología cognitiva sugiere que los estudiantes hoy en día
                        presentan un perfil de aprendizaje visual, es decir, que aprenden mejor cuando se les presenta
                        la información de manera visual y gráfica. Por lo tanto, el objetivo de este recurso digital es
                        brindar una experiencia de aprendizaje visual e interactiva para que los estudiantes puedan
                        comprender los conceptos de programación orientada a objetos de manera más sencilla y
                        entretenida.
                    </p>
                    <div className="max-w-screen-md mx-auto text-center">

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-black">
                            {/* Card 1 */}
                            <div className="bg-white rounded-md overflow-hidden shadow-lg">
                                <img className="h-[300px] object-contain" src="/images/habilidadesCognitivas/atencion.png" alt="" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">Atención</div>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white rounded-md overflow-hidden shadow-lg">
                                <img className="h-[300px] object-contain" src="/images/habilidadesCognitivas/memoria.png" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">Memoria</div>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white rounded-md overflow-hidden shadow-lg">
                                <img className="h-[300px] object-contain" src="/images/habilidadesCognitivas/razonamiento.png" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">Razonamiento</div>

                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className="bg-white rounded-md overflow-hidden shadow-lg">
                                <img className="h-[300px] object-contain" src="/images/habilidadesCognitivas/pensamientoCritico.png" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">Pensamiento crítico</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </>
    );
};

export default index;
