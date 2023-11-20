// <--------------------------------HOOKS REACT----------------------------------------->
import { useEffect, useState, useRef } from "react";
// <----------------------------FUNCIONES IMPORTADAS------------------------------------>
import { useRouter } from 'next/router';

// <----------------------------COMPONENTES Y MODULOS----------------------------------->
// Interprete de codigo
import Lesson from "@/components/Lesson"

// <----------------------------------ICONOS--------------------------------------------->
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import {BiDownload, BiHelpCircle, BiSolidHomeAlt2} from 'react-icons/bi'
import Modal from "@/components/Modal";
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
    const [correctResults, setCorrectResult] = useState([])
    const [problems, setProblems] = useState(undefined)
    const [showEndState, setShowEndState] = useState(false)
    const [isLoading, setIsloading] = useState(false)
    const [loadingTimeout, setLoadingTimeout] = useState(undefined)

    const problemTitle = 
    <h1 className="text-xl font-bold text-white p-2 justify-center items-center text-center rounded-t-[10px] bg-accent">EJERCICIO INCOMPLETO!</h1>
    
    const completedTitle = 
    <h1 className="text-xl font-bold text-black p-2 justify-center items-center text-center rounded-t-[10px] bg-primary">Felicidades!</h1>

    const congratulations = 
    <h2 className="text-md font-md mt-1">Has Completado exitosamente el ejercicio! puedes continuar</h2>


    const problemsDisplay = (problems)=>{
        return (
        <>
            <h2 className="text-md font-semibold mb-1">Verifica los siguientes requerimientos:</h2>
                {problems.badObjects.length > 0 &&  
                <div className="mt-[10px] ml-4 ">
                    Objetos con problemas:
                    <ul className="list-disc ml-8 ">
                        {problems.badObjects.map((obj, index)=>{
                            <li key={index}>{obj }</li>
                        })}
                    </ul>

                </div>
                }
                
                {problems.badFunctions.length > 0 &&  
                <div className="mt-[10px] ml-4">
                    Funciones con problemas:
                    <ul className="list-disc ml-8">
                        {problems.badFunctions.map((func, index) => (
                        <li key={index}>{ func +"()"}</li>
                        ))}
                    </ul>
                </div>
                }
            <h2 className="text-sm mt-6">Recuerda revisar bien las instrucciones, realiza cada paso para que el resultado pueda ser comprobado</h2>
        </>
        )
        
    }

    const setResult = (resInfo)=>{
        setCorrectResult((prev)=>[...prev, resInfo])
        if(resInfo.problems){    
            setProblems(problemsDisplay(resInfo.problems)) 
        }

        setShowEndState(true)
    }


    // <
    const changeIndexSiguiente = () => {
        console.log(stages.length);
        if (index < stages.length - 1) {
            // Si existen más lecciones en la etapa actual, ir a la siguiente lección
            const newIndex = index + 1;
            if(!stages[index].checkResult){
                setCorrectResult((prev)=> [...prev, {id : stages[index].id, res: undefined}])
            }
            loadInfo()
            router.push(`/Etapa/${StageID}/${newIndex}`);
        } else {
            // Verificación de existencia de etapas siguientes
            const nextStage = StageID + 1;
            // NOTA: POR EL MOMENTO ES FIJO, PERO DEBERIA SER DINAMICO
            const totalStages = 6; 
            if (nextStage < totalStages) {
                // Si existe una siguiente etapa, ir a la siguiente etapa
                const newIndex = 0;
                setCorrectResult([])
                loadInfo()
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
            setCorrectResult([])
            loadInfo()
            router.push(`/Etapa/${prevStage}/${prevtotalStages}`);
            
        }else{
            loadInfo()
            // Vuelve a la primera leccion de la etapa anterior
            router.push(`/Etapa/${StageID}/${index-1}`);
        }
    }

    const loadInfo = () =>{
        setIsloading(true)
        if(loadingTimeout){
            clearTimeout(loadingTimeout) 
        }
        setLoadingTimeout(setTimeout(()=>{setIsloading(false) }, 3000))
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
            <div className="flex items-center justify-evenly text-black bg-[#3A3F43] ">
                {/* Titulo de la leccion */}
                <nav className="text-white text-sm sm:text-base p-2 rounded-md ">
                    <ol className="list-none p-0 inline-flex space-x-2">
                        <li className="flex items-center">
                            <a href="/" className="cursor-pointer text-white transition-colors duration-300 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" className="cursor-pointer fill-white  hover:fill-orange-500 transition-colors duration-300" fill="#4b5563">
                                    <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
                                </svg>
                            </a>
                            <span className="mx-2">/</span>
                        </li>
                        <li className="flex items-center">
                            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300">Etapa {StageID}</a>
                            <span className="mx-2">/</span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-gray-800">Leccion {index}</span>
                        </li>
                    </ol>
                </nav>


                {/* Botones centrales */}
                <div className="flex items-center">
                    <div className="flex flex-colum mx-auto">
                        <button onClick={changeIndexAtras} type="button" className="p-1 bg-teal-500 rounded-l-md transition duration-200 border-r border-gray-100  hover:bg-emerald-500 hover:text-white px-3">
                        <div className="flex flex-row align-middle">
                            <svg className="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
                            </svg>
                            <p className="ml-2">Prev</p>
                        </div>
                        </button>

                        <button onClick={changeIndexSiguiente}  type="button" className="bg-teal-500 rounded-r-md transition duration-200  border-l border-gray-500 hover:bg-emerald-500 hover:text-white px-3">
                        <div className="flex flex-row align-middle">
                            <span className="mr-2">Next</span>
                            <svg className="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </div>
                        </button>
                    </div>
                </div>

                {/* Botones lateral derecho */}
                <div className="flex">
                    {stages.map((less)=>{
                            return (<div className="rounded-[100%] mr-[10px] w-[15px] h-[15px] border-[1px] border-background" 
                            style={{ background: (index == less.id ? "var(--secondary-color)" : correctResults.some((corr)=> corr.id == less.id && corr.res === undefined) ? "var(--primary-color)" : "") } }/>)

                    })}
                </div>
            </div>
            
            {stages.length > 0 &&  <Lesson leccionInfo={stages[index]} setResult={setResult}/>}
           

            {isLoading &&  <div className="absolute top-[calc(44px)] left-0 w-full h-[calc(100vh+30px)]"><LoadingDiv/>  </div>}

          

            {showEndState && <Modal isOpen={true} onClose={()=> {setShowEndState(false); setProblems(undefined)}} Display={problems ? problems : congratulations} tittle={problems ? problemTitle : completedTitle}/>}
        
        </>
    );
};


const LoadingDiv = () => {
    return (
        // <div className="flex items-center justify-center h-screen w-full bg-backgroundAlpha">
        //         <div className="w-20 h-20 rounded-full animate-spin border-4 border-solid border-green-500 border-t-transparent"></div>
        // </div>
        
        <div className="absolute h-full w-full object-cover flex flex-col items-center justify-center bg-backgroundAlpha">
            <div className='animate-bounce mx-auto flex flex-col items-center  justify-center mt-[20px]'>

                <svg aria-hidden="true" className="w-20 h-20 mr-2 mt-[10px] text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>

            </div>
                <h1 className=" font-extrabold text-[2vw] mt-[5px]">CARGANDO...</h1>
        </div>

        )
}



export default StagePage;
