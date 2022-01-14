import React from "react";
import GraphUnit from "./GraphUnit/GraphUnit";
import "./Graph.css";
import ProjSection from "./GraphUnit/ProjSection";

function Graph() {
  return (
    <div>
      <div className="ijk container-fluid">
        <div className="ijk row">
          <div className="ijk col-sm-6">
            <h1>Profits</h1>
            <p>
              Sum of the value being represented after cutting out sum of taxes
              , third party payments and sum of totol expenses by the resources
              with respect to there cost per hour{" "}
            </p>
            <div className="col-sm-4">
              <button className="graphinfo">115% last month</button>
            </div>
          </div>
          <div className="ab col-sm-6">
            <GraphUnit />
          </div>
        </div>
      </div>
      <ProjSection />
    </div>
  );
}

export default Graph;
