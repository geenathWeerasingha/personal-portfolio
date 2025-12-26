import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full" />
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Abstract Visual */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-2xl blur-xl" />
                <div className="relative glass-card p-8">
                  <div className="w-48 h-48 relative">
                    {/* Abstract code/tech visual */}
                    <div className="absolute inset-0 flex flex-col justify-center gap-2">
                      <div className="h-2 bg-cyan-500/60 rounded-full w-3/4" />
                      <div className="h-2 bg-slate-300 rounded-full w-full" />
                      <div className="h-2 bg-teal-500/60 rounded-full w-1/2" />
                      <div className="h-2 bg-slate-300 rounded-full w-5/6" />
                      <div className="h-2 bg-cyan-500/40 rounded-full w-2/3" />
                      <div className="h-2 bg-slate-300 rounded-full w-full" />
                      <div className="h-2 bg-teal-500/40 rounded-full w-3/4" />
                    </div>
                    {/* Overlay icons */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div className="absolute bottom-4 left-4 w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="lg:col-span-3 space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                I am a Software Engineer with hands-on experience building large-scale, AI-powered platforms. 
                My work spans full-stack development, cloud infrastructure, and secure system design, with a 
                strong focus on compliance, scalability, and real-world production systems.
              </p>
              
              <p className="text-slate-600 leading-relaxed">
                I have contributed to end-to-end product development — from frontend user experiences to 
                backend services, AI integrations, and AWS infrastructure — supporting applications used 
                by international healthcare providers.
              </p>

              <p className="text-slate-600 leading-relaxed">
                I am a Computer Science graduate with a strong passion for software development and technology. 
                With a solid foundation in programming and problem-solving, I thrive on tackling challenging 
                projects and creating innovative solutions.
              </p>

              <p className="text-slate-500 leading-relaxed">
                Eager to enhance my skills and knowledge, I am actively seeking opportunities that offer a 
                dynamic work environment where I can grow, learn, and contribute to the success of an organization.
              </p>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-cyan-600">1+</p>
                  <p className="text-sm text-slate-500">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-cyan-600">AWS</p>
                  <p className="text-sm text-slate-500">Cloud Platform</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-cyan-600">AI/ML</p>
                  <p className="text-sm text-slate-500">Specialization</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

