import "./gameover.css";
import { useContext } from "react";
import { NavigationContext } from "../../providers/navigationProvider";
import { ScoreContext } from "../../providers/scoreProvider";

function GameOverPage() {

    const { setActivePage } = useContext(NavigationContext);
    
    const { score, setScore } = useContext(ScoreContext);

    return(
        <div className="gameoverpage">
            <div className="maincontent">
                <div>
                    <p>Game Over!</p>
                    <p>Score :</p>
                    <h1>{score ?? 0}</h1>
                    <button onClick={() => {setActivePage("");}} >Back to home</button>
                </div>
            </div>
        </div>
    );
}

export default GameOverPage;