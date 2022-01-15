import React from "react";
import "./Todo.css";
import profile from "./Ellipse 55.png";

function Todo() {
  return (
    <div>
      <div class="todo container-fluid">
        <div class="todo row">
          <div class="todo col-sm-4">
            <div class="todo card">
              <div className="block1">
                <span>
                  <img className="profilelogo" src={profile} alt="Logo" />
                </span>
                <h1 className="projname"> SandStone Construction</h1>
                <br></br>
              </div>
              <p className="name"> Praveen Khambhavi </p>
              <div className="col-sm">
                <button className="projctbut">Add mom</button>
              </div>

              <div className="checkbox1">
                <input type="checkbox" id="scales" name="scales"></input>
                <p className="taskh1">Morning meet Nda for...</p>
                <p className="datea">10:30 12th Jan 2021</p>
              </div>

              <div className="checkbox1">
                <input type="checkbox" id="scales" name="scales"></input>
                <p className="taskh1">changes on cold</p>
                <p className="datea">10:30 12th Jan 2021</p>
              </div>

              <div className="checkbox1">
                <input type="checkbox" id="scales" name="scales"></input>
                <p className="taskh1">Need changes on cald...</p>
                <p className="datea">10:30 12th Jan 2021</p>
              </div>
            </div>
          </div>

          <div class="todo col-sm-4">
            <div class="todo card">
              <div className="block1">
                <span>
                  <img className="profilelogo" src={profile} alt="Logo" />
                </span>
                <h1 className="projname"> Project Manager</h1>
                <br></br>
              </div>
              <p className="name"> Rushab hrushan </p>
              <div className="col-sm">
                <button className="projctbut">Add mom</button>
              </div>

              <div className="checkbox1">
              <span>
                  <img className="profilelogo" src={profile} alt="Logo" />
                </span>
                <p className="taskh11">Morning meet Nda for...</p>
                <p className="datea">10:30 12th Jan 2021</p>
              </div>

              <div className="checkbox1">
              <span>
                  <img className="profilelogo" src={profile} alt="Logo" />
                </span>
                <p className="taskh11">changes on cold</p>
                <p className="datea">10:30 12th Jan 2021</p>
              </div>

              <div className="checkbox1">
              <span>               
                  <img className="profilelogo" src={profile} alt="Logo" />
                </span>
                <p className="taskh11">Need changes on cald...</p>
                <p className="datea">10:30 12th Jan 2021</p>
              </div>
            </div>
          </div>

          <div class="todo col-sm-4">
            <div class="todo card">
              <div className="block1">
                <h1 className="projname"> Sprint (1/3)</h1>
                <br></br>
              </div>
              <p className="name1"> 12th Jan 2021  - 15th Feb 2021  </p>
              <div className="col-sm">
                <button className="projctbut1">Add milestone</button>
              </div>

              <div className="checkbox1">
                <input type="checkbox" id="scales" name="scales"></input>
                <p className="taskh1">Morning meet Nda for...</p>
                <p className="datea">10:30 12th Jan 2021</p>
              </div>

              <div className="checkbox1">
                <input type="checkbox" id="scales" name="scales"></input>
                <p className="taskh1">changes on cold</p>
                <p className="datea">10:30 12th Jan 2021</p>
              </div>

              <div className="checkbox1">
                <input type="checkbox" id="scales" name="scales"></input>
                <p className="taskh1">Need changes on cald...</p>
                <p className="datea">10:30 12th Jan 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
