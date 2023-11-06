import Player from "./components/Player.jsx";
import TimerChllenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChllenge title="Easy" targetTime={1} />
        <TimerChllenge title="Not Easy" targetTime={5} />
        <TimerChllenge title="Getting Tough" targetTime={10} />
        <TimerChllenge title="Pros Only" targetTime={15} />
      </div>
    </>
  );
}

export default App;
