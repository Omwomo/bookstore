import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Form from './components/Form';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="App">
        <h1>Hello bookstore</h1>
        <Routes>
          <Route path="/" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
