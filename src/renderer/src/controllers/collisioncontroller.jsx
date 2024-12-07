function controlCollision() {

    var getscore = false;

    // Player bound
    // ======================================================
    const playerElement = document.getElementById("player");
    if (playerElement === null) {
        return;
    }
    const playerRect = playerElement.getBoundingClientRect();
    // ======================================================
    
    
    // Bullet1 bounds
    // ======================================================
    const bullets = document.querySelectorAll(".bullet");
    const latestBulletElement = bullets[bullets.length - 1];
    if (latestBulletElement.classList.contains("getttarget")) {
        return {"getscore" : false};
    }
    const latestBulletId = latestBulletElement.id;
    const latestBulletRect = document.getElementById(latestBulletId).getBoundingClientRect();
    // ======================================================
    
    
    // Enemies bounds
    // ======================================================
    const enemies = document.querySelectorAll(".enemy1");
    let deadTarget = null;
    for (let i = 0; i < enemies.length; i++) {
        const enemyElement = enemies[i];
        const enemyId = enemyElement.id;
        const enemeyIdSplitted = enemyId.split("_");
        const enemyIdNum = enemeyIdSplitted[enemeyIdSplitted.length - 1];
        const enemyRect = document.getElementById(enemyId).getBoundingClientRect();
        
        // Bullet collision to enemy
        if (latestBulletRect.top < enemyRect.bottom &&
            latestBulletRect.bottom > enemyRect.top &&
            latestBulletRect.right > enemyRect.left &&
            latestBulletRect.left < enemyRect.right
        ) {
            // if (deadTargets.includes(enemyId)) {
            //     return;
            // }
            latestBulletElement.classList.add("getttarget");
            enemyElement.classList.add("getshot");
            var enemyGoingLeft = document.getElementById("enemy_goingleft_" + enemyIdNum);
            enemyGoingLeft.querySelector(".pieces_container").classList.add("deadapart");
            enemyGoingLeft.classList.add("stopped")
            getscore = true;
            deadTarget = enemyId;
        }
    }
    // ======================================================




    return{
        'getscore' : getscore,
        'deadtargetid' : deadTarget
    };

}

export default controlCollision;