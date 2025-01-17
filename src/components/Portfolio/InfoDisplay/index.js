import "./index.scss";

const InfoDisplay = () => {
    // add layout for a, b, select, start, up/down, left/right buttons
    // ex a is for changing screen to video trailer 
    // make it nice by also creating scss
    return (
        <div className="info-display">
            <h2>How To Play</h2>
            <ul>
                <li>
                    Press <span className="button-label">A</span> to view the trailer
                </li>
                <li>
                    Press <span className="button-label">B</span> to view Itch.io page
                </li>
                <li>
                    Press <span className="button-label">Select</span> to view the game gist
                </li>
                <li>
                    Press <span className="button-label">Start</span> to return the home screen
                </li>
                <li>
                    <span className="button-label">Up/Down</span> buttons to navigate core skills
                </li>
                <li>
                    <span className="button-label">Left/Right</span> buttons for game specific info
                </li>
            </ul>
        </div>
    )
}

export default InfoDisplay;