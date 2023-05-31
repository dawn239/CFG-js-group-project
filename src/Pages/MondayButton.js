import React, { useState } from 'react';
import './club-buttons.css'

const MondayButton = () => {
    const [show, setShow] = useState(false);
    const onShowClick = () => {
        if (show === false) {
            setShow(true);
        } else setShow(false);
    };

    return (
        <div>
            
                <button onClick={onShowClick} className='dayButton'>Monday</button>
                 {show && <div className='clubInfo'>
                    <h4>Choir</h4>
                    <p className='clubFact'>WHEN: Monday Lunchtime</p>
                    <p className='clubFact'>PRIMARIES: 4-7</p>
                    <p className='clubFact'>WHERE: Music room with Miss Harris</p>
                </div>}
            
                       
        </div>
    )

}

export default MondayButton;

