
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Pages/Components/Nav';
import Home from './Pages/Home';
import Book from './Pages/Book'
import Footer from './Pages/Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/book' element={<Book />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
