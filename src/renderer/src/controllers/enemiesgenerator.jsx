import React, { useEffect, useState } from "react";
import Enemy1 from "../components/enemy1/enemy1";

const EnemiesGenerator = React.memo(() => {
    
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