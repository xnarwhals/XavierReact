import './index.scss';
import Loader from 'react-loaders'
import { Link } from 'react-router-dom';

const Achievments = () => {
    return (
        <>
            <div className="container achievments-page">
                <div className="text-area">
                    <h1>Achievments Page</h1>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Achievments;