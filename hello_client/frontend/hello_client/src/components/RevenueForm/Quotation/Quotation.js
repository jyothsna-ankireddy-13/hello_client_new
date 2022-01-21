import React from "react";
import "./Quotation.css";
import {useNavigate} from 'react-router-dom';

function Quotation() {
  const navigate = useNavigate()
  const Performa = () =>{
    navigate('/performa')
  }
  const addQuotation = async(e)=>{
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Authorization', 'Basic ' );
    headers.append('Origin','http://localhost:5001');
    const res = await fetch("/addquotation", {
        mode: 'cors',
        credentials: 'include',
        method: 'POST',
        headers: headers
    })
    
    const data = res.json()
    if(res.status=== 422 || !data){
        window.alert("Invali credentials")
    }else{
        
        navigate('/revenue')
        
    }

    
}
  return (
    <div>
      <div className="container">
        <div className="Quotation nbar">
          <p className="Quotation ndesc">Add Revenue</p>
        </div>
        <div className="Quotation blk">
          <p className="Quotation choose quote">Quote </p>
          <p className="Quotation choose performa">Performa</p>
          <p className="Quotation choose">Invoice</p>
        </div>
        
        <section className="#quote">
          <div class="mb-3">
          <form method="POST">
            <div className="Quotation flx">
              <button type="button" class="Quotation logo"></button>
              <p className="aaa">Quotation</p>
              <input
                type="text"
                name="sendDate"
                class="Quotation form-control"
                id="formGroupExampleInput"
                placeholder="Send date"
              />
            </div>
            <input
              type="text"
              name="quoteNumber"
              class="Quotation form-control"
              id="formGroupExampleInput"
              placeholder="Quote number"
            />

            <div className="Quotation flx">
              <input type="text" name="price" class="Quotation f22" placeholder="Price" />

              <input type="text" name="reminderDate" class="Quotation f22" placeholder="Reminder date" />
            </div>

            <input
              type="text"
              name="createdBy"
              class="Quotation form-control"
              id="formGroupExampleInput2"
              placeholder="Created by "
            />
            <input
              type="text"
              name="sendTo"
              class="Quotation form-control"
              id="formGroupExampleInput2"
              placeholder="Send to"
            />
            <input
              type="text"
              name="paymentMode"
              class="Quotation form-control"
              id="formGroupExampleInput2"
              placeholder="Payment mode"
            />
            <input
              type="text"
              name="billImage"
              class="Quotation form-control Desc"
              id="formGroupExampleInput2"
              placeholder="Bill image"
            />
            <div className="Quotation ab flx">
              <button type="button" class="Quotation cardformbtna" onClick={Performa}>
                Next
              </button>
              <button type="button" class="Quotation cardformbtna" onClick={addQuotation}>
                Save
              </button>
            </div>
            </form>
          </div>
        </section>
        
      </div>
    </div>
  );
}

export default Quotation;
