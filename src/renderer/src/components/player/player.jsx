import { useEffect, useRef, useState } from "react";
import "./player.css";

function Player({verticalPosition}) {
    
    // BULLET GENERATOR
    const [bullets, setBullets] = useState([]);
    const verticalPositionRef = useRef(verticalPosition);

    useEffect(() => {
        setTimeout(() => {
            verticalPositionRef.current = verticalPosition;
        }, 150);
      }, [verticalPosition]);

    const pushBullet = () => {
        setBullets([
            ...bullets,
            <BulletItem key={bullets.length} verticalPosition={verticalPositionRef.current} />]
        )
    };

    useEffect(() => {
        setTimeout(() => {
            pushBullet();
        }, 1000);
    }, [bullets]);
    // =======================================
    
    useEffect(() => {
        pushBullet();
    }, []);
    
    return(
        <>
            <div className="player"
                style={{
                    transform: `translateY(${verticalPosition}px)`
                }}
            >
                <svg
                    width="50px"
                    height="50px"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 0 L0 0 L100 50 L0 100 L30 50 Z"
                        stroke="white"
                        fill="white"
                        strokeWidth="8"
                    />
                </svg>
            </div>
            {bullets}
        </>
    );
}

function BulletItem({verticalPosition}) {
    return(
        <div className="bullet_vertical_position"
            style={{
                transform: `translateY(${verticalPosition}px)`
            }}
        >
            <div className="bullet">
            </div>
        </div>
    );
}

export default Player;