import { motion } from 'framer-motion';
import { servicesData } from '../data/content';

export function Services() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="max-w-5xl mx-auto px-4 py-12 space-y-12"
    >
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Professional Services</h1>
        <p className="text-lg text-slate-600 mt-4">
          Contributions to the academic community through editorial work, journal reviewing, and conference service.
        </p>
      </header>

      {/* Editorial Section */}
      <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2 mb-6 uppercase tracking-wider text-xs">Editorial Work</h2>
        <div className="space-y-8">
          {servicesData.editorial.map((item, idx) => (
            <div key={idx} className="group">
              <h3 className="text-xl font-semibold text-slate-900 mb-1 group-hover:text-accent transition-colors">
                {item.role}
              </h3>
              <p className="text-accent font-medium mb-2">{item.journal}</p>
              <p className="text-slate-800 font-medium mb-1">{item.title}</p>
              <p className="text-slate-600 text-sm">{item.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Journal Reviewing */}
      <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2 mb-6 uppercase tracking-wider text-xs">Journal Reviewing</h2>
        <p className="text-slate-600 mb-6 text-sm">Regularly contributing to the peer-review process for the following journals:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          {servicesData.journalReviewer.map((journal, idx) => (
            <div key={idx} className="flex items-start gap-3 text-slate-700 group">
              <div className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-2 shrink-0 group-hover:bg-accent transition-colors" />
              <span className="text-sm font-medium">{journal}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Conference Service */}
      <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2 mb-6 uppercase tracking-wider text-xs">Conference & Professional Service</h2>
        <div className="space-y-6">
          {servicesData.conferenceService.map((item, idx) => (
            <div key={idx} className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4">
              <span className="font-semibold text-slate-900 min-w-[220px]">{item.role}</span>
              <span className="text-slate-600 text-sm">{item.conference}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Memberships */}
      <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2 mb-6 uppercase tracking-wider text-xs">Professional Memberships</h2>
        <div className="flex flex-wrap gap-4">
          {servicesData.memberships.map((membership, idx) => (
            <div key={idx} className="bg-slate-50 px-4 py-2 rounded-lg border border-slate-100 text-slate-700 text-sm font-medium">
              {membership}
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
