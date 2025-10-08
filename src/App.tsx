import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TermsPage from './pages/TermsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* The default path "/" will render your main HomePage */}
        <Route path="/" element={<HomePage />} />

        {/* The "/terms" path will render the new terms and conditions page */}
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;