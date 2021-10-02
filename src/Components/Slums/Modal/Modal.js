import React from "react";
import "./Modal.css";

const neighorhoodName = "Ana";
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
          <h3>Population: {populationNumber}</h3> <br/>
          <h3>Average salary: {averageSalary}</h3> <br/>
          <h3>Top 10% salary: {topSalary} </h3> <br/>
          <h3>Bottom 10% salary: {bottomSalary}</h3> <br/>
          <h3>Amount of homless people: {homlessPeople}</h3> <br/>
          <h3>People living in underdeveloped areas: {underDeveloped}</h3> <br/>
          <h3>Minimum price per housing; {minPrice}</h3> <br/>

          <h1>Estimated price to get this neighborhood back on track: {neighorhoodNeededPrice}</h1> <br/>
          <h1>This fix should be done by the year: {setTargetTime}</h1> <br/>
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