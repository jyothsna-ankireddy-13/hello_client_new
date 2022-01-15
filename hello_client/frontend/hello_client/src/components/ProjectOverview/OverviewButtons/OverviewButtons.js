import React from "react";
import Expense from "./Vector 57.svg";
import group from "./Group 3.svg";
import task from "./Rectangle 25.svg";
import Eye from "./Eye_light.svg";

import "./OverviewButtons.css";
import {useNavigate} from 'react-router-dom';

function OverviewButtons() {

  const navigate = useNavigate()
  const Expence = () =>{
    navigate('/Expences')
  }

  return (
    <div className="otr">
      <div className="pqr row">
        <div className="ab col-sm">
          <button className="projctbuta" onClick={Expence}>
            <img className="iconsdash" src={Expense} alt="User-add-icon" />{" "}
            Expence
          </button>
        </div>
        <div className="ab col-sm">
          <button className="projctbuta">
            <img className="iconsdash" src={group} alt="User-add-icon" />{" "}
            Mate
          </button>
        </div>
        <div className="ab col-sm">
          <button className="projctbuta">
            <img className="iconsdash" src={task} alt="User-add-icon" /> Task
          </button>
        </div>
        <div className="ab col-sm">
          <button className="projbuta">
            <img className="iconsdash" src={Eye} alt="User-add-icon" /> Meet
          </button>
        </div>
        <div className="ab col-sm">
          <button className="projctbutaa">Revenue</button>
        </div>
        <div className="ab col-sm">
          <button className="projctbutab">Start Work</button>
        </div>
      </div>
    </div>
  );
}

export default OverviewButtons;
