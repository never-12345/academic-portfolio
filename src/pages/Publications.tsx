import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';
import { profileData } from '../data/content';

export function Publications() {
  const publications = [
    {
      title: "Approximate approach for frequent itemsets mining on massive distributed data beyond computing capacity",
      journal: "Expert Systems with Applications",
      year: "2026",
      doi: "10.1016/j.eswa.2026.132043"
    },
    {
      title: "A context-aware dropout-based occlusion-adaptive network for robust facial landmark and emotion detection",
      journal: "Journal of King Saud University Computer and Information Sciences",
      year: "2026",
      doi: "10.1007/s44443-026-00705-7"
    },
    {
      title: "Enhancing query-based segmentation models with full-pixel integration for curvilinear object segmentation",
      journal: "Information Fusion",
      year: "2026",
      doi: "10.1016/j.inffus.2025.103793"
    },
    {
      title: "ADODN: A Dropout-Based Occlusion-Aware Deep Network for Facial Landmark Detection",
      journal: "IEEE Access",
      year: "2026",
      doi: "10.1109/ACCESS.2026.3681267"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="max-w-5xl mx-auto px-4 py-12"
    >
      <div className="flex items-center gap-3 mb-8">
        <BookOpen className="w-8 h-8 text-accent" />
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Selected Publications</h1>
      </div>

      <p className="text-lg text-slate-600 mb-8">
        For a complete and up-to-date list of my publications, please visit my{' '}
        <a href={profileData.scholarUrl} target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">
          Google Scholar
        </a>{' '}
        or{' '}
        <a href={profileData.researchGateUrl} target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">
          ResearchGate
        </a>{' '}
        profiles.
      </p>

      <div className="space-y-6">
        {publications.map((pub, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group"
          >
            <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-accent transition-colors">
              {pub.title}
            </h3>
            <p className="text-slate-600 mb-4">
              <span className="italic">{pub.journal}</span> • {pub.year}
            </p>
            <a 
              href={`https://doi.org/${pub.doi}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-hover font-medium transition-colors"
            >
              DOI: {pub.doi} <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
