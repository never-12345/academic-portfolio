import { motion } from 'framer-motion';
import { MapPin, Mail, GraduationCap } from 'lucide-react';
import { profileData, newsItems, mediaItems } from '../data/content';

export function Home() {
  return (
    <div className="flex flex-col gap-12 md:gap-16 max-w-5xl mx-auto px-4 py-8">
      
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row gap-10 items-start">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shrink-0 shadow-2xl border-4 border-white bg-slate-200"
        >
          <div className="w-full h-full bg-slate-100">
            <img src="/sir-2.0.png" alt={profileData.name} className="w-full h-full object-cover" />
          </div>
        </motion.div>
        
        <div className="flex flex-col justify-start py-1">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight leading-tight">{profileData.name}</h1>
            <p className="text-sm md:text-base text-accent font-semibold mt-0.5">{profileData.title}</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-3 text-slate-600 mt-3"
          >
            <div className="flex flex-col gap-3">
              {profileData.affiliations.map((affil, idx) => (
                <div key={idx} className="flex flex-col gap-0.5">
                  <div className="flex items-start md:items-center gap-2 text-slate-800 font-medium text-sm border-l-2 border-accent pl-2">
                    <GraduationCap size={14} className="text-accent shrink-0" />
                    <span>{affil.university}</span>
                  </div>
                  <div className="flex items-start md:items-center gap-2 text-slate-500 pl-3">
                    <MapPin size={12} className="text-slate-400 shrink-0" />
                    <span className="text-xs">{affil.address}</span>
                  </div>
                </div>
              ))}
            </div>

            {profileData.email && (
              <div className="flex items-center gap-2 mt-0.5 pl-1">
                <Mail size={12} className="text-accent shrink-0" />
                <a href={`mailto:${profileData.email}`} className="text-slate-600 hover:text-accent font-medium transition-colors text-xs">{profileData.email}</a>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="prose prose-slate max-w-none hover:prose-a:text-blue-800"
      >
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 leading-relaxed">
          <p className="text-lg text-slate-700 whitespace-pre-wrap">{profileData.bio}</p>
        </div>
      </motion.section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Latest News */}
        <motion.section 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100"
        >
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-slate-100 flex items-center gap-2">
            Latest News
          </h2>
          <div className="space-y-6">
            {newsItems.map((item, index) => (
              <div key={index} className="flex gap-4 group">
                <div className="w-24 shrink-0 text-sm font-semibold text-slate-400 group-hover:text-accent transition-colors">
                  {item.date}
                </div>
                <div className="text-slate-700">
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Areas of interest / Media */}
        <div className="flex flex-col gap-8">
          <motion.section 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 md:p-8 rounded-2xl shadow-sm text-white"
          >
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-slate-700/50">
              Research Themes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {mediaItems.map((item, index) => (
                <div key={index} className="relative aspect-video rounded-lg overflow-hidden group">
                  <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                    <p className="font-medium text-sm text-white leading-tight">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-blue-50 border border-blue-100 p-6 md:p-8 rounded-2xl"
          >
            <h2 className="text-xl font-bold text-blue-900 mb-3">Prospective Students</h2>
            <p className="text-blue-800/80 text-sm leading-relaxed">
              I am always looking for motivated Ph.D. students. If you are interested in joining the lab and doing research in Data Mining, Machine Learning, and Big Data Analysis, please read my recent papers and feel free to reach out to me with your CV and transcripts.
            </p>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
