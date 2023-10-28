// <--------------------------------HOOKS REACT----------------------------------------->
import { useEffect, useState, useRef } from "react";
// <----------------------------FUNCIONES IMPORTADAS------------------------------------>
import { useRouter } from 'next/router';

// <----------------------------COMPONENTES Y MODULOS----------------------------------->
// Interprete de codigo
import Lesson from "@/components/Lesson"

// <----------------------------------ICONOS--------------------------------------------->
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import {BiDownload, BiHelpCircle} from 'react-icons/bi'

/**
 * @name StagePage
 * @description Contenido de la leccion seleccionada
 */
const StagePage = () => {
    // <--------------------------------CONSTANTES----------------------------------------->
    // Enrutamiento de Next.js
    const router = useRouter();
    // Seteo de informacion de la leccion actual
    const [stages, setStages] = useState([])
    // Seteo de informacion de la leccion actual
    const [index, setIndex] = useState(0)
    // Seteo
    const [StageID, setStageID] = useState(0)

    // <
    const changeIndexSiguiente = () => {
        console.log(stages.length);
        if (index < stages.length - 1) {
            // Si existen más lecciones en la etapa actual, ir a la siguiente lección
            const newIndex = index + 1;
            router.push(`/Etapa/${StageID}/${newIndex}`);
        } else {
            // Verificación de existencia de etapas siguientes
            const nextStage = StageID + 1;
            // NOTA: POR EL MOMENTO ES FIJO, PERO DEBERIA SER DINAMICO
            const totalStages = 5; 
            if (nextStage < totalStages) {
                // Si existe una siguiente etapa, ir a la siguiente etapa
                const newIndex = 0;
                router.push(`/Etapa/${nextStage}/${newIndex}`);
            }
        }
    };

    const changeIndexAtras = () => {
        // Leccion anterior
        if (index === 0) {
            const prevStage = StageID - 1;
            // Si no hay etapas previas, no hacer nada
            if (prevStage === 0 || prevStage < 0) {
                return;
            }
            const prevtotalStages = require(`../../../public/lessons/stage${prevStage}`).default.length - 1
            // Si hay etapas previas, cambiar a la ultima leccion de la etapa anterior
            // Vuelve a la primera leccion de la etapa anterior
            router.push(`/Etapa/${prevStage}/${prevtotalStages}`);
            
        }else{
            // Vuelve a la primera leccion de la etapa anterior
            router.push(`/Etapa/${StageID}/${index-1}`);
        }
    }



    // <--------------------------------USE EFFECT'S----------------------------------------->

    // Carga la informacion de una leccion basado en el parametro de consulta `LeccionID`
    useEffect(() => {
        // Extraccion del parametro de consulta `LeccionID` desde la url de la pagina actual
        const { StageID } = router.query;

        // Verificacion si el parametro de consulta `LeccionID` no es nulo (null)
        if (StageID) {
            // Seteo de informacion de la leccion
            setStages(require(`../../../public/lessons/stage${StageID[0]}`).default)
            setStageID(parseInt(StageID[0]))
            setIndex(parseInt(StageID[1]))
        }

    }, [router.query]);


    return (
        <>
            <div className="bg-white h-12 flex items-center justify-evenly text-black">
                {/* Titulo de la leccion */}
                <div> Etapa {StageID}</div>
                {/* Botones centrales */}
                <div className="flex items-center">

                    <button onClick={changeIndexAtras} className="h-8 w-10 px-2 border-b border-l border-t">
                         <FaArrowLeft />
                    </button>

                    <button className="h-8 px-2 border">
                        Leccion {index}
                    </button>

                    <button onClick={changeIndexSiguiente} className="h-8 w-10 px-2 border-b border-r border-t">
                        <FaArrowRight />
                    </button>
                </div>
                {/* Botones lateral derecho */}
                <div>
                    <button className="hover:text-gray-300 mx-2 h-8"><BiDownload size={20}/></button>
                    <button className="hover:text-gray-300 mx-2 h-8"><BiHelpCircle size={20}/></button>
                </div>
            </div>



 
            {stages.length > 0 && <Lesson leccionInfo={stages[index]}/>}
        
        </>
    );
};

export default StagePage;
