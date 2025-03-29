import React, { useState, useEffect } from 'react';
import { AnimatedText } from './components/ui/animated-text';
import { MovingBorder } from './components/ui/moving-border';
import { SocialLinks } from './components/social-links';
import { LoadingScreen } from './components/ui/loading-screen';
import { ThemeToggle } from './components/ui/theme-toggle';
import { CustomCursor } from './components/ui/custom-cursor';
import { ContactForm } from './components/contact-form';
import { Code, Globe, Database, Monitor, Search, Palette, Server, Layout, MousePointer, ExternalLink, Github, Rocket, Target, Users, TrendingUp } from 'lucide-react';
import { motion, useMotionValue, AnimatePresence } from 'framer-motion';


function App() {
  
  const [isLoading, setIsLoading] = useState(true);
  const mouseX = useMotionValue(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    mouseX.set(e.clientX);
  };

  const projects = [
    {
      title: "GeeksHub",
      description: "Transform your future with our comprehensive computer training programs. .",
      image: "https://i.pinimg.com/736x/6a/50/3f/6a503fc28d991c249b3cf8e88a023343.jpg",
      tech: ["React", "Next.js", "Tailwind CSS"],
      demoUrl: "https://v0-geeks-hub.vercel.app/",
      githubUrl: "https://github.com/akasaam/geekshub",
     
    },
    {
      title: "Viral Alchemy",
      description: "Digital marketing agency specializing in viral content creation and social media strategy",
      image: "https://i.pinimg.com/736x/34/53/8d/34538d9f40246bba3e5faa2c5d943f17.jpg",
      tech: ["React", "Next.js", "Tailwind CSS ","Shadcn Ui"],
      demoUrl: "https://viral-alchemy.vercel.app/",
      githubUrl: "https://github.com/akasaam/viral-alchemy",
     
    },
    {
      title: "Tic Tac Toe Game",
      description: "Interactive player vs computer game with AI opponent and score tracking",
      image: "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?q=80&w=1600&h=900&fit=crop",
      tech: ["React", "JavaScript", "Tailwind CSS"],
      demoUrl: "https://tic-tac-toe.raju.dev",
      githubUrl: "https://github.com/akasaam/tic-tac-toe"
    },
    {
      title: "Todo List Application",
      description: "Feature-rich task management app with local storage and categories",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1600&h=900&fit=crop",
      tech: ["Tailwind CSS", "JavaScript",],
      demoUrl: "https://todo.raju.dev",
      githubUrl: "https://github.com/akasaam/ToDo-List"
    },
    {
      title: "Twelve 7 Salon Website",
      description: "Professional salon website with booking system and service catalog",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1600&h=900&fit=crop",
      tech: ["WordPress","Shopify"],
      demoUrl: "https://twelve7salon.com",
      githubUrl: "https://github.com/akasaam/twelve7-salon"
    },
    
    {
      title: "Woods Club",
      description: "A e learning platform for students where the can learn coading and business",
      image: "https://i.pinimg.com/736x/9e/0e/2a/9e0e2a8be395cbebe80fe4296dcb4a0e.jpg",
      tech: ["React", "Next.js", "Tailwind CSS"],
      demoUrl: "https://woodsclub.netlify.app/",
      githubUrl: "https://github.com/akasaam/woods-club"
    }
  ];

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <ThemeToggle />
      <CustomCursor />

      <motion.div 
        className="min-h-screen bg-slate-950 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        {/* Background Image */}
        <div 
          className="fixed inset-0 z-0 opacity-20" 
          style={{
            backgroundImage: "url('https://i.pinimg.com/originals/40/78/39/407839a425fa1134b594ea1a06fdc641.gif')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Hero Section */}
          <header className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                <div className="relative">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-violet-500/20 shadow-xl shadow-violet-500/10">
                    <img 
                      src="https://avatars.githubusercontent.com/u/133478692?v=4" 
                      alt="Raju Halder"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div>
                  <AnimatedText
                    text="RAJU HALDER"
                    className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-200 to-indigo-600"
                  />
                  <p className="mt-4 text-slate-400 text-lg leading-relaxed">
                    Web developer proficient in HTML, CSS, JS, and React.js. Passionate about creating beautiful, responsive, and user-friendly websites.🚀💻
                  </p>
                </div>
              </div>
              
              <SocialLinks />
            </div>
          </header>

          {/* Projects Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-600">Featured Projects</h2>
            <div className="relative overflow-hidden">
              <div className="absolute bottom-4 right-4 flex items-center gap-2 text-slate-400 z-10 bg-slate-900/80 px-4 py-2 rounded-full backdrop-blur-sm">
                <MousePointer className="w-4 h-4" />
                <span className="text-sm">Drag to scroll</span>
              </div>
              <motion.div 
                className="flex gap-6 cursor-grab active:cursor-grabbing py-8"
                drag="x"
                dragConstraints={{ right: 0, left: -((projects.length - 1) * 420) }}
                onMouseMove={handleMouseMove}
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className="relative flex-shrink-0 w-[400px] overflow-hidden rounded-xl hover-card group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-[225px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-slate-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-violet-500/20 rounded-full text-violet-300 text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <a 
                          href={project.demoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          Source Code
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-600">Work Experience</h2>
            <div className="space-y-8">
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 hover-card">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Code className="w-5 h-5 text-violet-400" />
                  Frontend Developer
                </h3>
                <p className="text-slate-400">Freelancing-India | 2024 - Present</p>
                <p className="mt-2">Working as a freelance Frontend Developer</p>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 hover-card">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-violet-400" />
                  Software Sales Executive
                </h3>
                <p className="text-slate-400">WinPace Solution, Kolkata | July 2024 - January 2025</p>
                <ul className="mt-2 list-disc list-inside text-slate-300">
                  <li>Telly calling</li>
                  <li>Creative Ads</li>
                  <li>Software sales</li>
                </ul>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 hover-card">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Globe className="w-5 h-5 text-violet-400" />
                  Front End Web Developer
                </h3>
                <p className="text-slate-400">All In One Services, Siliguri | November 2023 - March 2024</p>
                <ul className="mt-2 list-disc list-inside text-slate-300">
                  <li>Built websites</li>
                  <li>Optimized website performance</li>
                  <li>Implemented responsive design</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-600">Education</h2>
            <div className="space-y-8">
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 hover-card">
                <h3 className="text-xl font-semibold">Bachelor of Arts in Sociology</h3>
                <p className="text-slate-400">Munshi Prem Chand Mahavidyalaya, Siliguri | 2021 - Present</p>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 hover-card">
                <h3 className="text-xl font-semibold">12th Pass</h3>
                <p className="text-slate-400">Hider Para Buddha Bharati High School, Siliguri</p>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="container mx-auto px-4 py-16 overflow-hidden">
            <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-600">Skills</h2>
            
            <div className="relative">
              <div className="skill-slider flex gap-8 whitespace-nowrap">
                {[
                  { name: 'HTML5', icon: <Layout className="w-6 h-6" /> },
                  { name: 'CSS', icon: <Palette className="w-6 h-6" /> },
                  { name: 'JavaScript', icon: <Code className="w-6 h-6" /> },
                  { name: 'React.js', icon: <Globe className="w-6 h-6" /> },
                  { name: 'PHP', icon: <Server className="w-6 h-6" /> },
                  { name: 'MySQL', icon: <Database className="w-6 h-6" /> },
                  { name: 'WordPress', icon: <Globe className="w-6 h-6" /> },
                  { name: 'SEO', icon: <Search className="w-6 h-6" /> },
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 hover-card inline-flex items-center gap-3"
                  >
                    <span className="text-violet-400">{skill.icon}</span>
                    <p className="text-lg font-medium">{skill.name}</p>
                  </div>
                ))}
                {/* Duplicate for infinite scroll effect */}
                {[
                  { name: 'HTML5', icon: <Layout className="w-6 h-6" /> },
                  { name: 'CSS', icon: <Palette className="w-6 h-6" /> },
                  { name: 'JavaScript', icon: <Code className="w-6 h-6" /> },
                  { name: 'React.js', icon: <Globe className="w-6 h-6" /> },
                  { name: 'PHP', icon: <Server className="w-6 h-6" /> },
                  { name: 'MySQL', icon: <Database className="w-6 h-6" /> },
                  { name: 'WordPress', icon: <Globe className="w-6 h-6" /> },
                  { name: 'SEO', icon: <Search className="w-6 h-6" /> },
                ].map((skill) => (
                  <div
                    key={`${skill.name}-duplicate`}
                    className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 hover-card inline-flex items-center gap-3"
                  >
                    <span className="text-violet-400">{skill.icon}</span>
                    <p className="text-lg font-medium">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-600">Get in Touch</h2>
            <ContactForm />
          </section>

          {/* Footer */}
          <footer className="container mx-auto px-4 py-8 mt-16 border-t border-slate-800">
            <div className="text-center text-slate-400">
              <p>© {new Date().getFullYear()} Raju Halder. All rights reserved.</p>
              <p className="mt-2">Made with ❤️ in Siliguri, India</p>
            </div>
          </footer>
        </div>
      </motion.div>
    </>
  );
}

export default App;
