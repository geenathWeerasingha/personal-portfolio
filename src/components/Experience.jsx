import { motion } from 'framer-motion'

const experiences = [
  {
    type: 'work',
    title: 'Software Engineer',
    company: 'AIGP Health',
    location: 'Singapore · Remote',
    duration: 'Aug 2025 – Present',
    period: '5 mos',
    description: null,
    highlights: [],
  },
  {
    type: 'work',
    title: 'Associate Software Engineer',
    company: 'AIGP Health',
    location: 'Singapore · Remote',
    duration: 'Nov 2024 – Jul 2025',
    period: '9 mos',
    description:
      'As an Associate Software Engineer at AIGP Health, I design, build, and deploy full-stack, AI-powered applications, driving scalable and intelligent solutions across the AWS ecosystem.',
    highlights: [
      'Architected and delivered end-to-end generative AI solutions, including advanced AI chatbot agents with LangChain, LangGraph, and OpenAI API integration',
      'Developed robust backend systems using Python and Django, and created dynamic, responsive frontends with React',
      'Specialized in vector memory, PGVector, and AI-driven features to enhance product capabilities',
      'Managed complete DevOps lifecycle: CI/CD pipelines (AWS CodePipeline), Elastic Beanstalk deployments, AWS Secrets Manager',
      'Orchestrated deployments across AWS services—EC2, S3, API Gateway, Lambda, RDS—to ensure reliability and scalability',
      'Optimized SQL (PostgreSQL/pgvector on RDS) and NoSQL (DynamoDB) databases for advanced AI requirements',
    ],
    skills: ['Django REST Framework', 'Amazon Web Services (AWS)', 'React', 'Python'],
  },
]

const education = [
  {
    degree: 'Bachelor of Science (BS), Computer Science',
    institution: 'University of Colombo School of Computing',
    duration: '2021 – 2024',
    grade: 'GPA – 3.62',
  },
  {
    degree: 'Secondary Education',
    institution: 'Rahula College',
    duration: 'Mar 2007 – Aug 2019',
    grade: null,
  },
]

function Experience() {
  return (
    <section id="experience" className="section-padding">
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
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Work Experience</h3>
              <span className="text-sm text-slate-500">1 yr 2 mos total</span>
            </div>

            {/* Timeline */}
            <div className="relative pl-8 border-l-2 border-slate-200">
              {experiences.map((exp, index) => (
                <div key={index} className="relative mb-10 last:mb-0">
                  {/* Timeline dot */}
                  <div className="absolute -left-[25px] w-4 h-4 bg-cyan-500 rounded-full border-4 border-white" />
                  
                  {/* Content */}
                  <div className="glass-card p-6">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-slate-800">{exp.title}</h4>
                        <p className="text-cyan-600 font-medium">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-slate-500">{exp.duration}</p>
                        <p className="text-xs text-slate-400">{exp.period}</p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-slate-500 mb-4">{exp.location}</p>
                    
                    {exp.description && (
                      <p className="text-slate-600 mb-4">{exp.description}</p>
                    )}
                    
                    {exp.highlights && exp.highlights.length > 0 && (
                      <ul className="space-y-2 mb-4">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                            <span className="text-cyan-500 mt-1.5">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {exp.skills && exp.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200">
                        {exp.skills.map((skill) => (
                          <span key={skill} className="text-xs px-2 py-1 bg-slate-100 rounded text-slate-600">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Education</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <div key={index} className="glass-card p-6">
                  <h4 className="text-lg font-semibold text-slate-800 mb-1">{edu.degree}</h4>
                  <p className="text-teal-600 font-medium mb-2">{edu.institution}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">{edu.duration}</span>
                    {edu.grade && (
                      <span className="text-slate-600 font-medium">{edu.grade}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience

