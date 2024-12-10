// =============================================================================
//        HI ALL!
//        THIS DEVELOPED BY RAKHA FADHILAH
//        SEE THE GITHUB: "https://github.com/rakhabro/fozzle"
//
//        IT IS OPEN SOURCE, ANYONE CAN GET THE CODE
//        ANYWAY, KEEP ME ON THE CREDIT :D
//
//        THANK YOU!
// =============================================================================

import { useContext } from "react"
import { NavigationContext } from "./providers/navigationProvider"
import HomePage from "./pages/home/home"
import GamePlayPage from "./pages/gameplay/gameplay"
import GameOverPage from "./pages/gameover/gameover"
import BackgroundMusic from "./components/backgroundmusic"
import Icon_Minimize from "./assets/icons/minimizeIcon"
import Icon_Close from "./assets/icons/closeIcon"
import Credit from "./components/credit/credit"
import { HealthProvider } from "./providers/healthProvider"

function App() {

  const { activePage } = useContext(NavigationContext);

  let windowContent = null;
  if (activePage == "gameplay") {
    windowContent = <HealthProvider>
      <GamePlayPage />
    </HealthProvider>
  } else if (activePage == "gameover") {
    windowContent = <GameOverPage />
  } else {
    windowContent = <HomePage />
  }

  const minimizeWindow = () => {
    window.api.minimizeWindow();
  };

  const quit = () => {
    window.api.quitApp();
  };

  return (
    <div className="frame">
      <div className="upperframe">
        <div className="left">
          <BackgroundMusic />
        </div>
        {activePage != "" && <Credit isonupperframe={true} />}
        <div className="right">
          <button onClick={minimizeWindow}><Icon_Minimize dimension={12} /></button>
          <button onClick={quit}><Icon_Close dimension={16} /></button>
        </div>
      </div>
      {windowContent}
    </div>
  )
}

export default App

