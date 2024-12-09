import React, { useEffect, useState } from "react";
import Enemy1 from "../components/enemy1/enemy1";

const EnemiesGenerator = React.memo(() => {
    
    // ENEMIES GENERATOR ============================================================
    
    const [enemies, setEnemies] = useState([]);
    var [enemiesNum, setEnemiesNum] = useState(0);
    const pushEnemy = () => {
        var enemiesUpdatedList = enemies;
        if (enemies.length > 20) {
            enemiesUpdatedList = enemies.slice(Math.floor(enemies.length / 2), enemies.length);
        }
        const randomVerticalPosition = Math.floor(Math.random() * (148 - (-148) + 1)) + (-148);
        setEnemies([
            ...enemiesUpdatedList,
            <Enemy1
                id={enemiesNum}
                key={"enemy1_" + enemiesNum}
                initialVerticalPosition={randomVerticalPosition}
            />
        ]);
        setEnemiesNum((prevVal) => prevVal += 1);
    };

    useEffect(()=> {       
        // Generate new enemy (always)
        const timeout = setTimeout(() => {
            pushEnemy();
        }, 1000);
      
        return () => clearTimeout(timeout);
    }, [enemies]);

    // ==============================================================================

    // Enemies generator
    useEffect(() => {
        pushEnemy();
    }, []);

    return(<>{enemies}</>);
})

export default EnemiesGenerator;