//Basic structure for settings,

//TODO: add onClick and handler and will figure out API and passing setting states to gameplay component once routing is set up
//TODO: imports

const GameSettings = () => {





const onClickStartGame = () => {
    //placeholder for click logic 
}




    return (  //Need to add states over into gameplay, will try useNavigate or props later to pass settings data to gameplay component
    <div className="settings-page">
        <div className="settings-container">
            <input type="select" name="category" id="category-select">
                <option value="">Select Category</option>
                <option value="general">General Knowledge</option>
                <option value="music">Music</option>
                <option value="animals">Animals</option>
                <option value="sports">Sports</option>
                <option value="gaming">Video Games</option>
            </input>

            <input type="select" name="difficulty" id="difficulty-select">
                <option value="">Select Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </input>

            <input type="select" name="type" id="type-select">
                <option value="">Select Type</option>
                <option value="multiple">Multiple Choice</option>
                <option value="boolean">True / False</option>
            </input>

            <input type="number" name="number-of-questions" id="number-of-questions" min="1" max="50" placeholder="Number of Questions (1-50)"/>

            <input type="number" name="time-limit" id="time-limit" min="10" max="300" placeholder="Time Limit (10-300 seconds)"/>

            <button className="start-game-button">Start Game</button>
        </div>


        <div className="highscore-container">



        </div>

        
    </div>
    )



}

export default GameSettings;