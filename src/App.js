import './App.css'
import GameData from './components/GameData'
import 'bootstrap/dist/css/bootstrap.min.css'
import LiveBoard from './components/LiveBoard'
import { RecoilRoot } from 'recoil'

function App() {

  return (<RecoilRoot>
    <div className='wrapper'>
      <div className='live_box_wrapper'>
        <div className='live_box_title'><h4>Live Games Board</h4></div>
        <div className='live_wrapper'>
          <LiveBoard />
        </div>
      </div>
      <div className='result_box_wrapper'>
        <div className='result_box_title'><h4>Historical Results</h4></div>
        <GameData />
      </div>
    </div>
  </RecoilRoot>
  )
}

export default App
