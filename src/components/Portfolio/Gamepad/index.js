import "./index.scss";
import { useDrop } from "react-dnd";
import { useState } from "react";

import Gameboy from "../../../assets/images/Gameboy.png";
import Screen from "../Screen";

const Gamepad = ({ onCartridgeInsert }) => { // insertedCartridge is not used in this component
    const [currentCartridge, setCurrentCartridge] = useState(null);
    const [screenContent, setScreenContent] = useState("home");

    const [sceneIndexUpDown, setScreenIndexUpDown] = useState(0); // up and down button functionality
    const verticalScenes = ["home", "languages", "extra", "frameworks", "design"];

    const [sceneIndexLeftRight, setScreenIndexLeftRight] = useState(0); // left and right button functionality
    const horizontalScenes = ["home", "experience", "platforms"];

    const [isTransitioning, setIsTransitioning] = useState(false);

    const [{ isOver }, dropRef] = useDrop(() => ({
        accept: "CARTRIDGE",
        drop: (item) => {
            setCurrentCartridge(item);
            onCartridgeInsert(item);
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const handleButtonInput = (button) => {
        if (isTransitioning) return;
        
        const applyTransition = (newScreen) => {
            setIsTransitioning(true);
            setScreenContent("static");

            setTimeout(() => {
                setScreenContent(newScreen);
                setIsTransitioning(false);
            }, 400);
        }

        if (button === "A" && currentCartridge && currentCartridge.trailerUrl) {
            applyTransition("trailer")
        } else if (button === "B" && currentCartridge && currentCartridge.itchLink) {
            applyTransition("itchio")
        } else if (button === "Start" && currentCartridge) {
            applyTransition("home")
        } else if (button === "Select" && currentCartridge && currentCartridge.backImg) {
            applyTransition("credits")
        } else if (button === "Up") {
            setScreenIndexUpDown ((prevIndex) => {
                const newIndex = (prevIndex - 1 + verticalScenes.length) % verticalScenes.length;
                applyTransition(verticalScenes[newIndex]);
                return newIndex;
            });
        } else if (button === "Down") {
            setScreenIndexUpDown ((prevIndex) => {
                const newIndex = (prevIndex + 1) % verticalScenes.length;
                applyTransition(verticalScenes[newIndex]);
                return newIndex;
            });
        } else if (button === "Left" && currentCartridge) {
            setScreenIndexLeftRight ((prevIndex) => {
                const newIndex = (prevIndex - 1 + horizontalScenes.length) % horizontalScenes.length;
                applyTransition(horizontalScenes[newIndex]);
                return newIndex;
            });

        } else if (button === "Right" && currentCartridge) {
            setScreenIndexLeftRight ((prevIndex) => {
                const newIndex = (prevIndex + 1) % horizontalScenes.length;
                applyTransition(horizontalScenes[newIndex]);
                return newIndex;
            });
        }
    }

    return (
        <div className="gamepad">
            <img src={Gameboy} alt="Gameboy" className="gameboy-image" />
            
            <Screen screenContent={screenContent} currentCartridge={currentCartridge} />

            <div ref={dropRef} className={`drop-area ${isOver && !currentCartridge ? "highlight" : ""}`}
                style=
                    {{ border: currentCartridge ? "none" : "2px dashed #00ff9d",
            }}>
                    {currentCartridge ? (
                        <img src={currentCartridge.image} alt={currentCartridge.id} className="cartridge-image" />
                    ):( 
                        <p><br />Insert Cartridge</p>
                    )}
                </div>
                <div className="button button-a" onClick={() => handleButtonInput("A")} /> 
                <div className="button button-b" onClick={() => handleButtonInput("B")} />

                <div className="button up" onClick={() => handleButtonInput("Up")} />
                <div className="button down" onClick={() => handleButtonInput("Down")} />
                <div className="button left" onClick={() => handleButtonInput("Left")} />
                <div className="button right" onClick={() => handleButtonInput("Right")}/>
                
                <div className="button start" onClick={() => handleButtonInput("Start")}/>
                <div className="button select" onClick={() => handleButtonInput("Select")} />
        </div>
    )
}


export default Gamepad;