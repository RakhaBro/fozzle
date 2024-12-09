import { useContext } from "react"
import { NavigationContext } from "./providers/navigationProvider"
import HomePage from "./pages/home/home"
import GamePlayPage from "./pages/gameplay/gameplay"
import GameOverPage from "./pages/gameover/gameover"
import BackgroundMusic from "./components/backgroundmusic"
import Icon_Minimize from "./assets/icons/minimizeIcon"
import Icon_Close from "./assets/icons/closeIcon"

function App() {

  const { activePage } = useContext(NavigationContext);

  let windowContent = null;
  if (activePage == "gameplay") {
    windowContent = <GamePlayPage />
  } else if (activePage == "gameover") {
    windowContent = <GameOverPage />
  } else {
    windowContent = <HomePage />
  }

  return (
    <div className="frame">
      <div className="upperframe">
        <button><Icon_Minimize dimension={12} /></button>
        <button><Icon_Close dimension={16} /></button>
        <BackgroundMusic />
      </div>
      {windowContent}
    </div>
  )
}

export default App

