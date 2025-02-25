import React, { useState } from 'react';
import { Send, Beaker, Brain, FlaskRound as Flask, Microscope, Sparkles, ArrowRight } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0A0118] text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-animate bg-gradient-to-br from-[#1A0B2E] via-[#16082F] to-[#0A0118] opacity-80"></div>
      
      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle at 30% 30%, rgba(${Math.random() * 100 + 100}, ${Math.random() * 50}, ${Math.random() * 255}, 0.1), transparent)`,
              animationDelay: `${i * -2}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 py-16 max-w-6xl">
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Logo and Title */}
          <div className="animate-float">
            <div className="flex items-center space-x-4 text-5xl md:text-7xl font-bold">
              <Brain className="w-16 h-16 md:w-20 md:h-20 text-purple-400" />
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                AIRe<span className="highlight-a">a</span>searchersMania
              </h1>
            </div>
            <p className="text-sm md:text-base mt-2 text-purple-300 opacity-80">
              Where the extra "a" makes us extraordinary
            </p>
          </div>
          
          {/* Tagline */}
          <div className="animate-pulse-slow">
            <p className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 font-light max-w-3xl">
              Something extraordinary is brewing in the world of AI research.
              <span className="block mt-2 text-lg md:text-xl text-blue-300">We're crafting the future of artificial intelligence research.</span>
            </p>
          </div>

          {/* Email Subscription Form */}
          <div className="w-full max-w-lg mt-8 transform hover:scale-105 transition-transform duration-300">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <div className="relative glass-effect rounded-2xl p-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 rounded-xl bg-transparent text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-2 rounded-lg transition duration-300 flex items-center space-x-2 group"
                >
                  <span>Join Waitlist</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              {submitted && (
                <div className="flex items-center justify-center space-x-2 text-purple-300">
                  <Sparkles className="w-5 h-5" />
                  <p>Thank you! You're now on our exclusive waitlist.</p>
                </div>
              )}
            </form>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: Beaker,
                title: "Innovative Research",
                description: "Cutting-edge AI research at your fingertips",
                color: "text-blue-400",
                delay: "0"
              },
              {
                icon: Flask,
                title: "Collaboration",
                description: "Connect with leading AI researchers worldwide",
                color: "text-purple-400",
                delay: "100"
              },
              {
                icon: Microscope,
                title: "Deep Learning",
                description: "Advanced tools for deep learning research",
                color: "text-pink-400",
                delay: "200"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="card-hover glass-effect p-8 rounded-2xl"
                style={{ animationDelay: `${feature.delay}ms` }}
              >
                <feature.icon className={`w-10 h-10 mb-4 ${feature.color}`} />
                <h3 className="text-2xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  {feature.title}
                </h3>
                <p className="text-blue-200">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative w-full py-6 text-center text-white/60 glass-effect mt-20">
        <p>© 2024 AIReasearchersMania. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;