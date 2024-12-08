import { useContext } from "react";
import { NavigationContext } from "../../providers/navigationProvider";

function GameOverPage() {

    const { setActivePage } = useContext(NavigationContext);

    return(
        <div onClick={setActivePage("")} className="gameoverpage">
            <h1>Game Over!</h1>
        </div>
    );
}

export default GameOverPage;