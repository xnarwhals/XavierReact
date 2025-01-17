import "./index.scss";
import Button from "../../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faItchIo, faWindows, faApple} from "@fortawesome/free-brands-svg-icons";
import { faGamepad, faVrCardboard } from "@fortawesome/free-solid-svg-icons";


const Screen = ({ screenContent, currentCartridge }) => {
    if (!screenContent) {
        return <div className="screen">
            <p style={{color: "white"}}>Screen Error</p>;
        </div>
    }

    if (screenContent === "static") {
        return (
            <div className="screen">
                <div className="static-container" />
            </div>
        )
    }

    if (screenContent === "home") {
        return (
            <div className="screen">
                {currentCartridge ? (
                    <div
                        className="home-container"
                        style={{
                            color: currentCartridge.colors.textColor,
                            backgroundColor: currentCartridge.colors.mainColor,
                        }}
                    >
                        <img
                            src={currentCartridge.frontImg}
                            alt={currentCartridge.id}
                        />
                    </div>
                ) : (
                    <p style={{color: "white"}}>Drag and Drop!</p>
                )}
            </div>
        )
    }

    if (screenContent === "trailer") {
        return (
            <div className="screen">
                <div className="trailer-container">
                    <iframe
                        width="100%"
                        height="100%"
                        src={currentCartridge.trailerUrl}
                        title={`${currentCartridge.id} Trailer`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        )
    }

    if (screenContent === "itchio") {
        return (
            <div className="screen">
                <div className="itchio-container">
                    <a className="itchIcon" target="_blank" rel="noreferrer" href={currentCartridge.itchLink}>
                        <FontAwesomeIcon icon={faItchIo} color={currentCartridge.colors.mainColor} />
                    </a>
                    <Button label="Play Now" href={currentCartridge.itchLink} colors={currentCartridge.colors}/>
                </div>
            </div>
        )
    }

    if (screenContent === "credits") {
        return (
            <div className="screen">
                <div className="credits-container">

                    <p style={{color: currentCartridge.colors.mainColor}}> <br /> Lead Programmer <br /> {currentCartridge.gameGist} </p>
                    <img src={currentCartridge.backImg} alt={currentCartridge.id} />
                </div>
            </div>
        )
    }

    if (screenContent === "design") {
        return (
            <div className="screen">
                <div className="design-container">
                    <p>Design Tools</p>
                    <ul>
                        <li>
                            <i class="devicon-photoshop-plain" title="Photoshop" />
                        </li>
                        <li>
                            <i class="devicon-illustrator-plain" title="Illustrator" />
                        </li>
                        <li>
                            <i class="devicon-premierepro-plain" title="Premier Pro" />
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

    if (screenContent === "frameworks") {
        return (
            <div className="screen">
                <div className="frameworks-container">
                    <p>Frameworks</p>
                    <ul>
                        <li>
                            <i class="devicon-unity-plain" title="Unity" />          
                        </li>
                        <li>
                            <i class="devicon-react-original" title="React.js" />
                        </li>
                        <li>
                            <i class="devicon-unrealengine-original" title="Unreal" />
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

    if (screenContent === "languages") {
        return (
            <div className="screen">
                <div className="languages-container">
                    <p style={{marginTop: "-5px"}}>Languages</p>
                    <ul>
                        <li>
                            <i class="devicon-c-plain" title="C" style={{fontSize: "35px"}} />
                        </li>
                        <li>
                            <i class="devicon-cplusplus-plain" title="C++" style={{fontSize: "35px"}} />
                        </li>
                        <li>            
                            <i class="devicon-csharp-plain" title="C#" style={{fontSize: "35px"}} />
                        </li>
                        <li>
                            <i class="devicon-javascript-plain" title="JavaScript" style={{fontSize: "35px"}}/>
                        </li>
                        <li>
                            <i class="devicon-python-plain" title="Python" style={{fontSize: "35px"}} />
                        </li>
                        <li>
                            <i class="devicon-html5-plain" title="HTML5" style={{fontSize: "35px"}} />
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

    if (screenContent === "extra") {
        return (
            <div className="screen">
                <div className="extra-container">
                    <p>Extra</p>
                    <ul>
                        <li>
                            <i class="devicon-github-original" title="Github" />
                        </li>
                        <li>
                            <i class="devicon-sass-original" title="Sass" />
                        </li>
                        <li>            
                            <i class="devicon-json-plain" title="JSON" />
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

    if (screenContent === "experience") {
        return (
            <div className="screen">
                <div className="experience-container">
                    <h3>Experience</h3>
                    <p>{currentCartridge.experience}</p>
                </div>
            </div>
        )

    }

    if (screenContent === "platforms") {
        const platformIcons = {
            Windows: faWindows,
            Mac: faApple,
            "Controller Support": faGamepad,
            "Oculus Quest": faVrCardboard,
        }

        let platformsArray = currentCartridge.platforms.split(", ");

        if (currentCartridge.id === "Apt510") {
            platformsArray = platformsArray.slice(0, -2);
        }

        return (
            <div className="screen">
                <div className="platforms-container">
                    <h3>Platforms</h3>
                    <p>{currentCartridge.platforms}</p>
                    <ul>
                        {platformsArray.map((platform) => (
                            <li key={platform}>
                                <FontAwesomeIcon 
                                    icon={platformIcons[platform]} 
                                    color={currentCartridge.colors.mainColor} 
                                    className="icon"
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }


    
}

export default Screen;