import React from "react";
import "./Project.css";
import rec from "./Rectangle 25.svg";
import tbl from "./Table_light.svg";
import {useNavigate} from 'react-router-dom';

function Dashproject() {
  const navigate = useNavigate()
  const openproject = () =>{
    navigate('/projectoverview')
  }
  return (
    <div>
      <div class="container-fluid">
        <div class="row">
          <div class="abc col-sm-4">
            <div class="card" onClick={openproject}>
              <p class="card-paragraphdate">10th june 2021</p>
              <h3 class="card-title1">Project name 1</h3>
              <p class="ab card-paragraph">
                <b>Client name</b> minim elitr intellegat. Mea aete rn o
                eleifend antiopam ad, nam{" "}
              </p>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  73%
                </div>
              </div>
              <div className="mnp row">
                <div className="ab col-sm-4">
                  <button className="projctbut">Payment Due</button>
                </div>
                <div className="ab col-sm-4">
                  <button className="projctbut">Deadline</button>
                </div>
                <div className="ab col-sm-4">
                  <button className="projctbut">Send invoice</button>
                </div>
              </div>
              <div className="mnp row">
                <div className="ab col-sm-4">
                  <button className="projctbut">Task</button>
                </div>
              </div>
              <span className="icondiv">
                <img className="iconspro" src={rec} alt="User-add-icon" />
                <img className="iconspro" src={tbl} alt="User-add-icon" />
              </span>
            </div>
          </div>
          <div class="abc col-sm-4">
            <div class="card">
              <p class="card-paragraphdate">10th june 2021</p>
              <h3 class="card-title1">Project name 1</h3>
              <p class="ab card-paragraph">
                <b>Client name</b> minim elitr intellegat. Mea aete rn o
                eleifend antiopam ad, nam{" "}
              </p>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="73"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  73%
                </div>
              </div>
              <div className="mnp row">
                <div className="ab col-sm-4">
                  <button className="projctbut">Payment Due</button>
                </div>
                <div className="ab col-sm-4">
                  <button className="projctbut">Deadline</button>
                </div>
                <div className="ab col-sm-4">
                  <button className="projctbut">Send invoice</button>
                </div>
              </div>
              <div className="mnp row">
                <div className="ab col-sm-4">
                  <button className="projctbut">Task</button>
                </div>
              </div>
              <span className="icondiv">
                <img className="iconspro" src={rec} alt="User-add-icon" />
                <img className="iconspro" src={tbl} alt="User-add-icon" />
              </span>
            </div>
          </div>
          <div class="abc col-sm-4">
            <div class="card">
              <p class="card-paragraphdate">10th june 2021</p>
              <h3 class="card-title1">Project name 1</h3>
              <p class="ab card-paragraph">
                <b>Client name</b> minim elitr intellegat. Mea aete rn o
                eleifend antiopam ad, nam{" "}
              </p>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="73"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  73%
                </div>
              </div>
              <div className="mnp row">
                <div className="ab col-sm-4">
                  <button className="projctbut">Payment Due</button>
                </div>
                <div className="ab col-sm-4">
                  <button className="projctbut">Deadline</button>
                </div>
                <div className="ab col-sm-4">
                  <button className="projctbut">Send invoice</button>
                </div>
              </div>
              <div className="mnp row">
                <div className="ab col-sm-4">
                  <button className="projctbut">Task</button>
                </div>
              </div>
              <span className="icondiv">
                <img className="iconspro" src={rec} alt="User-add-icon" />
                <img className="iconspro" src={tbl} alt="User-add-icon" />
              </span>
            </div>
          </div>
          <div class="abc col-sm-4">
            <div class="card">
              <p class="card-paragraphdate">10th june 2021</p>
              <h3 class="card-title1">Project name 1</h3>
              <p class="ab card-paragraph">
                <b>Client name</b> minim elitr intellegat. Mea aete rn o
                eleifend antiopam ad, nam{" "}
              </p>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="73"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  73%
                </div>
              </div>
              <div className="mnp row">
                <div className="ab col-sm-4">
                  <button className="projctbut">Payment Due</button>
                </div>
                <div className="ab col-sm-4">
                  <button className="projctbut">Deadline</button>
                </div>
                <div className="ab col-sm-4">
                  <button className="projctbut">Send invoice</button>
                </div>
              </div>
              <div className="mnp row">
                <div className="ab col-sm-4">
                  <button className="projctbut">Task</button>
                </div>
              </div>
              <span className="icondiv">
                <img className="iconspro" src={rec} alt="User-add-icon" />
                <img className="iconspro" src={tbl} alt="User-add-icon" />
              </span>
            </div>
          </div>
          <div class="abc col-sm-4">
            <div class="card">
              <p class="card-paragraphdate">10th june 2021</p>
              <h3 class="card-title1">Project name 1</h3>
              <p class="ab card-paragraph">
                <b>Client name</b> minim elitr intellegat. Mea aete rn o
                eleifend antiopam ad, nam{" "}
              </p>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="73"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  73%
                </div>
              </div>
              <div className="mnp row">
                <div className="ab col-sm-4">
                  <button className="projctbut">Payment Due</button>
                </div>
                <div className="ab col-sm-4">
                  <button className="projctbut">Deadline</button>
                </div>
                <div className="ab col-sm-4">
                  <button className="projctbut">Send invoice</button>
                </div>
              </div>
              <div className="mnp row">
                <div className="ab col-sm-4">
                  <button className="projctbut">Task</button>
                </div>
              </div>
              <span className="icondiv">
                <img className="iconspro" src={rec} alt="User-add-icon" />
                <img className="iconspro" src={tbl} alt="User-add-icon" />
              </span>
            </div>
          </div>
          <div class="abc col-sm-4">
            <div class="card">
              <p class="card-paragraphdate">10th june 2021</p>
              <h3 class="card-title1">Project name 1</h3>
              <p class="ab card-paragraph">
                <b>Client name</b> minim elitr intellegat. Mea aete rn o
                eleifend antiopam ad, nam{" "}
              </p>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="73"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  73%
                </div>
              </div>
              <div className="mnp row">
                <div className="ab col-sm-4">
                  <button className="projctbut">Payment Due</button>
                </div>
                <div className="ab col-sm-4">
                  <button className="projctbut">Deadline</button>
                </div>
                <div className="ab col-sm-4">
                  <button className="projctbut">Send invoice</button>
                </div>
              </div>
              <div className="mnp row">
                <div className="ab col-sm-4">
                  <button className="projctbut">Task</button>
                </div>
              </div>
              <span className="icondiv">
                <img className="iconspro" src={rec} alt="User-add-icon" />
                <img className="iconspro" src={tbl} alt="User-add-icon" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashproject;
