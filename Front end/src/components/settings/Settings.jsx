import { useNavigate } from "react-router-dom"
import {useState} from "react"
//https://generalassembly.instructure.com/courses/927/pages/react-router-dom?module_item_id=91677
//https://generalassembly.instructure.com/courses/927/pages/dom-events-video?module_item_id=91602
//https://generalassembly.instructure.com/courses/927/pages/controlled-forms-in-react-video?module_item_id=91673


const Settings = () => {
  
const navigate = useNavigate();
const [category, setCategory] = useState("")
const [difficulty, setDifficulty] = useState("")


return (
  <div className="settings-container">
    <header className="settings-header">
      <h1>Trivia Game Settings</h1>
    </header>

    <div className="settings-card">
      <div className="settings-field">
        <label htmlFor="category">Category</label>
        <select required name="category" id="category" value={category} onChange={(event) => setCategory(event.target.value)}>
          <option value="">Select Category</option>
          <option value="science">Science</option>
          <option value="history">History</option>
          <option value="animals">Entertainment</option>
          <option value="sports">Sports</option>
          <option value="technology">technology</option>
        </select>
      </div>

      <div className="settings-field">
        <label htmlFor="difficulty">Difficulty</label>
        <select required name="difficulty" id="difficulty" value={difficulty} onChange={(event) => setDifficulty(event.target.value)}>
          <option value="">Select Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
    </div>

    <footer className="settings-footer">
      {/* <button className="play-button" onClick={navigate(`/play/${category}/${difficulty}`)} >Play</button> */}
      {/* this was my original line of code and everytime I set a setting it would. render navigate with only the one setting field as the url param */}
      {/* and now im confused why it was doing that instead of just.. not working? */}
      <button className="play-button" onClick={() => navigate(`/play/${category}/${difficulty}`)} >Play</button>
    </footer>
  </div>
)

}
export default Settings