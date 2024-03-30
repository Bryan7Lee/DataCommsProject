import './App.css';
import io from 'socket.io-client'
const socket = io.connect("https://localhost:3001")

export default function App() {

  const shareData = () => {
   // socket.emit();
  };

  return (
    <div className="App">
      <input placeholder="message"/>
      <button onClick={shareData}> Send message </button>
      <p>testing title</p>
    </div>
  );
}