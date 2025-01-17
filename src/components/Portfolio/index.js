import Loader from "react-loaders";
import { useState } from "react";
import AnimatedLetters from "../AnimatedLetters";

import Cartridge from "./Cartridge";
import CartridgeData from "./CartridgeData";
import Gamepad from "./Gamepad";
import InfoDisplay from "./InfoDisplay";
import Button from "../Button";

import "./index.scss";

const Portfolio = () => {
    const strArray = ['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']
    const [insertedCartridge, setInsertedCartridge] = useState(null);
    const [letterClass, setLetterClass] = useState('text-animate')

    const handleCartridgeInsert = (cartridge) => {
        setInsertedCartridge(cartridge); 
    }

    

    // Maybe come back to make more creative button informaton display
    return (
        <>
            <div className="container portfolio-page">
                <div className="text-area">
                    <Button label={'Quick Portfolio'} to = "/quick-portfolio" />
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={strArray} idx={9} />
                    </h1>
                    <h2>Gam·i·fy <br /> /ˈɡāməˌfī/ verb</h2>
                    <h3>apply typical elements of game playing to an activity typically 
                        as an online marketing technique to encourage engagement with a product or service</h3>
                </div>
                <div className="project-area">
                    <Gamepad
                            insertedCartridge={insertedCartridge}
                            onCartridgeInsert={handleCartridgeInsert}
                    />
                    <InfoDisplay />
                </div>
                <div className="cartridge-area">
                    <ul>
                        {CartridgeData.map((cartridge) => (
                            <li key={cartridge.id}>
                                <Cartridge cartridgeData={cartridge} />
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}


export default Portfolio;