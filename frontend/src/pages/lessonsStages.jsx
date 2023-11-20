import React from 'react'
import NavBar from '@/components/NavBar';


const etapas = [
  {
    nombre: "Etapa 1",
    descripcion: "Introducción a la programación",
    imagen: "/images/java-logo.png"
  },
  {
    nombre: "Etapa 2",
    descripcion: "Estructuras de control y funciones",
    imagen: "/images/java-logo.png"
  },
  {
    nombre: "Etapa 3",
    descripcion: "Estructuras de control y funciones",
    imagen: "/images/java-logo.png"
  },
  {
    nombre: "Etapa 4",
    descripcion: "Arrays y matrices",
    imagen: "/images/java-logo.png"
  },
  {
    nombre: "Etapa 5",
    descripcion: "Conceptos de la POO",
    imagen: "/images/java-logo.png"
  },
  {
    nombre: "Etapa 6",
    descripcion: "Conceptos avanzados de la POO",
    imagen: "/images/java-logo.png"
  },
  {
    nombre: "Etapa 7",
    descripcion: "Manejo de excepciones",
    imagen: "/images/java-logo.png"
  },
  {
    nombre: "Etapa 8",
    descripcion: "Entrada/Salida de archivos",
    imagen: "/images/java-logo.png"
  },
  {
    nombre: "Etapa 9",
    descripcion: "Programación GUI",
    imagen: "/images/java-logo.png"
  }
];



export const lessonsStages = () => {
  return (
    <>
      <NavBar/>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
            <h2 className='text-2xl font-bold tracking-tight text-black text-center'>Etapas</h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 text-black flex-col rounded-xl">

              { etapas.map((etapa) => (
                <div key={etapa.id} className='relative flex w-full max-w-[26rem] flex-col rounded-xl bg-slate-500 bg-clip-border text-gray-700 shadow-lg'>
                  {/* Imagen de etapa */}
                  <div className='relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border shadow-lg shadow-blue-gray-500/40'>
                    <img className='bg-white' src={etapa.imagen}></img>
                    <div
                      className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/20">
                    </div>
                  </div>

                  <div className='p-6 text-white'>
                    {/* Titulo de etapa */}
                    <div className='mb-3 flex items-center justify-between'>
                        <h5 className='block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased'>{etapa.nombre}</h5>
                    </div>
                    {/* Icono al lado de titulo */}
                    <p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                      {etapa.descripcion}
                    </p>
                  </div>
                  <div className='p-6 pt-3'>
                    <button className='block w-full select-none rounded-lg bg-orange-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'>
                      Ver etapa
                    </button>
                  </div>
                </div>
                ))
              }
          </div>
        </div>
    </>
  )
}

export default lessonsStages;