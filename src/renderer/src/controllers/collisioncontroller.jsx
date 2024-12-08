function controlCollision() {

    var getscore = false;
    var enemypass = false;

    // Player bound
    // ======================================================
    const playerElement = document.getElementById("player");
    if (playerElement === null) {
        return {'getscore' : false, enemypass: 'false'};
    }
    const playerRect = playerElement.getBoundingClientRect();
    // ======================================================
    
    
    // Enemies bounds
    // ======================================================
    const enemies = document.querySelectorAll(".enemy1");
    for (let i = 0; i < enemies.length; i++) {
        const enemyElement = enemies[i];
        const enemyId = enemyElement.id;
        const enemeyIdSplitted = enemyId.split("_");
        const enemyIdNum = enemeyIdSplitted[enemeyIdSplitted.length - 1];
        const enemyRect = document.getElementById(enemyId).getBoundingClientRect();


        // shots bounds
        // ======================================================
        const shots = document.querySelectorAll(".shot");
        for (let j = 0; j < shots.length; j++) {
            
            const shotElement = shots[j];
            const shotRect = shots[j].getBoundingClientRect();
            
            if (
                !shotElement.classList.contains("getttarget")
                && !enemyElement.classList.contains("getshot")
            ) {
                
                // IF ENEMY GOT SHOT BY A "SHOT"
                if (shotRect.top < enemyRect.bottom &&
                    shotRect.bottom > enemyRect.top &&
                    shotRect.right > enemyRect.left &&
                    shotRect.left < enemyRect.right
                ) {
                    shotElement.classList.add("getttarget");
                    enemyElement.classList.add("getshot");
                    var enemyGoingLeft = document.getElementById("enemy_goingleft_" + enemyIdNum);
                    enemyGoingLeft.querySelector(".pieces_container").classList.add("deadapart");
                    enemyGoingLeft.classList.add("stopped")
                    getscore = true;
                    console.log(enemyId + " got shot!");
                }
        
                // IF ENEMY PASS
                if (
                    enemyRect.x < 0
                    && !enemyElement.classList.contains("getshot")
                    && !enemyElement.classList.contains("passed")
                ) {
                    console.log(enemyId + " passed");
                    enemyElement.classList.add("passed");
                    enemypass = true;
                    playerElement.classList.add("healthdown");
                    setTimeout(() => {
                        playerElement.classList.remove("healthdown");
                    }, 500);
                }
            }
        }

    }

    // ======================================================




    return{
        'getscore' : getscore,
        'enemypass' : enemypass
    };

}

export default controlCollision;