import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Publications } from './pages/Publications';
import { Students } from './pages/Students';
import { Teaching } from './pages/Teaching';
import { Services } from './pages/Services';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/services" element={<Services />} />
          <Route path="/students" element={<Students />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
