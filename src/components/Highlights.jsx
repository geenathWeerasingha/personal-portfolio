import { motion } from 'framer-motion'

const highlights = [
  {
    title: 'Cloud Infrastructure Migration',
    type: 'Cloud / DevOps',
    description:
      'Led full AWS region migration with zero downtime, designing new VPC architecture and implementing environment separation for enhanced security and compliance.',
    points: [
      'Led full AWS region migration',
      'Designed new VPC and environment separation',
      'Migrated databases and services with minimal disruption',
    ],
    tech: ['AWS VPC', 'RDS', 'Elastic Beanstalk', 'Route 53'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: 'AI-Powered Healthcare Platform',
    type: 'AI / Full-Stack',
    description:
      'Integrated state-of-the-art AI models into production healthcare systems, delivering end-to-end features from user interface to cloud deployment.',
    points: [
      'Integrated AI models into healthcare systems',
      'Delivered end-to-end features from UI to cloud deployment',
      'Built conversational AI agents with OpenAI and Gemini',
    ],
    tech: ['OpenAI', 'LangChain', 'React', 'FastAPI', 'AWS Lambda'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Security & Authentication Systems',
    type: 'Security / Backend',
    description:
      'Designed and implemented comprehensive authentication flows including multi-factor authentication, JWT-based security, and OAuth integrations.',
    points: [
      'Multi-factor authentication implementation',
      'JWT and OAuth security flows',
      'End-to-end encryption for sensitive data',
    ],
    tech: ['JWT', 'OAuth', 'AWS Secrets Manager', 'Encryption'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'DevOps & CI/CD Pipeline',
    type: 'DevOps',
    description:
      'Established robust CI/CD pipelines and containerized deployments, ensuring reliable and scalable application delivery across multiple environments.',
    points: [
      'CI/CD pipeline implementation with AWS CodePipeline',
      'Docker containerization for consistent deployments',
      'Multi-environment configuration management',
    ],
    tech: ['Docker', 'AWS CodePipeline', 'Elastic Beanstalk', 'GitHub Actions'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

function Highlights() {
  return (
    <section id="highlights" className="section-padding bg-slate-50">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Key Highlights
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-600 max-w-2xl mx-auto">
            Notable projects and achievements that demonstrate my expertise in building scalable, secure, and AI-powered systems.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-6"
        >
          {highlights.map((highlight) => (
            <motion.div
              key={highlight.title}
              variants={cardVariants}
              className="glass-card p-6 hover:border-cyan-500/30 transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-xl flex items-center justify-center text-cyan-600 group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <div className="flex-1">
                  <span className="text-xs font-medium text-cyan-600 uppercase tracking-wider">
                    {highlight.type}
                  </span>
                  <h3 className="text-lg font-semibold text-slate-800 mt-1">
                    {highlight.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                {highlight.description}
              </p>

              {/* Key Points */}
              <ul className="space-y-2 mb-4">
                {highlight.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-slate-500">
                    <svg className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200">
                {highlight.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-slate-100 border border-slate-200 rounded text-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Highlights

