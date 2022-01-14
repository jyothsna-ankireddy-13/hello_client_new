import React from "react";
import "./CardIn.css";
import shopping from "./icon/shopping.svg";

function CardIn() {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="xyz col-sm-4">
          <div class="cardin">
            <span className="imgspan">
              <img className="iconscard" src={shopping} alt="User-add-icon" />
            </span>
            <div class="content">
              <h4 class="cardin-title">Revenue Management </h4>
              <p class="text">
                Eos tota dicunt democritum no. Has natum gubergren ne. Est viris
                soleat sadipscing cu. Legere epicuri insolens eu nec, dicit
                virtute urbanitas id nam, qui in habeo semper eligendi.
              </p>
            </div>
          </div>
        </div>
        <div class="xyz col-sm-4">
          <div class="cardin">
            <span className="imgspan">
              <img className="iconscard" src={shopping} alt="User-add-icon" />
            </span>
            <div class="content">
              <h4 class="cardin-title">Client Managment </h4>
              <p class="text">
                Eos tota dicunt democritum no. Has natum gubergren ne. Est viris
                soleat sadipscing cu. Legere epicuri insolens eu nec, dicit
                virtute urbanitas id nam, qui in habeo semper eligendi.
              </p>
            </div>
          </div>
        </div>
        <div class="xyz col-sm-4">
          <div class="cardin">
            <span className="imgspan">
              <img className="iconscard" src={shopping} alt="User-add-icon" />
            </span>
            <div class="content">
              <h4 class="cardin-title">Staff Management  </h4>
              <p class="text">
                Eos tota dicunt democritum no. Has natum gubergren ne. Est viris
                soleat sadipscing cu. Legere epicuri insolens eu nec, dicit
                virtute urbanitas id nam, qui in habeo semper eligendi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardIn;
