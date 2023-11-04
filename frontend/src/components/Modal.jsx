import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, Display, tittle }) => {
    console.log("MODALLLL")
    return (
        <div className={`fixed inset-0 ${isOpen ? '' : 'hidden'} bg-backgroundAlpha`}>
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-white rounded-[10px] shadow-md w-96 ">

                {tittle}
                <div className="p-4">
                    {Display}
                    <div className="mt-4 flex justify-end">
                        <button className="px-4 py-2 text-white bg-blue-500 rounded-[10px] hover:bg-blue-700" onClick={onClose} >
                            Acceptar
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;