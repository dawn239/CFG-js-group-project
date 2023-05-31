import React, { useState } from 'react';
import './club-buttons.css'

const ThursdayButton = () => {
    const [show, setShow] = useState(false);
    const onShowClick = () => {
        if (show === false) {
            setShow(true);
        } else setShow(false);
    };

    return (
        <div>
            
                <button onClick={onShowClick} className='dayButton'>Thursday</button>
                 {show && <div className='clubInfo'>
                    <h4>Homework Club</h4>
                    <p className='clubFact'>WHEN: Thursday 3.30pm - 4.30pm</p>
                    <p className='clubFact'>PRIMARIES: 1-7</p>
                    <p className='clubFact'>WHERE: Assembly Hall with Mr Mills</p>
                    
                </div>}
           
                       
        </div>
    )

}

export default ThursdayButton;
