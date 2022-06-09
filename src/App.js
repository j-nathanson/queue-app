import CurrentMatch from "./components/CurrentMatch";
import Lobby from "./components/Lobby";
import TeamForm from "./components/TeamForm";

function App() {
  return (
    <div className="App container">

      <h1 className="text-center">Queue App</h1>
      <div className="border">winners lounge</div>
      <CurrentMatch />
      <Lobby />
      <TeamForm />

    </div>
  );
}

export default App;
