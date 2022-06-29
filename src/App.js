
import './App.css';
import Header from './Pages/Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Pages/Components/Nav';
import Home from './Pages/Home';
import Footer from './Pages/Components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
