import './App.css';
import io from 'socket.io-client'
const socket = io.connect("https://localhost:3001")

export default function App() {

  const testingEmit = () => {
    socket.emit("chat_msg", {message: "Hello world!"});
  };

  return (
    <div className="App">
      <input placeholder="message"/>
      <button onClick={testingEmit}> Send message </button>
      <p>testing title</p>
    </div>
  );
}