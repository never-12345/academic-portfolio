import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { teachingTimeline } from '../data/content';

export function Teaching() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto px-4 py-12"
    >
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Teaching & Appointments</h1>
      </div>

      <p className="text-lg text-slate-600 mb-12 leading-relaxed">
        An overview of recent academic appointments, course directives, and milestones in my teaching and professional career.
      </p>

      <div className="relative border-l-2 border-slate-200 ml-3 md:ml-6">
        {teachingTimeline.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15 }}
            className="mb-10 ml-8 md:ml-12 relative group"
          >
            {/* Timeline node */}
            <span className="absolute -left-[41px] md:-left-[57px] flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-white rounded-full border-4 border-slate-100 group-hover:border-accent transition-colors shadow-sm">
              <Calendar className="w-4 h-4 text-slate-400 group-hover:text-accent transition-colors" />
            </span>

            {/* Content card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 group-hover:shadow-md transition-shadow">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold tracking-wide bg-blue-50 text-accent mb-4">
                {item.date}
              </span>
              <h3 className="text-xl text-slate-800 font-medium leading-snug">
                {item.content}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
      
    </motion.div>
  );
}
