import "./home.css";
import { useContext } from "react";
import { NavigationContext } from "../../providers/navigationProvider";

function HomePage() {

    const { setActivePage } = useContext(NavigationContext);

    return(
        <div className="home">
            <div className="maincontent">
                <div>
                    <h1>Fozzle!</h1>
                    <p>Let's start having fun!</p>
                </div>
                <button onClick={() => {setActivePage("gameplay");}}>Start Game</button>
            </div>
        </div>
    );
}

export default HomePage;