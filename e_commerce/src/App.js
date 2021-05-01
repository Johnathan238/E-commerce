import './App.css';
import { Products, Navbar } from './Components'

function App() {
  return (
    <div className="App">

      {/* <header className="App-header">
        E-Commerce
      </header> */}
      
      <Navbar />
      <Products />

      {/* <video>
        <source src="https://youtu.be/CWD56bQOxKM" type="video/mp4">
      </video> */}
    </div>
  );
}

export default App;
