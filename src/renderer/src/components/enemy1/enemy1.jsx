import "./enemy1.css";

function Enemy1({id, initialVerticalPosition}) {

    const enemyId = "enemy1_" + id;

    return(
        <div className="enemy_vertical_position"
            style ={{
                transform: `translateY(${initialVerticalPosition}px)`
            }}
        >
            <div className="enemy_goingleft">
                <div className="enemy1" id={enemyId}>
                </div>
            </div>
        </div>
    );
}

export default Enemy1;