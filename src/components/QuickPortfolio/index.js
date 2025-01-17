import "./index.scss";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { useState } from "react";

import Selva from "../../assets/images/Game_Selva.png";
import Colorezz from "../../assets/images/Game_Colorezz.png";
import Apt510 from "../../assets/images/Game_Apt510.png";
import Gameboy from "../../assets/images/Gameboy.png";


// HUGE NOTE, let variable is not the best way since issues arrise when switching 
// Find better solution for this 
const QuickPortfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate')
    const strArray = ['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o'];

    let isMobile = window.innerWidth < 768;

    
    return (
        <>
            <div className="container quick-potfolio-page">
                {isMobile && (
                    <div className="gameboy-img">
                        <h1>Full experience on Laptop!</h1>
                        <img src={Gameboy} alt="Gameboy" />
                    </div>
                )}
                <div className="text-area"> 
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={[strArray]} idx={9} />
                    </h1>
                    <h2>Gam·i·fy <br /> /ˈɡāməˌfī/ verb</h2>
                    <h3>apply typical elements of game playing to an activity typically 
                        as an online marketing technique to encourage engagement with a product or service</h3>
                </div>
                <div className="right-display">
                    <ul>
                        <li>
                            <h2>Languages</h2>
                            <i class="devicon-c-plain" title="C">
                                <span>C</span>
                            </i>
                            <i class="devicon-cplusplus-plain" title="C++">
                                <span>C++</span>
                            </i>
                            <i class="devicon-csharp-plain" title="C#">
                                <span>C#</span>
                            </i>
                            <i class="devicon-javascript-plain" title="JavaScript">
                                <span>JavaScript</span>
                            </i>
                            <i class="devicon-python-plain" title="Python">
                                <span>Python</span>
                            </i>
                            <i class="devicon-html5-plain" title="HTML5">
                                <span>HTML5</span>
                            </i>
                        </li>
                        <li>
                            <h2>Frameworks</h2>
                            <i class="devicon-unity-plain" title="Unity">
                                <span>Unity</span>
                            </i>    
                            <i class="devicon-react-original" title="React.js">
                                <span>React.js</span>
                            </i>
                            <i class="devicon-unrealengine-original" title="Unreal">
                                <span>Unreal</span>
                            </i>
                        </li>
                        <li>
                            <h2>Tools</h2>
                            <i class="devicon-visualstudio-plain" title="Visual Studio">
                                <span>Visual Studio</span>
                            </i>
                            <i class="devicon-photoshop-plain" title="Photoshop">
                                <span>Photoshop</span>
                            </i>
                            <i class="devicon-illustrator-plain" title="Illustrator">
                                <span>Illustrator</span>
                            </i>
                            <i class="devicon-premierepro-plain" title="Premier Pro">
                                <span>Premier Pro</span>
                            </i>
                        </li>
                        <li>
                            <h2>Misc</h2>
                            <i class="devicon-github-plain" title="Github">
                                <span>Github</span>
                            </i>
                            <i class="devicon-sass-original" title="Sass">
                                <span>Sass</span>
                            </i>
                            <i class="devicon-json-plain" title="JSON">
                                <span>JSON</span>
                            </i>
                        </li>
                        <li>
                            <h2>Game Projects</h2>
                            <div className="game-text">
                                <div className="project">
                                    <h3>
                                        Apartment 510
                                        <h4>2024 VR Puzzle Escape Room</h4>
                                    </h3>
                                    
                                    <p>First 3D Project, Baked Lighting, Use of Static Data, and Understanding of Unity XR Interaction Framework</p>
                                    <img src={Apt510} alt="Apt510" />
                                </div>
                                <div className="project">
                                    <h3>
                                        Colorezz
                                        <h4>2023 Fixed 2D First Person Shooter</h4>
                                    </h3>
                                    <p>Basic Shader Graph, Unity New Input System, Version Control, and Working with Other Programmers</p>
                                    <img src={Colorezz} alt="Colorezz" />
                                </div>
                                <div className="project">
                                    <h3>
                                        Selva
                                        <h4>2022 Jungle Adventure 2D Platformer</h4>
                                    </h3>
                                   
                                    <p>Unity Engine Workflow, Dynamic Player Movement, Intro to C#, and Tilemaping</p>
                                    <img src={Selva} alt="Selva" />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}


export default QuickPortfolio;
