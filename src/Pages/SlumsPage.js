import React, {useState} from 'react';
import "./SlumsPage.css"

import Slums from '../Components/Slums/Slums';
import Modal from '../Components/Slums/Modal/Modal.js'

function SlumsPage(){

    const [modalOpen, setModalOpen] = useState(false);

    return(
        <div className = "MainComponent">

            
            {modalOpen ? <Modal setOpenModal={setModalOpen}/> : 
            <>
                <Slums/>
                <div className = "Buttons">
            <button
                className="openModalBtn"
                onClick={() => {
                    setModalOpen(true);
                }}
                >
                Steaua-Fratelia
            </button>
            <button
                className="openModalBtn"
                onClick={() => {
                    setModalOpen(true);
                }}
                >
                Calea Martirilor
            </button>
            <button
                className="openModalBtn"
                onClick={() => {
                    setModalOpen(true);
                }}
                >
                Iosefin Dambovita
            </button>
            <button
                className="openModalBtn"
                onClick={() => {
                    setModalOpen(true);
                }}
                >
               Calea Sagului
            </button>
            <button
                className="openModalBtn"
                onClick={() => {
                    setModalOpen(true);
                }}
                >
                Elisabetin
            </button>
            <button
                className="openModalBtn"
                onClick={() => {
                    setModalOpen(true);
                }}
                >
                Complexul Studentesc
            </button>
            </div>
            </>}
            
        </div>
        
    )
}

export default SlumsPage;