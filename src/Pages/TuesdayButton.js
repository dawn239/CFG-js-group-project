import React, { useState } from 'react';
import './club-buttons.css'

const TuesdayButton = () => {
    const [show, setShow] = useState(false);
    const onShowClick = () => {
        if (show === false) {
            setShow(true);
        } else setShow(false);
    };

    return (
        <div>
            
                <button onClick={onShowClick} className='dayButton'>Tuesday</button>
                 {show && <div className='clubInfo'>
                    <h4>Dance</h4>
                    <p className='clubFact'>WHEN: Tuesday Lunchtime</p>
                    <p className='clubFact'>PRIMARIES: 1-3</p>
                    <p className='clubFact'>WHERE: Assembly Hall with Mr Taylor</p>
                </div>}
            
                       
        </div>
    )

}

export default TuesdayButton;
