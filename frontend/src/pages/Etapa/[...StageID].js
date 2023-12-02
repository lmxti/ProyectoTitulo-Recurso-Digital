// <--------------------------------HOOKS REACT----------------------------------------->
import { useEffect, useState, useRef } from "react";
// <----------------------------FUNCIONES IMPORTADAS------------------------------------>
import { useRouter } from 'next/router';
import { useUser } from '../../contexts/UserContext';
import TutorialOverlay from '@/components/TutorialOverlay';


// <----------------------------COMPONENTES Y MODULOS----------------------------------->
// Interprete de codigo
import Lesson from "@/components/Lesson"

import Modal from "@/components/Modal";
import Spinner from "@/components/Spinner";


/**
 * @name StagePage
 * @description Contenido de la leccion seleccionada
 */
const StagePage = () => {
    const { getUser, stagesInfo, completeLesson } = useUser();

    const [showTutorial, setShowTutorial] = useState(false);

    const closeTutorial = () => {
        setShowTutorial(false);
        // You may want to save a flag in local storage to avoid showing the tutorial again
    };

    useEffect(() => {
        if (!stagesInfo) {
            getUser()
        }
    }, [])


    // <--------------------------------CONSTANTES----------------------------------------->
    // Enrutamiento de Next.js
    const router = useRouter();
    // Seteo de informacion de la leccion actual
    const [stages, setStages] = useState([])
    // Seteo de informacion de la leccion actual
    const [index, setIndex] = useState(0)
    // Seteo
    const [StageID, setStageID] = useState(-1)
    const [problems, setProblems] = useState(undefined)
    const [showEndState, setShowEndState] = useState(false)
    const [isLoading, setIsloading] = useState(false)
    const [loadingTimeout, setLoadingTimeout] = useState(undefined)

    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

    const problemTitle =
        <h1 className="text-xl font-bold text-white p-2 justify-center items-center text-center rounded-t-[10px] bg-accent">EJERCICIO INCOMPLETO!</h1>

    const completedTitle =
        <h1 className="text-xl font-bold text-black p-2 justify-center items-center text-center rounded-t-[10px] bg-primary">Felicidades!</h1>

    const congratulations =
        <h2 className="text-md font-md mt-1 text-center">Has Completado exitosamente el ejercicio! Puedes continuar</h2>


    const problemsDisplay = (problems) => {
        return (
            <>
                <h2 className="text-md font-semibold mb-1">Verifica los siguientes requerimientos:</h2>
                {problems.badObjects.length > 0 &&
                    <div className="mt-[10px] ml-4 ">
                        Objetos con problemas:
                        <ul className="list-disc ml-8 ">
                            {problems.badObjects.map((obj, index) => {
                                <li key={index}>{obj}</li>
                            })}
                        </ul>

                    </div>
                }

                {problems.badFunctions.length > 0 &&
                    <div className="mt-[10px] ml-4">
                        Funciones con problemas:
                        <ul className="list-disc ml-8">
                            {problems.badFunctions.map((func, index) => (
                                <li key={index}>{func + "()"}</li>
                            ))}
                        </ul>
                    </div>
                }
                <h2 className="text-sm mt-6">Recuerda revisar bien las instrucciones, realiza cada paso para que el resultado pueda ser comprobado</h2>
            </>
        )

    }

    const setResult = (resInfo) => {
        if (resInfo.problems) {
            setProblems(problemsDisplay(resInfo.problems))
            setShowEndState(true)
        } else {
            completeLesson(`${StageID}-${index}`).then((r) => {
                if(!r){
                    setShowEndState(true) 
                }
            })
        }


    }

    const getStage = async (StageID) => {
        try {
            // Seteo de informacion de la leccion
            const module = await import(`../../../public/lessons/stage${StageID}.js`).catch((error) => console.log("No hay mas lecciones"));
            if (!module) {
                return undefined
            } else {
                return module.default;
            }


        } catch (error) {
            console.error(`Error fetching stage${StageID}.js:`, error);
        }
    }

    // <
    const changeIndexSiguiente = async () => {
        console.log(stages.length);
        if (index < stages.length - 1) {
            // Si existen más lecciones en la etapa actual, ir a la siguiente lección
            const newIndex = index + 1;
            /*  if (!stages[index].checkResult) {
                 setCorrectResult((prev) => [...prev, { id: stages[index].id, res: undefined }])
             } */
            loadInfo()
            router.push(`/Etapa/${StageID}/${newIndex}`);
        } else {
            // Verificación de existencia de etapas siguientes
            const nextStage = StageID + 1;

            getStage(nextStage).then((stage) => {
                if (stage) {
                    const newIndex = 0;
                    loadInfo()
                    router.push(`/Etapa/${nextStage}/${newIndex}`);
                }
            })


        }
    };

    const changeIndexAtras = () => {
        // Leccion anterior
        if (index === 0) {
            const prevStage = StageID - 1;
            // Si no hay etapas previas, no hacer nada
            if (prevStage < 0) {
                return;
            }

            getStage(prevStage).then((stage) => {
                if (stage) {
                    const prevtotalStages = stage.length - 1
                    // Si hay etapas previas, cambiar a la ultima leccion de la etapa anterior
                    // Vuelve a la primera leccion de la etapa anterior
                    loadInfo()
                    router.push(`/Etapa/${prevStage}/${prevtotalStages}`);
                }
            })

        } else {
            loadInfo()
            // Vuelve a la primera leccion de la etapa anterior
            router.push(`/Etapa/${StageID}/${index - 1}`);
        }
    }

    const loadInfo = () => {
        setIsloading(true)
        if (loadingTimeout) {
            clearTimeout(loadingTimeout)
        }
        setLoadingTimeout(setTimeout(() => { setIsloading(false) }, 1500))
    }



    // <--------------------------------USE EFFECT'S----------------------------------------->

    // Carga la informacion de una leccion basado en el parametro de consulta `LeccionID`
    useEffect(() => {
        // Extraccion del parametro de consulta `LeccionID` desde la url de la pagina actual
        const { StageID } = router.query;

        // Verificacion si el parametro de consulta `LeccionID` no es nulo (null)
        if (StageID) {
            getStage(StageID[0]).then((stage) => {
                setStages(stage);
                setStageID(parseInt(StageID[0]))
                setIndex(parseInt(StageID[1]))
            })
        }

    }, [router.query]);

    const handleMouseMove = (event) => {
        setMousePos({ x: event.clientX, y: event.clientY });
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []); 


    useEffect(() => {
        if (stagesInfo) {
            if (StageID == 0 && !stagesInfo[0].lessonsCompleted.some((a) => (a == 0))) { setShowTutorial(true) }
        }
    }, [stagesInfo, StageID])

    return (
        <>
          <div  className=" flex items-center justify-evenly text-black bg-[#3A3F43] ">
                {/* Titulo de la leccion */}
                <nav className="text-white text-sm sm:text-base p-2 w-[33%]  items-center justify-center flex  rounded-md ">
                    <ol className="list-none p-0 inline-flex space-x-2 self-center">
                        <li className="flex items-center">
                            <a href="/Etapas" className="cursor-pointer text-white transition-colors duration-300 flex items-center">

                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" className="cursor-pointer fill-white  hover:fill-orange-500 transition-colors duration-300" fill="#4b5563">
                                    <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
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
                <div className="flex items-center w-[33%]">
                    <div className="flex flex-colum mx-auto">
                        <button onClick={changeIndexAtras} type="button" className="p-1 bg-teal-500 rounded-l-md transition duration-200 border-r border-gray-100  hover:bg-emerald-500 hover:text-white px-3">
                            <div className="flex flex-row align-middle">
                                <svg className="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
                                </svg>
                                <p className="ml-2">Prev</p>
                            </div>
                        </button>

                        <button onClick={changeIndexSiguiente} type="button" className="bg-teal-500 rounded-r-md transition duration-200  border-l border-gray-500 hover:bg-emerald-500 hover:text-white px-3">
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
                <div className="flex items-center justify-center w-[33%]" >
                    {stages.map((less, idx) => {
                        return (<div key={idx} className="rounded-[100%] mr-[10px] w-[15px] h-[15px] border-[1px] border-background"
                            style={{
                                background: (index == less.id || !stagesInfo ? "var(--secondary-color)" :
                                    stagesInfo[StageID].lessonsCompleted.some((completed) => completed == String(less.id)) ? "var(--primary-color)" : "")
                            }} />)

                    })}
                </div>
            </div>
            {stages.length > 0 && <Lesson leccionInfo={stages[index]} setResult={setResult} />}
            {showTutorial && <TutorialOverlay onClose={closeTutorial} />}

            {isLoading && <div className="absolute top-[calc(44px)] left-0 w-full h-[calc(100vh+30px)]"><LoadingDiv />  </div>}

            {showEndState && <Modal isOpen={true} onClose={() => { setShowEndState(false); setProblems(undefined) }} Display={problems ? problems : congratulations} tittle={problems ? problemTitle : completedTitle} />}
           
           
           {/*  
            <div style={{left: (mousePos.y < 100 ? "0" : "-100vw"), top: 0  }} className="w-screen transform transition-all ease-in-out duration-200 fixed flex items-center justify-evenly text-black bg-[#3A3F43] ">
                
                <nav className="text-white text-sm sm:text-base p-2 w-[33%]  items-center justify-center flex  rounded-md ">
                    <ol className="list-none p-0 inline-flex space-x-2 self-center">
                        <li className="flex items-center">
                            <a href="/Etapas" className="cursor-pointer text-white transition-colors duration-300 flex items-center">

                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" className="cursor-pointer fill-white  hover:fill-orange-500 transition-colors duration-300" fill="#4b5563">
                                    <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
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


                <div className="flex items-center w-[33%]">
                    <div className="flex flex-colum mx-auto">
                        <button onClick={changeIndexAtras} type="button" className="p-1 bg-teal-500 rounded-l-md transition duration-200 border-r border-gray-100  hover:bg-emerald-500 hover:text-white px-3">
                            <div className="flex flex-row align-middle">
                                <svg className="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
                                </svg>
                                <p className="ml-2">Prev</p>
                            </div>
                        </button>

                        <button onClick={changeIndexSiguiente} type="button" className="bg-teal-500 rounded-r-md transition duration-200  border-l border-gray-500 hover:bg-emerald-500 hover:text-white px-3">
                            <div className="flex flex-row align-middle">
                                <span className="mr-2">Next</span>
                                <svg className="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-center w-[33%]" >
                    {stages.map((less, idx) => {
                        return (<div key={idx} className="rounded-[100%] mr-[10px] w-[15px] h-[15px] border-[1px] border-background"
                            style={{
                                background: (index == less.id || !stagesInfo ? "var(--secondary-color)" :
                                    stagesInfo[StageID].lessonsCompleted.some((completed) => completed == String(less.id)) ? "var(--primary-color)" : "")
                            }} />)

                    })}
                </div>
            </div>
 */}
        </>
    );
};


const LoadingDiv = () => {
    return (
        // <div className="flex items-center justify-center h-screen w-full bg-backgroundAlpha">
        //         <div className="w-20 h-20 rounded-full animate-spin border-4 border-solid border-green-500 border-t-transparent"></div>
        // </div>

        <div className="absolute h-full w-full object-cover flex flex-col items-center justify-center bg-backgroundAlpha">
           <Spinner color="#38be92" size={90}/>
            <h1 className=" font-extrabold text-[2vw] mt-[5px]">CARGANDO...</h1>
        </div>

    )
}



export default StagePage;
