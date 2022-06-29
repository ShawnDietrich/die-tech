
import './App.css';
import Header from './Pages/Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Pages/Components/Nav';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
