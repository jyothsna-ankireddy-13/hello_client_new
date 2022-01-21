import React from "react";
import "./Invoice.css";
import {useNavigate} from 'react-router-dom';

function Invoice() {

  const navigate = useNavigate()
  const addInvoice = async(e)=>{
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Authorization', 'Basic ' );
    headers.append('Origin','http://localhost:5001');
    const res = await fetch("/addinvoice", {
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
        <div className="Invoice nbar">
          <p className="Invoice ndesc">Add Revenue</p>
        </div>
        <div className="Invoice blk">
          <p className="Invoice choose quote">Quote </p>
          <p className="Invoice choose performa">Performa</p>
          <p className="Invoice choose">Invoice</p>
        </div>

        <section className="#quote">
          <div class="mb-3">
          <form method="POST">

            <div className="Invoice flx">
              <button type="button" class="Invoice logo"></button>
              
              <p className="aaaa">Invoice</p>
              <input
                type="text"
                class="Invoice form-control"
                id="formGroupExampleInput"
                placeholder="Send date"
              />
            </div>
            <input
              type="text"
              class="Invoice form-control"
              id="formGroupExampleInput"
              placeholder="Inoice number "
            />

            <div className="Invoice flx">
              <input type="text" class="Invoice f22" placeholder="Amount " />
            </div>

            <input
              type="text"
              class="Invoice form-control"
              id="formGroupExampleInput2"
              placeholder="Created by "
            />
            <input
              type="text"
              class="Invoice form-control"
              id="formGroupExampleInput2"
              placeholder="Send to"
            />
            <input
              type="text"
              class="Invoice form-control"
              id="formGroupExampleInput2"
              placeholder="Payment mode"
            />
            <input
              type="text"
              class="Invoice form-control Desc"
              id="formGroupExampleInput2"
              placeholder="Bill image"
            />
            <div className="Invoice ab flx">
              <button type="button" class="Invoice cardformbtna" >
                Next
              </button>
              <button type="button" class="Invoice cardformbtna" onClick={addInvoice}>
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

export default Invoice;
