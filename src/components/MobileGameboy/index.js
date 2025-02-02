import "./index.scss"
import Loader from "react-loaders";
import Gamepad from "../Home/Gamepad";


const MobileGameboy = () => {
    return (
        <>
            <div className="container gameboy-page">
                <Gamepad />
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default MobileGameboy;