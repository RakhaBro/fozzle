import "./gameplay.css";
import React, { useContext, useEffect, useState } from "react";
import Player from "../../components/player/player";
import { NavigationContext } from "../../providers/navigationProvider";
import controlCollision from "../../controllers/collisioncontroller";
import EnemiesGenerator from "../../controllers/enemiesgenerator";
import { ScoreContext } from "../../providers/scoreProvider";

const GamePlayPage = React.memo(() => {

    const { setActivePage } = useContext(NavigationContext);

    // SCORE CONTROLLER =============================================================
    const { score, setScore } = useContext(ScoreContext);
    // ==============================================================================
    
    
    // HEALTH CONTROLLER ============================================================
    const [health, setHealth] = useState(100);
    useEffect(() => {
        if (health <= 0) {
            setActivePage("gameover");
        }
    }, [health]);
    // ==============================================================================


    useEffect(() => {

        setScore(0);
        
        // Start collision controller (to score and to miss)
        const interval = setInterval(() => {
            var collisionData = controlCollision();
            if (collisionData.getscore === true) {
                setScore((prevScore) => prevScore + 1);
            }
            if (collisionData.enemypass === true) {
                // setHealth((prevHealth) => prevHealth - 10);  
            }
        }, 75);


        return () => {
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
                <EnemiesGenerator key={"enemiesgenerator"} />
                <Player />

            </div>
        </>
    );
})



export default GamePlayPage;