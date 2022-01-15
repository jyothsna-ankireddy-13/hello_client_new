import React from "react";
import "./RevenueTracker.css";
import union from "./Union.svg";

function RevenueTracker() {
  return (
    <div className="container-fluid">
      <div className="hadiv">
        <p className="heada">
          Revenue Tracker<p className="rtp"> Dec 2021 - Jan 2022 month </p>
          <span className="spancls">
            <div>
              <button className="projbut">Add Expence</button>
              <button className="projbut"><img className="iconsproa" src={union} alt="User-add-icon" />Filter</button>
            </div>
          </span>
        </p>
      </div>

      <div className="hdiv">
        <span className="Rtspan">
          <div className="otrrt">
            <div>
              <button className="rth1b">58,0000</button>
            </div>
            <div>
              <button className="rth1b2">Rev. to collect</button>
            </div>
          </div > 
          <div className="otrrt">
            <div>
              <button className="rth1b">58,0000</button>
            </div>
            <div>
              <button className="rth1b2">Rev. collected</button>
            </div>
          </div>
          <div className="otrrt">
            <div>
              <button className="rth1b">58,0000</button>
            </div>
            <div>
              <button className="rth1b2">Rev. collected</button>
            </div>
          </div>
          <div className="otrrt">
            <div>
              <button className="rth1b">58,0000</button>
            </div>
            <div>
              <button className="rth1b2">Rev. collected</button>
            </div>
          </div>
          <div className="otrrt">
            <div>
              <button className="rth1b">58,0000</button>
            </div>
            <div>
              <button className="rth1b2">Rev. collected</button>
            </div>
          </div>
        </span>
      </div>

      <div className="addstorybox">
        <p className="ppp">
          <input type="checkbox" id="scales" name="scales"></input> Story name
          that symbolisis somehing like sprint 1 @Jyoti maykeer{" "}
          <span className="Rts">
            <button className="rtb1">Quote send</button>
            <button className="rtb1">Per. invoice</button>
          </span>
        </p>
        <p className="ppp">
          <input type="checkbox" id="scales" name="scales"></input> Story name
          that symbolisis somehing like sprint 1 @Jyoti maykeer{" "}
          <span className="Rts">
            <button className="rtb1">Per. invoice</button>
            <button className="rtb1">Invoice</button>
          </span>
        </p>
        <p className="ppp">
          <input type="checkbox" id="scales" name="scales"></input> Story name
          that symbolisis somehing like sprint 1 @Jyoti maykeer{" "}
          <span className="Rts">
            <button className="rtb1">Per. invoice</button>
            <button className="rtb1">Invoice</button>
            <button className="rtb1">Money. rec</button>
          </span>
        </p>
        <p className="ppp">
          <input type="checkbox" id="scales" name="scales"></input> Story name
          that symbolisis somehing like sprint 1 @Jyoti maykeer{" "}
          <span className="Rts">
            <button className="rtb1">Per. invoice</button>
            <button className="rtb1">Invoice</button>
            <button className="rtb1">Money. rec</button>
          </span>
        </p>
      </div>
    </div>
  );
}

export default RevenueTracker;
