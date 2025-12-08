import { useNavigate } from "react-router-dom"

import {useState} from "react"
import Highscore from "./Highscore";
import "./settings.css";


//https://generalassembly.instructure.com/courses/927/pages/react-router-dom?module_item_id=91677
//https://generalassembly.instructure.com/courses/927/pages/dom-events-video?module_item_id=91602
//https://generalassembly.instructure.com/courses/927/pages/controlled-forms-in-react-video?module_item_id=91673



  const Settings = ({ userName }) => {

const navigate = useNavigate();
const [category, setCategory] = useState("")
const [difficulty, setDifficulty] = useState("")







return (
  
  <div className="settings-container">

    <header className="settings-header">

    </header>

    <div className="settings-card select-success text-center">
      <div className="settings-field" id="button">
        
  
        <select  className="select select-accent " id="category" value={category} onChange={(event) => setCategory(event.target.value)}>
          <option disabled value="">Select Category </option>
          <option value="science">Science</option>
          <option value="history">History</option>
          <option value="animals">Animals</option>
          <option value="sports">Sports</option>
          <option value="technology">technology</option>
        </select>
      </div>

      <div className="settings-field" id="button">
        
        <select required className="select select-secondary "  id="difficulty" value={difficulty} onChange={(event) => setDifficulty(event.target.value)}>
          <option disabled value="">Select Difficulty  </option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div> 
{/* highscore or extra content area */}
     

      </div>
 <div>
  <Highscore/>  
   </div> <div>
      {/* <button className="play-button" onClick={navigate(`/play/${category}/${difficulty}`)} >Play</button> */}
      {/* this was my original line of code and everytime I set a setting it would. render navigate with only the one setting field as the url param */}
      {/* and now im confused why it was doing that instead of just.. not working? */}
      <button className="play-button" onClick={() => navigate(`/play/${category}/${difficulty}`)} >Play</button>
    </div></div>
  </div>
)

}
export default Settings