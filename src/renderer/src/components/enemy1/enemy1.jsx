import "./enemy1.css";

function Enemy1({id, initialVerticalPosition}) {

    const enemyId = "enemy1_" + id;
    const enemyGoingLeftId = "enemy_goingleft_" + id;

    return(
        <div className="enemy_vertical_position"
            style ={{
                transform: `translateY(${initialVerticalPosition}px)`
            }}
        >
            <div className="enemy_goingleft" id={enemyGoingLeftId} >
                <div className="enemy1" id={enemyId} ></div>
                <div className="pieces_container" >
                    <RandomPieces />
                    <RandomPieces />
                    <RandomPieces />
                    <RandomPieces />
                    <RandomPieces />
                    <RandomPieces />
                    <RandomPieces />
                    <RandomPieces />
                    <RandomPieces />
                    <RandomPieces />
                    <RandomPieces />
                </div>
            </div>
        </div>
    );
}

function RandomPieces() {
    return(
        <div className="pieces" style={{
            transform: `translate(${
                Math.floor(Math.random() * (96 - (-96) + 1)) + (-96)
            }px, ${
                Math.floor(Math.random() * (96 - (-96) + 1)) + (-96)
            }px) scale(${Math.floor(Math.random() * (1 - (-.6) + 1)) + (-.6)})`
        }}></div>
    );
}

export default Enemy1;