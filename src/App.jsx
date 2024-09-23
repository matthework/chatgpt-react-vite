import ChatGPT from "./components/ChatGPT";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>OpenAI Integration</h1>
      <h3>(OpenAI v1.47.0 + React v18.3.1 + Flask v3.03)</h3>
      <ChatGPT />
    </div>
  );
}

export default App;
