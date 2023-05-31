import React, { useState } from 'react';
import './club-buttons.css'

const FridayButton = () => {
    const [show, setShow] = useState(false);
    const onShowClick = () => {
        if (show == false) {
            setShow(true);
        } else setShow(false);
    };

    return (
        <div>
            
                <button onClick={onShowClick} className='dayButton'>Friday</button>
                 {show && <div><div className='clubInfo'>
                    <h4>Library Club</h4>
                    <p className='clubFact'>WHEN: Friday Lunchtime</p>
                    <p className='clubFact'>PRIMARIES: 1-7</p>
                    <p className='clubFact'>WHERE: Library with Mrs Davis</p>
                    </div>
                    <div className='clubInfo'>
                    <h4>Netball</h4>
                    <p className='clubFact'>WHEN: Friday 3.30pm -4.30pm</p>
                    <p className='clubFact'>PRIMARIES: 5-6</p>
                    <p className='clubFact'>WHERE: Gym Hall with Miss Peters</p>
                </div></div>}
           
                       
        </div>
    )

}

export default FridayButton;
