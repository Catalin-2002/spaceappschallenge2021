import React from "react";
import "./Modal.css";

const neighorhoodName = "Steaua Fratelia";
const populationNumber = "190k";
const averageSalary = "1500e";
const topSalary = "20k";
const bottomSalary = "2k";
const homlessPeople = "500";
const underDeveloped = "300";
const minPrice = "20000"

const neighorhoodNeededPrice = "240000";
const setTargetTime = "2030"

function Modal({ setOpenModal }) {
  return (

    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>{neighorhoodName}</h1>
        </div>
        <div className="body">

          <ul>
            <li>Population: {populationNumber}</li> 
            <li>Average salary: {averageSalary}</li> 
            <li>Top 10% salary: {topSalary} </li> 
            <li>Bottom 10% salary: {bottomSalary}</li>
            <li>Amount of homless people: {homlessPeople}</li>
            <li>People living in underdeveloped areas: {underDeveloped}</li> 
            <li>Minimum price per housing; {minPrice}</li> 
            <li>Estimated price to get this neighborhood back on track: {neighorhoodNeededPrice}</li> 
            <li>This fix should be done by the year: {setTargetTime}</li> 
          </ul>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;