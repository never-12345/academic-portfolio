import { type ReactNode } from 'react';
import { Navbar } from './Navbar';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
      <Navbar />
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {children}
      </main>
      <footer className="w-full bg-slate-900 text-slate-400 py-8 text-center text-sm mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <p>© {new Date().getFullYear()} Dr. Mohammad Sultan Mahmud. All rights reserved.</p>
          <p className="mt-2 text-slate-500">Daffodil International University</p>
        </div>
      </footer>
    </div>
  );
}
