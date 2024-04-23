import './App.css';
import GamePage from './pages/GamePage';
import HomePage from './pages/HomePage';
import { useState } from 'react';
function App() {
  const [wdisplay, setdisplay] = useState(true);
  function isdisplay(){
    setdisplay(!wdisplay);
  }
  return (
    <div className="App">
      <header className="App-header">
        {wdisplay?<HomePage dfunc={isdisplay}/> :
       <GamePage dfunc={isdisplay}/>}
      </header>
    </div>
  );
}

export default App;
