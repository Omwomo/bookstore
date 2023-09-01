import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Category from './components/Category';
import BookList from './components/BookList';
import Form from './components/Form';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="App">
        <h1>Hello bookstore</h1>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/Category" element={<Category />} />
        </Routes>
      </div>
      <Form />
    </Router>
  );
}

export default App;
