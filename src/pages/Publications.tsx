import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { profileData } from '../data/content';

export function Publications() {
  const publications = [
    {
      title: "Determination of the Number of Clusters in High-Dimensional Data with Subspace Clusters",
      journal: "IEEE Transactions on Big Data",
      year: "2025",
      doi: "10.1109/tbdata.2025.3588027",
      contributors: "Mohammad Sultan Mahmud; Joshua Zhexue Huang; Germán González-Almagro; Salvador García"
    },
    {
      title: "RSPCA: Random Sample Partition and Clustering Approximation for ensemble learning of big data",
      journal: "Pattern Recognition",
      year: "2025",
      doi: "10.1016/j.patcog.2024.111321",
      contributors: "Mohammad Sultan Mahmud; Hua Zheng; Diego Garcia-Gil; Salvador García; Joshua Zhexue Huang"
    },
    {
      title: "Approximate approach for frequent itemsets mining on massive distributed data beyond computing capacity",
      journal: "Expert Systems with Applications",
      year: "2026",
      doi: "10.1016/j.eswa.2026.132043",
      contributors: "Mohammad Sultan Mahmud et al."
    },
    {
      title: "Clustering approximation via a fusion of multiple random samples",
      journal: "Information Fusion",
      year: "2024",
      doi: "10.1016/j.inffus.2023.101986",
      contributors: "Mohammad Sultan Mahmud; Joshua Zhexue Huang; Salvador García"
    },
    {
      title: "An ensemble method for estimating the number of clusters in a big data set using multiple random samples",
      journal: "Journal of Big Data",
      year: "2023",
      doi: "10.1186/s40537-023-00709-4",
      contributors: "Mohammad Sultan Mahmud; Joshua Zhexue Huang; Rukhsana Ruby; Kaishun Wu"
    },
    {
      title: "Approximate Clustering Ensemble Method for Big Data",
      journal: "IEEE Transactions on Big Data",
      year: "2023",
      doi: "10.1109/TBDATA.2023.3255003",
      contributors: "Mohammad Sultan Mahmud; Joshua Zhexue Huang; Rukhsana Ruby; Alladoumbaye Ngueilbaye; Kaishun Wu"
    },
    {
      title: "A context-aware dropout-based occlusion-adaptive network for robust facial landmark and emotion detection",
      journal: "Journal of King Saud University Computer and Information Sciences",
      year: "2026",
      doi: "10.1007/s44443-026-00705-7",
      contributors: "Mohammad Sultan Mahmud et al."
    },
    {
      title: "Enhancing query-based segmentation models with full-pixel integration for curvilinear object segmentation",
      journal: "Information Fusion",
      year: "2026",
      doi: "10.1016/j.inffus.2025.103793",
      contributors: "Mohammad Sultan Mahmud et al."
    },
    {
      title: "ADODN: A Dropout-Based Occlusion-Aware Deep Network for Facial Landmark Detection",
      journal: "IEEE Access",
      year: "2026",
      doi: "10.1109/ACCESS.2026.3681267",
      contributors: "Mohammad Sultan Mahmud et al."
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="max-w-5xl mx-auto px-4 py-12"
    >
      <div className="mb-8">
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
            <p className="text-slate-500 text-sm mb-1">
              {pub.contributors}
            </p>
            <p className="text-slate-600 mb-4">
              <span className="italic font-medium">{pub.journal}</span> • {pub.year}
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
