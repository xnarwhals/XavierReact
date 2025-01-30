import "./index.scss";
import Loader from 'react-loaders'
import Card from "./Card";
import CardData from "./Card/CardData";
import leftButton from "../../assets/images/leftarrow.png";
import rightButton from "../../assets/images/rightarrow.png";

import { useState, Suspense} from 'react'
import { PresentationControls, Environment} from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
import { Model as BoosterPack } from './BoosterPack.js';
import { EffectComposer, Bloom } from '@react-three/postprocessing'



const Secret = () => {

    const [selectedPack, setSelectedPack] = useState('Selva')
    const [selectedCard, setSelectedCard] = useState(null)

    const [openPack, setOpenPack] = useState(false)
    
    const [displayedCards, setDisplayedCards] = useState([])
    const [currentCardIndex, setCurrentCardIndex] = useState(0);


    const changePack = (newPack) => {
        setOpenPack(false);
        setSelectedPack(newPack);
    };

    const handleOpeningPack = () => {
        const card = CardData.find((c) => c.id === selectedPack);
        if (!card) return;
        if (selectedPack === selectedCard) return;
        
        const availablePromptTypes = card.types; // Favorite, Statistic, etc.
        let selectedCards = [];
        let usedIndices = new Set();

        while (selectedCards.length < 3) {
            const randomPromptType = availablePromptTypes[Math.floor(Math.random() * availablePromptTypes.length)];
            
            const promptsArray = randomPromptType === "My Favorite " ? card.promptsFavorite : card.promptsStatistic
            const answersArray = randomPromptType === "My Favorite " ? card.answersFavorite : card.answersStatistic

            if (!promptsArray || promptsArray.length === 0) continue

            let index;
            do {
                index = Math.floor(Math.random() * promptsArray.length);
            } while (usedIndices.has(index));
    
            usedIndices.add(index);
    
            selectedCards.push({
                promptType: randomPromptType, // "Favorite" or "Statistic"
                rarity : card.rarities[Math.floor(Math.random() * card.rarities.length)],
                prompt: promptsArray[index],
                answer: answersArray[index]
            });
        }

        setDisplayedCards(selectedCards);
        setSelectedCard(selectedPack);
        setCurrentCardIndex(0);
        setOpenPack(true);
    };

    const handleNext = () => {
        setCurrentCardIndex((prevIndex) =>
            prevIndex === displayedCards.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentCardIndex((prevIndex) =>
            prevIndex === 0 ? displayedCards.length - 1 : prevIndex - 1
        );
    };

    return (
        <>
            <div className = "container secret-page">
                <h1>Fun Facts About Me!</h1>
                <div className="canvas-area">
                    <Canvas dpr={[1, 2]} shadows camera={{ fov: 45, position: [0, 0, 10] }}> 
                        <EffectComposer>
                            <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.2} intensity={1.5} />
                        </EffectComposer>
                            <Environment preset="city" />
                            <color attach="background" args={["#800000"]} />
                            <ambientLight intensity={.2} />
                            <directionalLight position={[10, 10, 10]} intensity={.8} castShadow />
                            <Suspense fallback={null}>
                                <PresentationControls
                                    global
                                    config={{ mass: 2, tension: 500 }}
                                    snap={{ mass: 4, tension: 1500 }}
                                    rotation={[0, 0, 0]}
                                    polar={[-Math.PI / 3, Math.PI / 3]}
                                    azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
                                    <BoosterPack rotation={[0, 0, 0]} position={[0, 0, 0]} scale={.8} cover={selectedPack} isOpen={openPack}/>
                                </PresentationControls>
                            </Suspense>
                    </Canvas>
                    <div className="options">
                        <ul>
                            <li>
                                <button onClick={() => changePack('Selva')}>Selva Pack</button>
                            </li>
                            <li>
                                <button onClick={() => changePack('Colorezz')}>Colorezz Pack</button>
                            </li>
                            <li>
                                <button onClick={() => changePack('VPVR')}>VPVR Pack</button>
                            </li>
                            <li>
                                <button onClick={handleOpeningPack}>Open!</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card-area">
                    {displayedCards.length > 0 ? (
                        <>
                            <button className="left-btn" onClick={handlePrev}>
                                <img src={leftButton} alt="left" />
                            </button>
                            <Card
                                packType={selectedCard} // selva or colorezz or vpvr
                                promptType={displayedCards[currentCardIndex].promptType} // problem since in my current set up
                                prompt={displayedCards[currentCardIndex].prompt}
                                answer={displayedCards[currentCardIndex].answer}
                                rarity={displayedCards[currentCardIndex].rarity}
                            />
                            <button className="right-btn" onClick={handleNext}>
                                <img src={rightButton} alt="right" />
                            </button>
                        </>
                    ) : (
                        <p clasName="base-text">Select a pack and open it!</p>
                    )}
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}


export default Secret;