import React from 'react'
import NavBar from '@/components/NavBar';

export const lessonsStages = () => {
  return (
    <>
    <NavBar />
    <div className="flex justify-center">
      <div className="grid grid-cols-5 m-4 gap-4">
        <section className="bg-eastBay flex flex-col justify-center items-center p-2">
          <div className="w-[300px] h-[300px] bg-white ">
            <img
              src="/images/java-logo.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-2xl font-thin rounded-t-lg">Lección 1</h1>
          <div>
            <p>Introduccion a la programacion</p>
          </div>
        </section>

        <section className="bg-eastBay flex flex-col justify-center items-center">
          <div className="w-[300px] h-[300px] bg-white ">
            <img
              src="/images/java-logo.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-2xl font-thin rounded-t-lg">Lección 3</h1>
          <div>
            <p>Estructuras de control y funciones</p>
          </div>
        </section>

        <section className="bg-eastBay flex flex-col justify-center items-center">
          <div className="w-[300px] h-[300px] bg-white ">
            <img
              src="/images/java-logo.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-2xl font-thin rounded-t-lg">Lección 4</h1>
          <div>
            <p>Arrays y matrices</p>
          </div>
        </section>

        <section className="bg-eastBay flex flex-col justify-center items-center">
          <div className="w-[300px] h-[300px] bg-white p-2">
            <img
              src="/images/java-logo.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-2xl font-thin rounded-t-lg">Lección 6</h1>
          <div>
            <p>Conceptos de la POO</p>
          </div>
        </section>

        <section className="bg-eastBay flex flex-col justify-center items-center">
          <div className="w-[300px] h-[300px] bg-white p-2">
            <img
              src="/images/java-logo.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-2xl font-thin rounded-t-lg">Lección 7</h1>
          <div>
            <p>Conceptos avanzados de la POO</p>
          </div>
        </section>

        <section className="bg-eastBay flex flex-col justify-center items-center">
          <div className="w-[300px] h-[300px] bg-white p-2">
            <img
              src="/images/java-logo.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-2xl font-thin rounded-t-lg">Lección 8</h1>
          <div>
            <p>Manejo de excepciones</p>
          </div>
        </section>

        <section className="bg-eastBay flex flex-col justify-center items-center">
          <div className="w-[300px] h-[300px] bg-white p-2">
            <img
              src="/images/java-logo.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-2xl font-thin rounded-t-lg">Lección 9</h1>
          <div>
            <p>Entrada/Salida de archivos</p>
          </div>
        </section>

        <section className="bg-eastBay flex flex-col justify-center items-center">
          <div className="w-[300px] h-[300px] bg-white p-2">
            <img
              src="/images/java-logo.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-2xl font-thin rounded-t-lg">Lección 10</h1>
          <div>
            <p>Programación GUI</p>
          </div>
        </section>
      </div>
    </div>
    </>
  )
}

export default lessonsStages;