import { motion } from 'framer-motion'

function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Section Header */}
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full mb-8" />

          {/* Message */}
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-12 leading-relaxed">
            I'm always interested in discussing new opportunities, innovative projects, 
            and ways to contribute to impactful teams. Feel free to reach out!
          </p>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/geenathweerasingha/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-[#0A66C2]/10 dark:bg-[#0A66C2]/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <h3 className="text-slate-800 dark:text-white font-semibold mb-1">LinkedIn</h3>
              <p className="text-slate-500 dark:text-slate-500 text-sm">Connect professionally</p>
            </a>

            {/* Email */}
            <a
              href="mailto:geenathweer1@gmail.com"
              className="glass-card p-6 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-cyan-500/10 dark:bg-cyan-400/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-cyan-600 dark:text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-slate-800 dark:text-white font-semibold mb-1">Email</h3>
              <p className="text-slate-500 dark:text-slate-500 text-sm">geenathweer1@gmail.com</p>
            </a>
          </div>

          {/* Direct Email CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a
              href="mailto:geenathweer1@gmail.com"
              className="btn-primary text-lg px-8 py-4"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send me an Email
            </a>
          </motion.div>

          {/* Availability Status */}
          <p className="mt-8 text-slate-500 dark:text-slate-500 text-sm flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            Currently open to new opportunities
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
