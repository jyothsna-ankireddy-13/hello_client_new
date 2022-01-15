import React from 'react';
import './ProjectDescription.css';
import profile from './Ellipse 55.png';

function ProjectDescription() {
    return (
        <div className='asd'>
            <p className='arrow'>Projects {'>'} <b>Smartinterz and ...</b></p>
            <h1 className='Projh1'><b>SmartInternz a way into the future website and marketing task Project 1</b></h1>
            <span className='inliineprofile'><img className='profilelogo' src={profile} alt="Logo" />
            <p className='profilename'>Jyoti Maykeer (Senior Developer)</p>
            <p className='uploaddate'>Dec 2 . 05:35 am .2021 </p></span>
            <p className='projdesc'>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum. Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.<br></br>
            1. Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae <br></br>
            2. Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te<br></br>
            3. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te</p>
        </div>
    )
}

export default ProjectDescription
