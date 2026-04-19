import { motion } from 'framer-motion';
import { Users, UserCircle, GraduationCap } from 'lucide-react';
import { studentsData } from '../data/content';

export function Students() {
  const categories = [
    { title: "Ph.D. Students", data: studentsData.phd, border: "border-emerald-200", bg: "bg-emerald-50" },
    { title: "Master's Students", data: studentsData.masters, border: "border-blue-200", bg: "bg-blue-50" },
    { title: "Undergraduate Students", data: studentsData.undergrad, border: "border-indigo-200", bg: "bg-indigo-50" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="max-w-5xl mx-auto px-4 py-12"
    >
      <div className="flex items-center gap-3 mb-8">
        <Users className="w-8 h-8 text-accent" />
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Research Group</h1>
      </div>

      <p className="text-lg text-slate-600 mb-12 max-w-3xl leading-relaxed">
        I am fortunate to work with an amazing group of students at various levels. 
        If you are interested in joining our group, please refer to the instructions for Prospective Students on the home page.
      </p>

      <div className="space-y-16">
        {categories.map((category, idx) => (
          <section key={idx}>
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2 border-b border-slate-200 pb-2">
              <GraduationCap className="text-slate-400" /> {category.title}
            </h2>
            
            {category.data.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.data.map((student, sIdx) => (
                  <motion.div 
                    key={sIdx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: sIdx * 0.1 }}
                    className={`p-6 rounded-2xl border ${category.border} ${category.bg} shadow-sm group hover:shadow-md transition-shadow`}
                  >
                    <div className="flex items-start gap-4">
                      <UserCircle className="w-12 h-12 text-slate-400 mix-blend-multiply opacity-50 shrink-0 group-hover:text-accent transition-colors" />
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{student.name}</h3>
                        <span className="inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-semibold tracking-wide bg-white text-slate-600 border border-slate-200 mb-3 shadow-xs">
                          {student.status}
                        </span>
                        <p className="text-sm font-medium text-slate-700 leading-snug">
                          {student.research}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <p className="text-slate-500 italic">No current students in this category.</p>
            )}
          </section>
        ))}
      </div>
    </motion.div>
  );
}
