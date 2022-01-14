import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import { Button } from "react-responsive-button";
import "./ButtonCarousel.css";

const Buttoncarousel = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div style={{ padding: `0 ${chevronWidth}px`, background: `#DEECA3` }}>
      <p className="Over">Overview</p>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={7}
        gutter={20}
        leftChevron={<button className="arrowbtn">{"<"}</button>}
        rightChevron={<button className="arrowbtn">{">"}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div className="carouselbtn">
          <Button className="cbtn"> 33 </Button>
          <p className="pa">Projects</p>
        </div>
        <div className="carouselbtn">
          <Button className="cbtn"> 10,00,000 </Button>
          <p className="pa">Revenue</p>
        </div>
        <div className="carouselbtn">
          <Button className="cbtn"> 17 </Button>
          <p className="pa">Clients</p>
        </div>
        <div className="carouselbtn">
          <Button className="cbtn"> 8,75,000 </Button>
          <p className="pa">Profits</p>
        </div>
        <div className="carouselbtn">
          <Button className="cbtn"> 08</Button>
          <p className="pa">Delays</p>
        </div>
        <div className="carouselbtn">
          <Button className="cbtn"> 36,000 </Button>
          <p className="pa">Expenses</p>
        </div>
        <div className="carouselbtn">
          <Button className="cbtn"> 12 </Button>
          <p className="pa">Pending task</p>
        </div>
        <div className="carouselbtn">
          <Button className="cbtn"> 12 </Button>
          <p className="pa">Meets </p>
        </div>
        <div className="carouselbtn">
          <Button className="cbtn"> 12 </Button>
          <p className="pa">Alerts </p>
        </div>
      </ItemsCarousel>
    </div>
  );
};
export default Buttoncarousel;
