import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Publications } from './pages/Publications';
import { Students } from './pages/Students';
import { Teaching } from './pages/Teaching';
import { motion } from 'framer-motion';
import { Construction } from 'lucide-react';

function Placeholder({ title }: { title: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4"
    >
      <Construction className="w-16 h-16 text-slate-300 mb-6" />
      <h1 className="text-4xl font-bold text-slate-900 mb-4">{title}</h1>
      <p className="text-lg text-slate-500 max-w-md">
        This section is currently under development. Please check back later for updates.
      </p>
    </motion.div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/students" element={<Students />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
