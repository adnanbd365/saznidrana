
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Mail, 
  Linkedin, 
  Twitter, 
  ArrowRight, 
  CheckCircle, 
  Globe, 
  MessageCircle,
  Phone,
  ArrowUpRight,
  // Added missing icons used in the component
  Facebook,
  Instagram,
  Search,
  BarChart3,
  Send
} from 'lucide-react';
import { SERVICES, SKILLS, WHY_CHOOSE_ME } from './constants';
import StrategyTool from './components/StrategyTool';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const linkedinLink = "https://www.linkedin.com/in/sanzidrana1";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md py-4 shadow-xl border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-extrabold tracking-tighter flex items-center gap-2">
          <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-sm">SR</span>
          SANZID <span className="text-blue-500">RANA</span>
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="text-sm font-medium hover:text-blue-400 transition-colors">
              {link.name}
            </a>
          ))}
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105">
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-t border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top-4">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="text-lg py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>
              {link.name}
            </a>
          ))}
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-center py-4 rounded-xl font-bold" onClick={() => setIsOpen(false)}>
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>
    </div>
    
    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8 animate-in slide-in-from-left-8 duration-700">
        <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 px-4 py-1.5 rounded-full">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
          <span className="text-xs font-bold text-blue-400 tracking-wider uppercase">Open for New Projects</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
          Accelerate Your Business <span className="gradient-text">Growth</span> with Data-Driven Marketing.
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
          Hi, I’m <span className="text-white font-semibold">Sanzid Rana</span>, a certified social media expert and full-time freelancer with <span className="text-blue-400 font-bold underline decoration-blue-500/30 underline-offset-4">5+ years of experience</span> helping brands scale through strategic paid media.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full font-bold flex items-center gap-2 group transition-all">
            Get Started Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#services" className="border border-white/20 hover:border-white/40 px-8 py-4 rounded-full font-bold transition-all">
            View My Services
          </a>
        </div>
        <div className="flex items-center gap-6 pt-4 grayscale opacity-60">
           <span className="text-sm font-semibold uppercase tracking-widest text-slate-500">Expertise in:</span>
           <div className="flex gap-4">
             <Facebook className="w-5 h-5" />
             <Instagram className="w-5 h-5" />
             <Twitter className="w-5 h-5" />
             <Search className="w-5 h-5" />
           </div>
        </div>
      </div>
      <div className="relative animate-in zoom-in-95 duration-700">
        <div className="relative z-10 rounded-[2rem] overflow-hidden border-2 border-white/10 aspect-square max-w-[500px] mx-auto group">
          <img src="https://picsum.photos/seed/sanzid/800/800" alt="Sanzid Rana" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute bottom-6 left-6 right-6 p-6 glass-card rounded-2xl flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">Total Ad Spend Managed</p>
              <p className="text-2xl font-bold">$1.2M+</p>
            </div>
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <BarChart3 className="text-white w-6 h-6" />
            </div>
          </div>
        </div>
        {/* Floating cards for visual flair */}
        <div className="absolute -top-6 -right-6 glass-card p-4 rounded-2xl border-blue-500/30 hidden md:block">
           <div className="flex items-center gap-3">
             <div className="bg-green-500/20 p-2 rounded-lg"><CheckCircle className="text-green-500 w-4 h-4" /></div>
             <p className="text-sm font-bold">100% Client Satisfaction</p>
           </div>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 bg-slate-900/30">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6 order-2 lg:order-1">
          <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.2em]">The Expert Behind the Strategy</h2>
          <h3 className="text-4xl font-bold leading-tight">Delivering measurable results and scaling businesses for half a decade.</h3>
          <p className="text-slate-400 leading-relaxed">
            I am a specialized digital marketer focusing on paid advertising, social media marketing, SEO, and e-commerce growth. My journey started 5 years ago with a mission to bridge the gap between complex advertising algorithms and business objectives.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Today, I help brands not just exist on social media, but dominate their niche through precise tracking (Pixel/CAPI), high-conversion creative strategy, and rigorous data analysis.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div>
              <p className="text-3xl font-bold text-white">500+</p>
              <p className="text-sm text-slate-500 uppercase tracking-wider font-bold">Campaigns Run</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">95%</p>
              <p className="text-sm text-slate-500 uppercase tracking-wider font-bold">Retention Rate</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 order-1 lg:order-2">
          <div className="space-y-4">
            <img src="https://picsum.photos/seed/marketing1/400/500" className="rounded-2xl w-full h-64 object-cover" />
            <img src="https://picsum.photos/seed/marketing2/400/300" className="rounded-2xl w-full h-40 object-cover" />
          </div>
          <div className="space-y-4 pt-8">
            <img src="https://picsum.photos/seed/marketing3/400/300" className="rounded-2xl w-full h-40 object-cover" />
            <img src="https://picsum.photos/seed/marketing4/400/500" className="rounded-2xl w-full h-64 object-cover" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-24">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.2em] mb-4">What I Do Best</h2>
        <h3 className="text-4xl font-bold mb-6">Comprehensive Marketing Solutions Tailored to Your Growth.</h3>
        <p className="text-slate-400">From technical setup to creative execution, I handle every aspect of your digital presence.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service, idx) => (
          <div key={idx} className="glass-card p-8 rounded-3xl hover:border-blue-500/50 transition-all duration-300 group cursor-default">
            <div className="bg-blue-600/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {React.cloneElement(service.icon as React.ReactElement, { className: "text-blue-500 w-7 h-7" })}
            </div>
            <h4 className="text-xl font-bold mb-4">{service.title}</h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {service.description}
            </p>
            <a href="#contact" className="text-xs font-bold uppercase tracking-widest text-blue-500 flex items-center gap-2 group-hover:gap-3 transition-all">
              Learn More <ArrowRight size={14} />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SkillsAndWhy = () => (
  <section id="skills" className="py-24 bg-slate-900/30">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.2em] mb-4">My Toolkit</h2>
          <h3 className="text-3xl font-bold mb-8">Specialized Technical Skills</h3>
          <div className="flex flex-wrap gap-3">
            {SKILLS.map((skill, idx) => (
              <span key={idx} className="bg-slate-800/50 border border-white/5 px-6 py-3 rounded-xl text-sm font-medium hover:bg-slate-800 transition-colors">
                {skill}
              </span>
            ))}
          </div>
          <div className="mt-12 p-8 glass-card rounded-3xl border-l-4 border-l-blue-600">
            <p className="text-slate-300 italic mb-4">"Success in modern marketing isn't just about showing ads; it's about tracking every touchpoint and optimizing for the highest value user behavior."</p>
            <p className="font-bold text-white">— Sanzid Rana</p>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.2em] mb-4">Why Choose Me</h2>
          <h3 className="text-3xl font-bold mb-8">The Sanzid Rana Advantage</h3>
          <div className="space-y-6">
            {WHY_CHOOSE_ME.map((item, idx) => (
              <div key={idx} className="flex gap-5">
                <div className="flex-shrink-0 mt-1">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Social Media Marketing',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const mobileNumber = "+88017033333028";

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Use the provided mobile number for WhatsApp link
    const phoneNumber = "88017033333028"; 
    const text = `Hi Sanzid, I'm ${formData.name}. %0A%0A*Subject:* ${formData.subject} %0A*Email:* ${formData.email} %0A%0A*Message:* %0A${formData.message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.2em] mb-4">Get In Touch</h2>
              <h3 className="text-5xl font-extrabold leading-tight">Let's Discuss Your Next <span className="gradient-text">Success.</span></h3>
            </div>
            <p className="text-xl text-slate-400">
              Client satisfaction is my main goal. Don’t hesitate to reach out via WhatsApp for a quick response or more details.
            </p>
            
            <div className="space-y-6">
              <a href={`tel:${mobileNumber}`} className="flex items-center gap-4 group p-4 glass-card rounded-2xl hover:border-blue-500/30 transition-all">
                <div className="bg-blue-600/10 p-4 rounded-xl group-hover:bg-blue-600/20 transition-all">
                  <Phone className="text-blue-500" />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-slate-500">Call Me At</p>
                  <p className="text-lg font-semibold">{mobileNumber}</p>
                </div>
              </a>

              <a href="mailto:contact@sanzidrana.com" className="flex items-center gap-4 group p-4 glass-card rounded-2xl hover:border-blue-500/30 transition-all">
                <div className="bg-blue-600/10 p-4 rounded-xl group-hover:bg-blue-600/20 transition-all">
                  <Mail className="text-blue-500" />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-slate-500">Email Me At</p>
                  <p className="text-lg font-semibold">contact@sanzidrana.com</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 p-4 glass-card rounded-2xl">
                <div className="bg-blue-600/10 p-4 rounded-xl">
                  <Globe className="text-blue-500" />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-slate-500">Available For</p>
                  <p className="text-lg font-semibold">Full-Time Freelance | Remote</p>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/sanzidrana1" target="_blank" rel="noopener noreferrer" className="p-4 glass-card rounded-xl hover:text-blue-400 transition-colors"><Linkedin /></a>
                <a href="#" className="p-4 glass-card rounded-xl hover:text-blue-400 transition-colors"><Twitter /></a>
                <a href="#" className="p-4 glass-card rounded-xl hover:text-blue-400 transition-colors"><Facebook /></a>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-10 rounded-[2.5rem]">
            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300">Your Name</label>
                  <input 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    type="text" 
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                    placeholder="John Doe" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300">Your Email</label>
                  <input 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    type="email" 
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                    placeholder="john@example.com" 
                    required 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300">Subject</label>
                <select 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option>Social Media Marketing</option>
                  <option>Google Ads Setup</option>
                  <option>Technical Audit (Pixel/CAPI)</option>
                  <option>SEO Services</option>
                  <option>Other / General Inquiry</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5} 
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                  placeholder="Tell me about your business goals..." 
                  required
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-green-600 hover:bg-green-700 py-4 rounded-xl font-bold flex items-center justify-center gap-2 group transition-all">
                Send via WhatsApp <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 border-t border-white/10 mt-12 bg-slate-950">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <a href="#" className="text-xl font-extrabold tracking-tighter">
            SANZID <span className="text-blue-500">RANA</span>
          </a>
          <p className="text-slate-500 text-sm mt-2">Certified Digital Marketing Specialist.</p>
        </div>
        <div className="flex gap-8 text-sm font-medium text-slate-400">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#contact" className="hover:text-white">Privacy Policy</a>
          <a href="#contact" className="hover:text-white">Terms</a>
        </div>
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Sanzid Rana. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <About />
      <Services />
      
      {/* Strategy Section with the AI Tool */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 blur-[120px]"></div>
        <div className="container mx-auto px-6">
           <StrategyTool />
        </div>
      </section>

      <SkillsAndWhy />
      <Contact />
      <Footer />
      
      {/* Persistent CTA for mobile */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <a href="https://wa.me/88017033333028" className="bg-green-500 p-4 rounded-full shadow-2xl flex items-center justify-center text-white">
          <MessageCircle size={30} />
        </a>
      </div>
    </div>
  );
};

export default App;
