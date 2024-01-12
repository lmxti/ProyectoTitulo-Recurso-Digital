// TutorialOverlay.js
import { FaHandPointDown } from "react-icons/fa";
import React, { useEffect, useState } from 'react';

const tutorialStages = [
    { text: "¡Hola! Bienvenido a la introducción a la programación" },
    { text: "¡¿Preparado para aprender?!" },
    { text: "¿Cómo funciona la plataforma? ¿Cómo se programa? ¿POO?" },
    { text: "Como sobrevivir la universidad..." },
    { text: "Esta plataforma no es mágica pero debería ayudar" },
    { text: "O eso esperamos..." },
    { text: "Para comenzar explicaré como funciona esta página" },
    { text: "Empezando por la izquierda, encontrarás" },
    { toOutline: "theoryTitle", text: "La sección de Teoría" },
    { toOutline: "theoryTitle", text: "En cada lección, la teoría será la explicación general de la materia" },
    { toOutline: "theoryTitle", text: "Tendrá ilustraciones y pistas para completar la lección" },
    { toOutline: "theoryTitle", text: "Por lo tanto, es importante dedicarle tiempo a la lectura" },
    { text: "Debajo de la teoría está la sección de" },
    { toOutline: "instructionsTitle", text: "Objetivos", event: { id: "instructionsOpen", name: "click" } },
    { toOutline: "instructionsTitle", text: "Este apartado servirá para señalar lo que esperamos de ti" },
    { toOutline: "instructionsTitle", text: "En algunos casos las lecciones serán evaluadas basándonos en estos objetivos" },
    { toOutline: "instructionsTitle", text: "Así que es importante que los completes para avanzar" },
    { text: "En la sección derecha, lo primero que tenemos es" },
    { toOutline: "codeEditorTitle", text: "El editor de código" },
    { toOutline: "codeEditorTitle", text: "En todas las lecciones, encontrarás una base de código desde la cual trabajaras" },
    { toOutline: "codeEditorTitle", text: "Y también te ayudará a practicar" },
    { toOutline: "codeEditorTitle", text: "Algunas veces habrá más o menos código" },
    { toOutline: "codeEditorTitle", text: "Pero en general lo más importante es experimentar" },
    { toOutline: "codeEditorTitle", text: "Todo esto con el objetivo de ayudarte a tener experiencia práctica" },
    { toOutline: "executeButton", text: "También, como ves al extremo derecho, está el botón de EJECUTAR código" },
    { toOutline: "executeButton", text: "Debes presionarlo cuando quieras compilar y ejecutar el código" },
    { text: "Finalmente, debajo del Editor de código, encontrarás" },
    { toOutline: "consoleTitle", text: "La consola" },
    { toOutline: "consoleTitle", text: "Una vez ejecutes el código, esta mostrará su resultadoo" },
    { toOutline: "consoleTitle", text: "Para que existan resultados el código debe ser correcto" },
    { toOutline: "consoleTitle", text: "De otra manera, no se mostrará nada en este apartado" },
    { text: "¡Ahora llego tu turno de experimentar!" },
    { text: "Hasta la próxima y ¡Buena suerte!" },
]


const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

const TutorialOverlay = ({ onClose }) => {
    const [progress, setProgress] = useState(-1)
    const [currText, setCurrText] = useState("")
    const [writingVar, setWriting] = useState(false)

    useEffect(() => {
        nextTutorial()
    }, [])

    const writeText = async (nP) => {
        setWriting(true)
        let auxWriting = true;

        for (let f = 0; f < tutorialStages[nP].text.length; f++) {

            setCurrText((prevText) => prevText + tutorialStages[nP].text[f])

            await sleep(30)
            setWriting((prevWriting) => { auxWriting = prevWriting; return prevWriting; })
            if (!auxWriting) {
                break;
            }
        }

        setCurrText(tutorialStages[nP].text)
        setWriting(false)
    }

    const nextTutorial = async () => {
        if (writingVar) {
            setWriting(false)
        } else if (progress + 1 < tutorialStages.length) {
            const nP = Math.max(progress + 1, 0)
            setProgress(nP)
            setCurrText("")

            if (tutorialStages[nP].event) {
                const element = document.getElementById(tutorialStages[nP].event.id);
                

                if (element) {
                    const event = new Event(tutorialStages[nP].event.name, {
                        view: window,
                        bubbles: true,
                        cancelable: true,
                    });

                    element.dispatchEvent(event);
                }
            }


            await writeText(nP);
        } else {
            onClose()
        }
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none">



            <div className="absolute left-0 bottom-0 p-4 w-[20%] min-w-[300px] hover:scale-110 pointer-events-auto" >

                <img src="/images/panda-rojo.png" alt="Character" className="mb-4 z-0 w-[100%] h-full animate__slowMov " />

                <div className="absolute flex right-[-45%] top-[-35%] cursor-pointer w-[80%] " onClick={() => nextTutorial()} style={{ transformOrigin: 'left bottom' }}>
                    <img id="panda" src="/images/SpeechBubble.png" alt="bubble" className=" mb-4 w-[100%] h-full" />

                    <div className="absolute top-[36%] left-[60%] transform -translate-x-[60%] -translate-y-[36%] w-[70%]  text-center text-background ">
                        <p className="text-[16px] font-extrabold font-sans"> {currText} </p>

                    </div>
                </div>


                <style jsx>{`
                    @keyframes rotateAndScale {
                        0% {
                            transform: scale(1) rotate(0deg);
                        }
                        25% {
                            transform: scale(1.05) rotate(5deg);
                        }
                        75% {
                            transform: scale(0.95) rotate(-5deg);
                        }
                        100% {
                            transform: scale(1) rotate(0deg);
                        }
                    }

                    .animate__speedMov {
                        animation: rotateAndScale 2s ease-in infinite;
                    }
                    
                    .animate__slowMov {
                        animation: rotateAndScale 4s ease-in-out infinite;
                    }
                `}</style>


            </div>
            <FocusBackground targetElementId={(progress > -1 && tutorialStages[progress].toOutline ? tutorialStages[progress].toOutline : undefined)} />

        </div>
    );
};



const FocusBackground = ({ targetElementId }) => {
    const [maskPosition, setMaskPosition] = useState({ x: 0, y: 0 });
    const [maskSize, setMaskSize] = useState({ width: 0, height: 0 });
    const overSize = 20;
    const [screenSize, setScreenSize] = useState({ w: 1080, h: 720 });
    const [selElement, setSelElement] = useState(undefined)


    const updateMask = () => {
        if (selElement) {
            const rect = selElement.getBoundingClientRect();
            setMaskSize({ width: rect.width + overSize, height: rect.height + overSize });
            setMaskPosition({ x: rect.left - overSize * 0.5, y: rect.top - overSize * 0.5 });

        }
    };


    useEffect(() => {
        const resSize = () => {
            setScreenSize({ w: window.innerWidth, h: window.innerHeight })
            updateMask()
        }

        resSize()
        window.addEventListener('resize', resSize);
        window.addEventListener('scroll', updateMask);

        // Use ResizeObserver to observe changes in element size
        const resizeObserver = new ResizeObserver(updateMask);
        
        if (selElement) {
            resizeObserver.observe(selElement);
           /*  document.getElementById(tutorialStages[nP].event.id).addEventListener('transitionend') */
            selElement.addEventListener('transitionend', updateMask)
        }

        return () => {
            window.removeEventListener('resize', resSize);
            window.removeEventListener('scroll', updateMask);
            if (selElement) {
                resizeObserver.unobserve(selElement);
                selElement.removeEventListener('transitionend', updateMask)

            }
            resizeObserver.disconnect();
        };
    }, [selElement])

    useEffect(() => {
        if (targetElementId) {
            const el = document.getElementById(targetElementId)
            document.getElementById(targetElementId).event
            if (el) {
                setSelElement(el)
            }

        } else {
            setMaskSize({ width: 0, height: 0 });
            setMaskPosition({ x: -50, y: -50 });
            setSelElement(undefined)

        }
    }, [targetElementId]);

    return (
        <>
            <svg width="100vw" height="100vh" xmlns="http://www.w3.org/2000/svg">
                <a style={{ pointerEvents: 'auto' }} >
                    <path

                        fill='black' opacity={0.75} rx={200} ry={200} strokeLinecap='round' strokeLinejoin='round'

                        d={`M 0,0, ${screenSize.w},0, ${screenSize.w},${screenSize.h}, 0,${screenSize.h} Z 
                M  ${maskPosition.x},${maskPosition.y}, 
                    L ${maskPosition.x},${maskPosition.y + maskSize.height}, 
                    L ${maskPosition.x + maskSize.width},${maskPosition.y + maskSize.height},
                    L ${maskPosition.x + maskSize.width},${maskPosition.y} Z`}

                    />

                </a>
            </svg>
            <FaHandPointDown className="fixed animate-bounce outline-8 outline-black" size={50} style={{ left: maskPosition.x + (maskSize.width * 0.5) - 25, top: maskPosition.y + (maskSize.height * 0.05) - 25 }} />

        </>
    );

};



export default TutorialOverlay;
