import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, problems }) => {
  console.log("MODALLLL")
    return (
        <div className={`fixed inset-0 ${isOpen ? '' : 'hidden'}`}>
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-white rounded shadow-md p-4 w-96">
                <h2 className="text-xl font-semibold mb-4">Problems List</h2>
                <ul className="list-disc ml-4">
                    {problems.badObjects.map((obj, index)=>{
                        <li key={index}>{obj.toString()}</li>
                    })}
                    {problems.badFunctions.map((func, index) => (
                    <li key={index}>{func.toString()}</li>
                    ))}
                </ul>
                <div className="mt-4 flex justify-end">
                    <button
                    className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
                    onClick={onClose}
                    >
                    Accept
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;