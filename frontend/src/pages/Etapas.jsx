import React, { useEffect } from 'react'
import NavBar from '@/components/NavBar';
import { useUser } from '../contexts/UserContext';

import Link from 'next/link';

export const lessonsStages = () => {
    const { stagesInfo, getUser } = useUser()

    useEffect(() => {
        if (!stagesInfo) {
            getUser()
        }
    }, [])

    return (
        <>
            <NavBar />
            <div className="mx-[5vw] px-2 py-10 sm:px-6 sm:py-14  lg:px-8 ">
                <div className='text-center'>
                    <h2 className='mb-4 text-3xl font-bold lg:text-5xl '>
                        ETAPAS
                    </h2>
                    <p className="">
                        Bienvenido a nuestra guía de aprendizaje en programación orientada a objetos. Explora cada etapa para fortalecer tus habilidades.
                    </p>
                </div>

                {stagesInfo &&
                    <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-10 text-black flex-col rounded-xl">
                        {stagesInfo.map((etapa, index) => (<StageCard key={index} etapa={etapa} index={index} style={"bg-slate-100"} />))}
                    </div>
                }

            </div>
        </>
    )
}


function StageCard({ etapa, style, index }) {
    return (
        <Link href={`/Etapa/${index}/0`}>
            <div className={`rounded-lg cursor-pointer h-full opacity-80 overflow-clip  transition transform duration-200 ease-in-out hover:opacity-100 hover:scale-110 shadow-sm ${style}`}>
                <div className="absolute right-0 left-auto">

                    <div className="absolute w-0 h-0 right-0 z-[-1] border-t-[120px] border-l-[120px] border-t-accent border-l-transparent" />
                    <h1 className=' text-white  font-thin text-[30px] w-[70px] h-[80px] mt-[10px] text-center'>
                        {Math.round(etapa.progreso)}%
                    </h1>

                </div>

                <div className='p-6'>
                    <div className="overflow-hidden rounded-lg  relative z-[-2]">
                        <img className="w-full  rounded-lg h-auto mb-[10%]"
                            src={etapa.imagen}
                            alt={etapa.nombre}
                        />
                    </div>
                    <h3 className="pt-5 text-[18px] font-bold text-slate-600 block">
                        {etapa.nombre}
                    </h3>

                    <p className="font-normal text-slate-400 text-md duration-300 transition text-justify hover:text-accent mt-2">
                        {etapa.descripcion}
                    </p>
                </div>

            </div>
        </Link>
    );
}

export default lessonsStages;