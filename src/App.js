import { useSelector } from "react-redux";
import CurrentMatch from "./components/CurrentMatch";
import Lobby from "./components/Lobby";
import TeamForm from "./components/TeamForm";
import WinnersLounge from "./components/WinnersLounge";

function App() {

  const winnersLoungeLength = useSelector((state) => state.queue.winnersLounge.length);


  return (
    <div className="App container">

      <h1 className="text-center">Queue App</h1>
      {winnersLoungeLength > 0 && (
        <WinnersLounge />
      )}
      <CurrentMatch />
      <Lobby />
      <TeamForm />

    </div>
  );
}

export default App;
