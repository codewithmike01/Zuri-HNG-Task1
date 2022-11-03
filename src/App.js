import Home from './component/home/Home';
import { Route, Routes } from 'react-router-dom';
import Contact from './component/Contact';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
