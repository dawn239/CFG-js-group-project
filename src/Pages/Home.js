import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';


function Home() {
    let navigate = useNavigate();
    return (
    <div>
        <h3>Welcome everyone to our new school website!</h3>
        <p>As we continue on our digital journey we will be adding more features and 
            information. For just now we have two pages full of useful information; 
            one for parents and one for pupils. Please select the correct option to 
            get to the page you require.</p>
            <p> Kickstarter Primary School is a co-educational school supportive of 
                developing the youth into the brightest minds they can be. 
                At Kickstarter Primary School we have a tradition of showing others 
                our diverse skillset from academic excellence to creationism and 
                showcasing our fantastic athletic facilities. If you would like a 
                tour of our school please inquire below </p>

        <button className='homepagebutton'
        onClick={() => {
            navigate("/Parents");
        }}
        >I am a parent</button>
        <button className='homepagebutton'
        onClick={() => {
            navigate("/Pupils");
        }}
        >I am a pupil</button>
    </div>
    )
}

export default Home;