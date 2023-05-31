import React, { useState } from 'react';
import './club-buttons.css'

const WednesdayButton = () => {
    const [show, setShow] = useState(false);
    const onShowClick = () => {
        if (show === false) {
            setShow(true);
        } else setShow(false);
    };

    return (
        <div>
            
                <button onClick={onShowClick} className='dayButton'>Wednesday</button>
                 {show && <div className='clubInfo'>
                    <h4>Football</h4>
                    <p className='clubFact'>WHEN: Wednesday 3.30pm - 4.30pm</p>
                    <p className='clubFact'>PRIMARIES: 5-7</p>
                    <p className='clubFact'>WHERE: Gym Hall with Mr Moore</p>
                </div>}
               
        </div>
    )

}

export default WednesdayButton;
