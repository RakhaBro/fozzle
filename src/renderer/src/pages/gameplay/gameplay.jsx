import "./gameplay.css";
import { useContext, useEffect, useState } from "react";
import Player from "../../components/player/player";
import Enemy1 from "../../components/enemy1/enemy1";
import { NavigationContext } from "../../providers/navigationProvider";

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
        setTimeout(() => {
            pushEnemy();
        }, 3000);
    }, [enemies]);
    // ==============================================================================


    useEffect(() => {
        // Enemies generator
        pushEnemy();

        // Wheel handler initialization
        window.addEventListener("wheel", handleWheel, { passive: true });
        return () => {
          window.removeEventListener("wheel", handleWheel);
        };

    }, []);


    return(
        <>

            <div className="layout">
                
                <div className="layout_top">
                    {/* SCORE */}
                    <h2 className="scoretext">Score: 0</h2>
                </div>

                <div className="layout_bottom">
                    {/* HEALTH */}
                    <div className="bar_container">
                        <p>Health</p>
                        <div className="bar_border">
                            <div className="bar"></div>
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
                <Player verticalPosition={charVerticalPosition} />
                {enemies}

            </div>
        </>
    );
}

export default GamePlayPage;