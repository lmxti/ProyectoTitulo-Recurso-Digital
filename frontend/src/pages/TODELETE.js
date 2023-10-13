import React, { useState } from 'react';
import CodingSection from '@/components/CodingSection';

const Home = () => {
    const handleExecute = () => {
        // Implement the code execution logic here
        // You can execute the code entered by the user
    };

    return (
        <div className="top-0 left-0 min-h-screen w-full text-text bg-background p-4 flex">

            <div className='flex-col w-1/2 h-[screen] mr-8'>
                
                {/* Content Section (Top Left) */}
                <section className="h-[50%] max-h-[50%] overflow-hidden ">
                    <h2 className="text-2xl font-thin mb-4">Monitor</h2>
                    <div className="h-[84%] bg-foreground p-[1px] rounded-lg shadow-md">
                        {/* Place your interactive content here */}
                        {/* You can embed animations or other interactive elements */}
                        <div className=" w-full h-[calc(100%-2px)] overflow-hidden bg-white rounded-lg">
                        {/* <img src='/aa.png' className='w-full mt-[-140px] rounded-lg' /> */}

                        </div>
                    </div>
                </section>

                {/* Coding Section (Lower Left) */}
                <section className="h-[50%] overflow-hidden mt-[2%]">
                    <CodingSection />
                </section>

            </div>


            {/* Theory Section (Full Right) */}
            <section className="w-1/2 h-[91vh]">
                <h2 className="text-2xl font-thin mb-4">Teoria</h2>
                <div className="h-[98%] bg-foreground p-[1px] rounded-lg shadow-md overflow-y-scroll">

                    <img src='/info.png' className='w-full rounded-lg' />
                    {/* <p>
                        In this section, you can provide theoretical explanations and concepts related to the lesson.
                    </p> */}
                </div>
            </section>
        </div>
    );
};



export default Home;