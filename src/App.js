import Home from './component/home/Home';
import { Route, Routes } from 'react-router-dom';
import Contact from './component/contact_page/Contact';
import Footer from './component/footer/Footer';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
