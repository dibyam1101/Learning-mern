import TinderCards from "./TinderCards"
import './App.css';
import Header from './Header';
import SwipeButtons from "./SwipeButtons"

function App() {
  return (
    <div className="App">
      <Header>

      </Header>


      {/* {Tinder Cards} */}
      <TinderCards>

      </TinderCards>

      {/* {Swipe Buttons} */}
      <SwipeButtons/>
    </div>
  );
}

export default App;
