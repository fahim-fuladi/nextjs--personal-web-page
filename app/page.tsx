
import Link from "next/link";
import { FaTelegramPlane, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#13021C] overflow-hidden relative">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-[#FF6B6B] opacity-20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-96 h-96 rounded-full bg-[#9F2B68] opacity-20 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 rounded-full bg-[#8A2BE2] opacity-20 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Navigation Bar with Glass Effect */}
      <nav className="fixed top-0 left-0 right-0 bg-white/5 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="object-contain animate-float"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {['HOME', 'ABOUT', 'SOLUTIONS', 'CASE STUDIES', 'CONTACT'].map((item, index) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-300 hover:text-white transition-colors duration-300 font-[jet-light] tracking-wider"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item}
                </Link>
              ))}
            </div>
            <button className="px-6 py-2 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:bg-white/20 transition duration-300 font-[jet-light]">
              Contact Us
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8" id="home">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="space-y-6">
            <p className="text-purple-400 text-sm uppercase tracking-wider animate-slide-in font-[jet-light]">
              WELCOME TO MY PORTFOLIO
            </p>
            <h1 className="text-5xl md:text-6xl font-[jet-extra] text-white leading-tight animate-slide-in" style={{ animationDelay: '0.2s' }}>
              Fahim Fuladi<br />
              <span className="text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Full Stack Developer</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-lg animate-slide-in font-[jet-light]" style={{ animationDelay: '0.4s' }}>
              Specialized in cross-platform and web development using Flutter and modern JavaScript frameworks.
              Creating scalable and efficient solutions for web and mobile applications.
            </p>

            {/* Tech Stack Icons */}
            {/* <div className="flex justify-center gap-8 my-8">
              <div className="flex flex-col items-center space-y-2">
                <img src="/flutter.svg" alt="Flutter" className="w-8 h-8" />
                <span className="text-gray-400 text-sm font-[jet-light]">Flutter</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <img src="/nextjs.svg" alt="Next.js" className="w-8 h-8" />
                <span className="text-gray-400 text-sm font-[jet-light]">Next.js</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <img src="/nestjs.svg" alt="Nest.js" className="w-8 h-8" />
                <span className="text-gray-400 text-sm font-[jet-light]">Nest.js</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <img src="/express.svg" alt="Express.js" className="w-8 h-8" />
                <span className="text-gray-400 text-sm font-[jet-light]">Express.js</span>
              </div>
            </div> */}

            {/* Animated CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-[jet-light] hover:opacity-90 transition duration-300 animate-float">
                Let's start
              </button>
              <button className="px-8 py-4 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:bg-white/20 transition duration-300 font-[jet-light]">
                Preview
              </button>
            </div>
          </div>
        </div>

        {/* Floating Logo */}
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 animate-float">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="opacity-50"
          />
        </div>
      </section>

      {/* Skills Section with Animated Cards */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8" id="solutions">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-[jet-bold] text-white mb-4">Technical Expertise</h2>
            <p className="text-purple-400 font-[jet-light]">Full Stack Development with Modern Technologies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mobile Development */}
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition duration-300 transform hover:-translate-y-2 animate-fade-in">
              <h3 className="text-xl font-[jet-bold] text-white mb-4">Mobile Development</h3>
              <ul className="text-gray-400 space-y-2 font-[jet-light]">
                <li>Flutter & Dart</li>
                <li>Cross-Platform Development</li>
                <li>Native Integration</li>
                <li>Mobile UI/UX Design</li>
              </ul>
            </div>

            {/* Frontend Development */}
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition duration-300 transform hover:-translate-y-2 animate-fade-in">
              <h3 className="text-xl font-[jet-bold] text-white mb-4">Frontend Development</h3>
              <ul className="text-gray-400 space-y-2 font-[jet-light]">
                <li>Next.js & React</li>
                <li>TypeScript</li>
                <li>Responsive Design</li>
                <li>Modern UI Frameworks</li>
              </ul>
            </div>

            {/* Backend Development */}
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition duration-300 transform hover:-translate-y-2 animate-fade-in">
              <h3 className="text-xl font-[jet-bold] text-white mb-4">Backend Development</h3>
              <ul className="text-gray-400 space-y-2 font-[jet-light]">
                <li>Nest.js & Express.js</li>
                <li>RESTful APIs</li>
                <li>Database Design</li>
                <li>Server Architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with Animated Elements */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8" id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-[jet-bold] text-white mb-8 animate-fade-in">Let's Connect</h2>
          <p className="text-gray-400 mb-12 font-[jet-light] animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Looking for a full-stack developer who can handle both mobile and web development?
            Let's discuss how I can help bring your ideas to life.
          </p>
          <div className="flex justify-center gap-6">
            {[
              { href: "https://github.com/fahim-fuladi", icon: FaGithub },
              { href: "https://t.me/fahimfooladi", icon: FaTelegramPlane },
              { href: "https://www.linkedin.com/in/fahimfuladi/", icon: FaLinkedinIn }
            ].map((social, index) => (
              <Link
                key={social.href}
                href={social.href}
                target="_blank"
                className="group animate-fade-in"
                style={{ animationDelay: `${0.4 + index * 0.2}s` }}
              >
                <div className="p-4 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 transition duration-300 transform hover:-translate-y-1">
                  <social.icon className="text-2xl text-white" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
