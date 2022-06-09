import CurrentMatch from "./components/CurrentMatch";
import Lobby from "./components/Lobby";
import TeamForm from "./components/TeamForm";
import WinnersLounge from "./components/WinnersLounge";

function App() {
  return (
    <div className="App container">

      <h1 className="text-center">Queue App</h1>
      <WinnersLounge />
      <CurrentMatch />
      <Lobby />
      <TeamForm />

    </div>
  );
}

export default App;
