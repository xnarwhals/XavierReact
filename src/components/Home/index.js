import LogoX from '../../assets/images/logo-x.png';
import Gamepad from './Gamepad';
import AnimatedLetters from '../AnimatedLetters';

import Loader from 'react-loaders'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'

import './index.scss';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 'v', 'i', 'e', 'r'];
    const titleArray = ['G', 'a', 'm', 'e', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];
    
    // useEffect(() => {
    //     return setTimeout(() => {
    //       setLetterClass('text-animate-hover')
    //     }, 4000)
    //   }, [])

    return (
        <>
            <div className="container home-page">
                <div className="text-area">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img src={LogoX} alt="Xavier" />
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx ={15}/>
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={titleArray} idx ={22}/>
                    </h1>
                    <h2>Student / Unity Programmer / Filmmaker</h2>
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>
                </div>
                <Gamepad className="game-img"/>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Home;