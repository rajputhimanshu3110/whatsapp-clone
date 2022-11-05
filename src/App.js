import "./App.css";
import Chat from "./comp/Chat";
import Sidebar from "./comp/Sidebar";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
