import "./gameplay.css";
import React, { useContext, useEffect, useState } from "react";
import Player from "../../components/player/player";
import Enemy1 from "../../components/enemy1/enemy1";
import { NavigationContext } from "../../providers/navigationProvider";
import controlCollision from "../../controllers/collisioncontroller";

const GamePlayPage = React.memo(() => {

    const { setActivePage } = useContext(NavigationContext);

    // SCORE CONTROLLER =============================================================
    const [score, setScore] = useState(0);
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



const EnemiesGenerator = React.memo(() => {

    console.log("enemy generator is built");
    
    // ENEMIES GENERATOR ============================================================
    
    const [enemies, setEnemies] = useState([]);
    const pushEnemy = () => {
        const randomVerticalPosition = Math.floor(Math.random() * (145 - (-145) + 1)) + (-145);
        setEnemies([
            ...enemies,
            <Enemy1
                id={enemies.length}
                key={"enemy1_" + enemies.length}
                initialVerticalPosition={randomVerticalPosition}
            />
        ]);
    };

    useEffect(()=> {       
        // Generate new enemy (always)
        setTimeout(() => {
            pushEnemy();
        }, 1000);
    }, [enemies]);

    // ==============================================================================

    // Enemies generator
    useEffect(() => {
        pushEnemy();
    }, []);

    return(<>{enemies}</>);
})



export default GamePlayPage;