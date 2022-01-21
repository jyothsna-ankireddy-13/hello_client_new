import React from "react";
import { Button } from "react-responsive-button";
import "react-responsive-button/dist/index.css";
import "./Buttonup.css";
import user_add from "./icons/User_add.svg";
import gift from "./icons/Gift_light.svg";
import folder from "./icons/Folder_add_light.svg";
import group from "./icons/Group 3.svg";
import {useNavigate} from 'react-router-dom';
const App = () => {

  const navigate = useNavigate()
  const newcustomer = () =>{
    navigate('/addcustomer')
  }
  return (
    <>
    <div className="page">
      <section>
        <div className="buttons-outer">
        <div className="button-wrapper">
            <Button bordered onClick={newcustomer}><img className='iconsdash' src ={user_add} alt="User-add-icon" /> Add Customer</Button>
          </div>
          
          <div className="button-wrapper">
            <Button bordered><img className='iconsdash' src ={gift} alt="User-add-icon" /> Add services</Button>
          </div>
          <div className="button-wrapper">
            <Button bordered><img className='iconsdash' src ={folder} alt="User-add-icon" /> Add project </Button>
          </div>
          <div className="button-wrapper">
            <Button bordered><img className='iconsdash' src ={group} alt="User-add-icon" /> Add mate</Button>
          </div>
          <div className="button-wrapper">
            <Button bordered><img className='iconsdash' src ={group} alt="User-add-icon" /> Add opex</Button>
          </div>
        </div>
      </section>
    </div>

           
    </>
    
  );
};

export default App;
