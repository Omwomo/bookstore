import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Category from './components/Category';
import BookList from './components/BookList';

function App() {
  return (
    <Router>
      <div className="container">
        <Navigation />
        <div className="App">
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/Category" element={<Category />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
