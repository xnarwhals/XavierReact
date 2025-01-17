import "./index.scss";
import Loader from 'react-loaders'

import { useRef, useState, Suspense } from 'react'
import { useGLTF } from '@react-three/drei'
import { Canvas, useFrame, useLoader} from '@react-three/fiber';
import Lootbox from '../../public/LootBox/Lootbox';


const Secret = () => {


    return (
        <>
            <div className = "container secret-page">
                <div className="canvas-area">
                    <Canvas>
                        <Suspense fallback={null}>
                            <ambientLight intensity={0.5} />
                            <Lootbox />
                        </Suspense>
                    </Canvas>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}


export default Secret;