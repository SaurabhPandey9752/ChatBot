import React from 'react';
import Navbar from './components/Navbar';
import Chatbot from './components/Chatbot';
import { Cpu, Layers, Zap } from 'lucide-react';

function App() {
  return (
    <div className="relative min-h-screen mesh-gradient overflow-hidden">
      {/* Background Patterns */}
      <div className="fixed inset-0 grid-pattern opacity-30" />
      
      {/* Animated Light Beams */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 light-beam opacity-20" />
        <div className="absolute inset-0 light-beam opacity-20" style={{ animationDelay: '-4s' }} />
      </div>

      <Navbar />

      <div className="relative pt-16">
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col text-left">
              <div className="relative mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extralight tracking-tight text-white">
                  Future of{' '}
                  <span className="relative">
                    <span className="relative z-10 font-normal bg-gradient-to-r from-purple-200 via-indigo-200 to-purple-200 bg-clip-text text-transparent">
                      3D Printing
                    </span>
                    <span className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-purple-500/20 blur-lg opacity-50" />
                  </span>
                </h1>
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-purple-500/10 blur-xl opacity-50" />
              </div>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 font-light leading-relaxed">
                Experience revolutionary 3D printing technology that transforms your creative vision into reality. 
                Precision engineering meets limitless possibilities.
              </p>
              <button className="group relative w-fit px-8 py-4 rounded-full bg-white/5 backdrop-blur-sm text-white font-light border border-white/20 hover:bg-white/10 transition-all duration-300">
                <span className="relative z-10">Start Creating</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1705475025559-ad8efdedc74f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8M2QlMjBwcmludGVyfGVufDB8fDB8fHww" 
                  alt="3D Printer in Action" 
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-24">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Cpu, title: 'Precision Engineering', desc: 'Industry-leading accuracy with cutting-edge technology for flawless prints.' },
              { icon: Zap, title: 'Smart Assistance', desc: 'AI-powered support available 24/7 to ensure your printing success.' },
              { icon: Layers, title: 'Future-Ready', desc: 'Stay ahead with regular updates and innovative features.' }
            ].map(({ icon: Icon, title, desc }, i) => (
              <div 
                key={i} 
                className="group glass-effect p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <Icon size={24} className="text-purple-400 mr-3" />
                  <h3 className="text-xl font-light text-white">{title}</h3>
                </div>
                <p className="text-gray-400 font-light">{desc}</p>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Chatbot />
    </div>
  );
}

export default App;
