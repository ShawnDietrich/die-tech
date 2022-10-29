
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Pages/Components/Nav';
import Home from './Pages/Home';
import Book from './Pages/Book'
import Footer from './Pages/Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Service from './Pages/Service';
import Portfolio from './Pages/Portfolio';

function App() {
  return (
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/book' element={<Book />} />
          <Route path='/services' element={<Service />} />
          <Route path='/portfolio' element={<Portfolio/>}/>
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
