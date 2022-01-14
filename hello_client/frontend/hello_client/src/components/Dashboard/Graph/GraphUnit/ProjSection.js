import React from "react";
import "./ProjSection.css";
import icn from './Rectangle 25.svg';
import union from './Union.svg';

function ProjSection() {
  return (
    <div>
      <div className="ijk container-fluid">
        <div className="ijk row">
          <div className="ijk col-sm-6">
            <span className="spana">
              <h1 className="hclass">Profits</h1>
              <p className="pp">May 2021</p>
            </span>
          </div>
          <div className="qwe col-sm-6">
            <span className="spana">
              <p className="p2">All</p>
              <p className="p2">In Progress</p>
              <p className="p2">Completed</p>
              <div className="p1butttonouter">
                <button className="Pbutton"><img className="iconspro" src={icn} alt="User-add-icon" />filter </button>
              </div>
              <div className="p1butttonouter">
                <button className="Pbutton"><img className="iconspro" src={union} alt="User-add-icon" />Meets</button>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjSection;
