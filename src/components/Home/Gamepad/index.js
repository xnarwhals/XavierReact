import './index.scss';
import Gameboy from '../../../assets/images/Gameboy.png';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Gamepad = () => {
    const [inputs, setInputs] = useState([]);
    const [isKonamiUnlocked, setIsKonamiUnlocked] = useState(false);

    const KONAMI_CODE = ["Up", "Up", "Down", "Down", "Left", "Right", "Left", "Right", "B", "A"];

    const handleInput = (input) => {
        if (inputs.length >= 10) return; 

        const newInputs = [...inputs, input]; 
        setInputs(newInputs);
    
        if (newInputs.slice(-KONAMI_CODE.length).join(",") === KONAMI_CODE.join(",")) {
            setIsKonamiUnlocked(true); // Unlock the Konami feature immediately
        }

    };

    const resetInputs = () => {
        setInputs([]);
        setIsKonamiUnlocked(false);
    }

    return (
        // Change Start once idea
        <div className="gameboy">
            <img src={Gameboy} alt="Gameboy" className="gameboy-bg" />
            <div className="screen">
                <div className="screen-content">
                    {isKonamiUnlocked ? (
                        <>
                            <p>🎉 Konami Code Unlocked! 🎉</p>
                            <NavLink to="/secret" className="secret-icon">
                                <FontAwesomeIcon icon={faUserSecret} />
                            </NavLink>
                            <p>Click Me for Bonus Page!</p>
                        </>

                    ) : (
                        <h3>INPUT: {inputs.join(", ")}</h3>
                    )}
                    {inputs.length >= 10 && !isKonamiUnlocked &&
                        <p className="error">Try Again!</p>
                    }

                </div>
            </div>
            <div className="button dpad-up" onClick={() => handleInput("Up")}></div>
            <div className="button dpad-left" onClick={() => handleInput("Left")}></div>
            <div className="button dpad-right" onClick={() => handleInput("Right")}></div>
            <div className="button dpad-down" onClick={() => handleInput("Down")}></div>
            <div className="button button-a" onClick={() => handleInput("A")}></div>
            <div className="button button-b" onClick={() => handleInput("B")}></div> 
            <div className="button button-start" onClick={resetInputs}></div> 
            <div className="button button-select" onClick={resetInputs}></div>
            <div className="info">
            </div>
        </div>
    )
}

export default Gamepad;