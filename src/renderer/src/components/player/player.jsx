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
            <BulletItem
                id={bullets.length}
                key={bullets.length}
                verticalPosition={verticalPositionRef.current}
            />
        ])
    };

    useEffect(() => {
        setTimeout(() => {
            pushBullet();
        }, 1000);
    }, [bullets]);
    // =======================================
    
    
    // SKILL CONTROLLER ======================
    // =======================================
    const [skill, setSkill] = useState("");
    
    // =======================================
    

    
    useEffect(() => {
        pushBullet();
    }, []);
    
    return(
        <>
            <div className="player" id="player"
                style={{
                    transform: `translateY(${verticalPosition}px)`
                }}
            >
                <SkillElement />
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

function BulletItem({id, verticalPosition}) {

    const bulletId = "bullet1_" + id;

    return(
        <div className="bullet_vertical_position"
            style={{
                transform: `translateY(${verticalPosition}px)`
            }}
        >
            <div className="bullet" id={bulletId}>
            </div>
        </div>
    );
}

function SkillElement() {
    return(
        <div className="skillelement"></div>
    );
}

export default Player;