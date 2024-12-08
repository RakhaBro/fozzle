import React, { useEffect, useRef, useState } from "react";
import "./player.css";
import SkillElement from "../skill/skill";

const Player = React.memo(() => {

    // CONTROLLER ===================================================================
    const [verticalPosition, setVerticalPosition] = useState(0);
    const handleWheel = (event) => {
        setVerticalPosition((prevVerticalPosition) => {
            const step = 25;
            if (event.deltaY > 0) {
                if (prevVerticalPosition < 300) {           // screen bottom boundary
                    return prevVerticalPosition + step;
                } else {
                    
                    return prevVerticalPosition;
                }
            } else {
                if (prevVerticalPosition > -300) {          // screen top boundary
                    return prevVerticalPosition - step;
                } else {
                    return prevVerticalPosition;
                }
            }
        });
    };
    // ==============================================================================


    useEffect(() => {
        // Wheel handler initialization
        window.addEventListener("wheel", handleWheel, { passive: true });
        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, []);
    
    return(
        <>
            <div
                className="player" id="player"
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
            <BulletsGenerator verticalPosition={verticalPosition} />
        </>
    );
})



// BULLETS ============================================================================
// ====================================================================================

const BulletsGenerator = React.memo(({verticalPosition}) => {
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
                id={"bullet" + bullets.length}
                key={"bullet" + bullets.length}
                verticalPosition={verticalPositionRef.current}
            />
        ])
    };

    useEffect(() => {
        setTimeout(() => {
            pushBullet();
        }, 1000);
    }, [bullets]);

    useEffect(() => {
        pushBullet();
    }, []);
    // =======================================

    return(<>{bullets}</>);
})


const BulletItem = React.memo(({id, verticalPosition}) => {
    
    const bulletId = "bullet1_" + id;

    return(
        <div className="bullet_vertical_position"
            style={{
                transform: `translateY(${verticalPosition}px)`
            }}
        >
            <div className="bullet shot" id={bulletId}>
            </div>
        </div>
    );
})

// ====================================================================================
// ====================================================================================

export default Player;