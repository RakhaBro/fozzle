import "./gameplay.css";
import { useContext, useEffect, useState } from "react";
import Player from "../../components/player/player";
import Enemy1 from "../../components/enemy1/enemy1";
import { NavigationContext } from "../../providers/navigationProvider";
import controlCollision from "../../controllers/collisioncontroller";

function GamePlayPage() {

    const { setActivePage } = useContext(NavigationContext);

    // CONTROLLER ===================================================================
    const [charVerticalPosition, setCharVerticalPosition] = useState(0);
    const handleWheel = (event) => {
        setCharVerticalPosition((prevVerticalPosition) => {
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
    
    
    
    // ENEMIES GENERATOR ============================================================
    const [enemies, setEnemies] = useState([]);
    const pushEnemy = () => {
        const randomVerticalPosition = Math.floor(Math.random() * (145 - (-145) + 1)) + (-145);
        setEnemies([
            ...enemies,
            <Enemy1
                id={enemies.length}
                key={enemies.length}
                initialVerticalPosition={randomVerticalPosition}
            />
        ]);
    };

    useEffect(()=> {       
        // Generate new enemy (always)
        setTimeout(() => {
            pushEnemy();
        }, 3000);
    }, [enemies]);
    // ==============================================================================



    // SCORE CONTROLLER =============================================================
    const [score, setScore] = useState(0);
    // ==============================================================================
    
    
    // HEALTH CONTROLLER ============================================================
    const [health, setHealth] = useState(100);
    // ==============================================================================


    useEffect(() => {

        // Enemies generator
        pushEnemy();

        // Wheel handler initialization
        window.addEventListener("wheel", handleWheel, { passive: true });
        
        // Start collision controller (to score and to miss)
        const interval = setInterval(() => {
            var collisionData = controlCollision();
            if (collisionData.getscore === true) {
                setScore((prevScore) => prevScore + 1);
            }
            if (collisionData.enemypass === true) {
                setHealth((prevHealth) => prevHealth - 10);
            }
        }, 100);


        return () => {
          window.removeEventListener("wheel", handleWheel);
          clearInterval(interval);
        };

    }, []);


    return(
        <>

            <div className="layout">
                
                <div className="layout_top">
                    {/* SCORE */}
                    <h2 className="scoretext">Score: {score}</h2>
                </div>

                <div className="layout_bottom">
                    {/* HEALTH */}
                    <div className="bar_container">
                        <p>Health</p>
                        <div className="bar_border">
                            <div className="bar" style={{width: `${health}%`}}>
                            </div>
                        </div>
                    </div>
                    {/* ACTIONS */}
                    <div className="buttons_container">
                        <button onClick={() => {setActivePage("")}}>End</button>
                    </div>
                </div>

            </div>

            <div className="gameplay">

                {/* CONTENT */}
                {enemies}
                <Player verticalPosition={charVerticalPosition} />

            </div>
        </>
    );
}

export default GamePlayPage;