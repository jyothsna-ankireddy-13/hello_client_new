import React from 'react'
import './Performa.css';
import {useNavigate} from 'react-router-dom';
function Performa() {
  const navigate = useNavigate()
  const Invoice = () =>{
    navigate('/invoice')
  }
  const addPerforma = async(e)=>{
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Authorization', 'Basic ' );
    headers.append('Origin','http://localhost:5001');
    const res = await fetch("/addperforma", {
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
        <div className="Performa nbar">
          <p className="Performa ndesc">Add Revenue</p>
        </div>
        <div className="Performa blk">
          <p className="Performa choose quote">Quote </p>
          <p className="Performa choose performa">Performa</p>
          <p className="Performa choose">Invoice</p>
        </div>
        <section className="#quote">
          <div class="mb-3">
            <form method="POST">
            <div className="Performa flx">
              <button type="button" class="Performa logo"></button>
              <p className='aa'>Performa Invoice</p>
              <input
                type="text"
                class="Performa form-control"
                id="formGroupExampleInput"
                placeholder="Send date"
              />
            </div>
            <input
              type="text"
              class="Performa form-control"
              id="formGroupExampleInput"
              placeholder="Per. Inoice number "
            />

            <div className="Performa flx">
            <input
                type="text"
                class="Performa f22"
                placeholder="Price"
              />
              
              <input
                type="text"
                class="Performa f22"
                placeholder="Reminder date"
              />
            </div>

            <input
              type="text"
              class="Performa form-control"
              id="formGroupExampleInput2"
              placeholder="Created by "
            />
            <input
              type="text"
              class="Performa form-control"
              id="formGroupExampleInput2"
              placeholder="Send to"
            />
                        <input
              type="text"
              class="Performa form-control"
              id="formGroupExampleInput2"
              placeholder="Payment mode"
            />
            <input
              type="text"
              class="Performa form-control Desc"
              id="formGroupExampleInput2"
              placeholder="Bill image"
            />
            <div className="Performa ab flx">
            <button type="button" class="Performa cardformbtna" onClick={Invoice}>
              Next
            </button>
            <button type="button" class="Performa cardformbtna" onClick={addPerforma}>
                Save
            </button>
            </div>
            </form>
          </div>
        </section>
      </div>
    </div>
    )
}

export default Performa
