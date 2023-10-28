<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 m-2 h-[calc(100vh)]">
                    {/* Exercise Section */}
                    
                    <section className="bg-white overflow-y-scroll h-full rounded-[10px] row-span-2">
                        <div>
                            <div className="flex items-center bg-eastBay  p-2 text-2xl font-thin">
                                <HiOutlineDocumentText/>
                                <h2 className="ml-2">Enunciado</h2>
                            </div>
                            {leccionInfo.enunciado}
                        </div>

                        {/* {currentStageLesson.lesson1} */}

                        <div className="flex items-center bg-eastBay  p-2 text-2xl font-thin">
                            <FaAlignJustify/>
                            <h2 className="ml-2">Instrucciones</h2>
                        </div>

                        {leccionInfo.instrucciones}

                    </section>


                    {/* COMPONENTE Y SECCION DE EDITOR DE CODIGO */}
                    <CodingSection onResult={handleResultado} leccionInfo={leccionInfo} />
                    {/* AÑADIR BOTON PARA HACERLO MAS GRANDE Y QUE OCUPE TODA LA PANTALLA A EXCEPCION DE UN 
                        PEQUEÑO CUADRADO EN DONDE SE MUESTRA O LA CONSOLA O LA ANIMACION */}

                    {leccionInfo.isConsole &&

                        <section className="bg-foreground rounded-[10px]">

                            <div className="flex items-center bg-eastBay  p-2 text-2xl font-thin rounded-t-[10px]">
                                {/* Aqui va el icono */}
                                <h2 className="  p-2 text-2xl font-thin">Consola</h2>
                            </div>
                            <div className="p-2">
                                <div className="bg-background h-[38vh] overflow-y-scroll  rounded-[10px] text-white p-5">
                                    {resultado.split(/\r?\n/).map((res, index) => {
                                        return (<div key={index}><code >{res}</code><br /></div>)

                                    })}
                                </div>
                            </div>
                        </section>

                        ||

                        <section className="p-2 bg-foreground rounded-[10px]">
                            <canvas ref={canvasRef} width={canvasSize.width} height={canvasSize.height} className="bg-white border-[3px] w-full border-background h-[46vh] rounded-[10px]" />
                        </section>

                    }

                </div>