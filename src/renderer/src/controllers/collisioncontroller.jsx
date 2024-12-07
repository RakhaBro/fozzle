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
    
    
    // Bullet1 bounds
    // ======================================================
    const bullets = document.querySelectorAll(".bullet");
    const latestBulletElement = bullets[bullets.length - 1];
    if (latestBulletElement.classList.contains("getttarget")) {
        return {'getscore' : false, enemypass: 'false'};
    }
    const latestBulletId = latestBulletElement.id;
    const latestBulletRect = document.getElementById(latestBulletId).getBoundingClientRect();
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
        
        // IF ENEMY GOT SHOT BY A BULLET
        if (latestBulletRect.top < enemyRect.bottom &&
            latestBulletRect.bottom > enemyRect.top &&
            latestBulletRect.right > enemyRect.left &&
            latestBulletRect.left < enemyRect.right
        ) {
            latestBulletElement.classList.add("getttarget");
            enemyElement.classList.add("getshot");
            var enemyGoingLeft = document.getElementById("enemy_goingleft_" + enemyIdNum);
            enemyGoingLeft.querySelector(".pieces_container").classList.add("deadapart");
            enemyGoingLeft.classList.add("stopped")
            getscore = true;
            console.log(enemyId + " got shot!");
        }

        // IF ENEMY PASS
        if (
            enemyRect.x < 140
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

    // ======================================================




    return{
        'getscore' : getscore,
        'enemypass' : enemypass
    };

}

export default controlCollision;