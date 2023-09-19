import React from "react";
import Image from "next/image";
import CodingSection from "@/components/CodingSection";

const prueba = () => {
  return (
    <div className="grid grid-cols-2 gap-4 m-5">

      {/* Exercise Section */}
      <section className="bg-eastBay rounded-lg">
        <h2 className="rounded-t-lg p-2 text-2xl font-thin">Enunciado</h2>
        <div className="h-[450px] overflow-y-scroll p-[5px]">
          <img src="/info.png" className="w-full rounded-lg" />
        </div>
      </section>

      {/* Coding Section */}
      <CodingSection />

      {/* Instructions Section */}
      <section className="bg-white rounded-lg">
      <h2 className="bg-eastBay rounded-t-lg p-2 text-2xl font-thin">Instrucciones</h2>
        <div className="h-[400px] overflow-y-scroll text-black">
          <p>Contenido de las instrucciones</p>
        </div>
      </section>

      {/* Results section */}
      <section className="bg-white rounded-lg">
      <h2 className="bg-eastBay rounded-t-lg p-2 text-2xl font-thin">Resultados</h2>
        <div className="bg-white overflow-y-scroll text-black">
        <p>Contenido de los resultados</p>
        </div>
      </section>
    </div>
  );
};

export default prueba;
