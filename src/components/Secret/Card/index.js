import "./index.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Card = ({ packType, prompt, promptType, answer, rarity, icon}) => {
    const isValidIcon = (icon) => {
        try {
            new URL(icon)
            return true
        } catch (_) {
            return false
        }
    }

    const placeholderIcon = require(`../../../assets/images/CardIcon.png`);
    const renderStars = (rarity) => {
        const rarityNum = parseInt(rarity, 10);
        return [...Array(rarityNum)].map((_, index) => (
            <FontAwesomeIcon key={index} icon={faStar} className="star-icon" />
        ))
    }

    return (
        <div className="card">
            <img src={require(`../../../assets/images/Card${packType}.png`)} alt={packType} className="card-image" />
            <div className="card-content">
                <div className="icon-container">
                    <img src={isValidIcon(icon) ? icon : placeholderIcon} alt="icon" className="icon" />
                </div>
                <h2 className="prompt-box">{promptType}<br/>{prompt}</h2>
                <p className="answer-box">{answer}</p>
                <div className="rarity-box">
                    {renderStars(rarity)}
                </div>

            </div>
        </div>
    );
};

export default Card;