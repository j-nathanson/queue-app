import TeamForm from "./components/TeamForm";

function App() {
  return (
    <div className="App container">

      <h1>Queue App</h1>
      <div className="border">winners lounge</div>
      <div className="border">current match</div>
      <div className="border">waiting lobby</div>
      <TeamForm />

    </div>
  );
}

export default App;
