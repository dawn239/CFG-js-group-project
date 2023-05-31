import React from 'react';
import './parents.css';
import Diary from './diary';
import { useNavigate } from 'react-router-dom';

function Parents () {
    let navigate = useNavigate();
    return (
    <div>
        <p>Welcome to the parent’s section of our new website. 
            Here you can find all the important information you 
            need about our school and links to useful websites. 
            Please take time to look through all the information 
            and if you have any questions just contact the school 
            office.</p>
        <div className='schoolday'>
            <h2>The School Day</h2>
            <ul>
                <li>School starts at 9am – doors open at 8.55am 
                    to allow pupils to come in and get ready for the 
                    day.</li>
                <li>Break 10.30-11.45am</li>
                <li>Lunch 12.15-1.15pm</li>
                <li>School finishes at 3.15pm – if you are 
                    collecting your child please do so promptly.</li>
            </ul>
            <img src='https://images.pexels.com/photos/1848731/pexels-photo-1848731.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='Pupil reading book in school' id='readingImg'/>
        </div>
        <div className='lunches'>
            <h2>Lunches</h2>
            <p>A free school lunch is available to all pupils from p1 
                to p5. For pupils in p6 and p7 school lunches can be 
                purchased for £2.15. Further information about the 
                lunches including the menus is 
                available <span><a href="https://www.tayside-contracts.co.uk/catering/school-catering" target="_blank">here</a></span>.</p> 
            <img src='https://images.pexels.com/photos/5905679/pexels-photo-5905679.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='Packed lunches on table' id='lunchImg' /> 
            <p>All pupils also have the option to bring a packed 
                lunch or go home for their lunch.</p>
        </div>
        <div className='uniform'>
            <h2>Uniform</h2>
            <p>Having a school uniform helps create a sense of identity 
                in the school. Pupils should choose from the following options;</p>
                <ul>
                    <li>Grey/black trousers, skirt, pinafore or shorts </li>
                    <li>White shirt or polo</li>
                    <li>Grey/black jumper or cardigan or a school sweatshirt</li>
                    <li>Blue Gingham dress (optional during the summer)</li>
                    <li>School tie (optional)</li>
                    <li>Black shoes</li>
                    <li>Grey/black socks or tights</li>
                </ul>
            <p>School ties and sweatshirts are available to buy from the school 
                wear shop in the city centre.</p>
        </div>
        <div className='parentCouncil'>
            <h2>The Parent Council</h2>
            <p>The parent council is made up of volunteers from the 
                parent body and meets each term to discuss issues and 
                organise events. Their fundraising helps pay for buses, 
                parties and other resources to expand the learning 
                experiences available in school. All parents are 
                welcome to attend meetings and further details will 
                be sent out before each meeting. Contact details for 
                the committee are below;</p>
                <ul>
                    <li>Chair – Jane Doe j.doe@madeupemail.com</li>
                    <li>Secretary – John Smith john_smith@anothermadeupemail.co.uk</li>
                    <li>Treasurer – Joe Bloggs JJBloggs@sameagain.com</li>
                </ul>
        </div>
        <div>
            <h2>This Month's Diary</h2>
            <p>Here is the diary for May. Please take note of any relevant events and information.</p>
            <Diary />
        </div>
        <div className='websites'>
            <h2>Useful Websites</h2>
            <ul>
                <li><a href='https://www.dundeecity.gov.uk/service-area/children-and-families-service/education/school-term-dates' target='_blank'>School term dates </a></li>
                <li><a href='https://education.gov.scot/education-scotland/' target='_blank'>Education Scotland </a></li>
                <li><a href='https://education.gov.scot/parentzone/' target='blank'>Parentzone Scotland </a></li>
                <li><a href='https://education.gov.scot/education-scotland/scottish-education-system/policy-for-scottish-education/policy-drivers/cfe-building-from-the-statement-appendix-incl-btc1-5/what-is-curriculum-for-excellence' target='_blank'>Curriculum for Excellence </a></li>
            </ul>
        </div>
        <button className='homepagebutton'
        onClick={() => {
            navigate("/");
        }}
        >Home</button>
    </div>
    )
}

export default Parents;