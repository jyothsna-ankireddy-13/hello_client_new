import React from "react";
import "./Expencesblock.css";
import union from "./Union.svg";

function Expencesblock() {
  return (
    <div className="container-fluid">
        <div className="hadiv">
          <p className="heada">
          Expences <span className="spancls"><button className="projbut">Add Expence</button>
            <button className="projbut"><img className="iconsproa" src={union} alt="User-add-icon" /> Filter</button></span>
          </p>
        </div>
        =
      <div className="hdiv">
        <h1 className="head">
          Rs 11,225.00<span className="spancls"><p className="date">Till 10th june 2021</p></span>
        </h1>
      </div>
      <div className="addstorybox">
        <p className="ppp">
          <input type="checkbox" id="scales" name="scales"></input> Story name
          that symbolisis somehing like sprint 1 @Jyoti maykeer{" "}
        </p>
        <p className="ppp">
          <input type="checkbox" id="scales" name="scales"></input> Et has minim
          elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit
          quaerendum. At nam minimum ponderum. Est audiam animal molestiae te.
          Ex duo eripuit mentitum. Et has minim elitr intellegat. Mea aeterno
          eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum
          ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.
        </p>
        <p className="ppp">
          <input type="checkbox" id="scales" name="scales"></input> Story name
          that symbolisis somehing like sprint 1 @Jyoti maykeer{" "}
        </p>
        <p className="ppp">
          <input type="checkbox" id="scales" name="scales"></input> Story name
          that symbolisis somehing like sprint 1 @Jyoti maykeer{" "}
        </p>
        <p className="ppp">
          <input type="checkbox" id="scales" name="scales"></input> Et has minim
          elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit
          quaerendum. At nam minimum ponderum. Est audiam animal molestiae te.
          Ex duo eripuit mentitum. Et has minim elitr intellegat. Mea aeterno
          eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum
          ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.
        </p>
        <p className="ppp">
          <input type="checkbox" id="scales" name="scales"></input> Story name
          that symbolisis somehing like sprint 1 @Jyoti maykeer{" "}
        </p>
      </div>
    </div>
  );
}

export default Expencesblock;
