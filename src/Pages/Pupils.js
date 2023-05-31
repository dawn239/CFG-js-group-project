import React from "react";
import "./pupils.css";
import MondayButton from "./MondayButton";
import TuesdayButton from "./TuesdayButton";
import WednesdayButton from "./WednesdayButton";
import ThursdayButton from "./ThursdayButton";
import FridayButton from "./FridayButton";
import { useNavigate } from 'react-router-dom';

function Pupils() {
  let navigate = useNavigate();
  return (
    <div>
      <p id="aboutPupils">
        Welcome to the Pupil’s section of our new website. Here you can find out
        about different things happening in school. You can also find links to
        interesting websites you might want to visit.
      </p>
      <div className="houses">
        <h2>Houses</h2>
        <p>
          All pupils are sorted into one of our houses when they start school.
          These houses work together to earn points through following our school
          rules and participating in events. Our houses each have a p7 house
          captain who is voted for at the start of the year. Here are our houses
          and their captains this year.
        </p>
        <p id="gryffindor">Gryffindor – Hermione Granger</p>
        <p id="ravenclaw">Ravenclaw – Padma Patil</p>
        <p id="hufflepuff">Hufflepuff – Ernie MacMillan</p>
        <p id="slytherin">Slytherin - Pansy Parkinson</p>
      </div>
      <div className="committees">
        <h2>Committees</h2>
        <p>
          We have several committees in the school. Pupils are elected to
          represent their classes at the committees each year. The committees
          meet regularly with staff to plan and work on their areas of
          responsibility. This year our committees are;
        </p>
        <ul>
          <li>Eco schools committee</li>
          <li>Rights respecting schools committee</li>
          <li>Digital schools committee</li>
        </ul>
        <img src='https://images.pexels.com/photos/9870434/pexels-photo-9870434.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='Pupils watering plants' id='ecoImg' />
        <p id="ecoCaption">Pupils from the Eco schools committee watering our plants.</p>
      </div>
      <div className="clubs">
        <h2>Clubs</h2>
        <p>
          We have several clubs running within the school which pupils can
          participate in. Please select a day to see what is available.
        </p>
        <div className="dayButtons">
        <MondayButton /><TuesdayButton /><WednesdayButton /><ThursdayButton /><FridayButton />
        </div>
      </div>
      <div className="pupilWebsites">
        <h2>Useful Websites</h2>
        <p>
          Here are some websites you might want to visit. We will use them in
          class too.
        </p>
        <ul>
          <li>
            <a href="https://www.bbc.co.uk/bitesize" target="_blank">
              BBC bitesize
            </a>
          </li>
          <li>
            <a href="https://www.sumdog.com/user/sign_in" target="_blank">
              Sumdog
            </a>
          </li>
          <li>
            <a href="https://www.topmarks.co.uk/ " target="_blank">
              Topmarks
            </a>
          </li>
          <li>
            <a href="https://scratch.mit.edu/" target="_blank">
              Scratch
            </a>
          </li>
        </ul>
      </div>
      <button className='homepagebutton'
        onClick={() => {
            navigate("/");
        }}
        >Home</button>
    </div>
  );
}

export default Pupils;