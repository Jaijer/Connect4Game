import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import { GameProvider } from './context/GameContext'
import Game1v1 from './pages/Game1v1'
import Home from './pages/Home'

function App() {

  return (
    // Background and container
    <div className="bg-lightPurble min-h-screen h-full w-screen relative flex justify-center items-center"> 

      <GameProvider>

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="1v1" element={<Game1v1 />} />
          </Routes>
        </Router>

      </GameProvider>

    </div>
  )
}

export default App
