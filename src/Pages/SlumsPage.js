import React, {useState} from 'react';
import "./SlumsPage.css"

import Slums from '../Components/Slums/Slums';
import Modal from '../Components/Slums/Modal/Modal.js'
import Modal1 from '../Components/Slums/Modal/Modal.js'

function SlumsPage(){

    const [modalOpen, setModalOpen] = useState(false);

    return(
        <div className = "MainComponent">

            <button
                className="openModalBtn"
                onClick={() => {
                    setModalOpen(true);
                }}
                >
                More info about Steaua-Fratelia
            </button>
            {modalOpen ? <Modal setOpenModal={setModalOpen}/> : <Slums/>}
        </div>
        
    )
}

export default SlumsPage;