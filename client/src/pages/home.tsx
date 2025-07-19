import { useState } from 'react';
import { User, Briefcase, Monitor, Star, Mail, Linkedin, Menu, X } from 'lucide-react';
import profileImage from '@assets/profile-pic_1752898950083.png';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    closeMobileMenu();
  };

  const professionalSkills = [
    'Startups', 'Brand Management', 'GTM Strategy', 
    'E-Commerce', 'Biz Development', 'Consulting'
  ];

  const technicalSkills = [
    'Shopify', 'SaaS Platforms', 'Digital Marketing', 
    'Analytics', 'AI for Business', 'Operations'
  ];

  const interests = [
    'Modeling', 'Music', 'Fashion', 'Snowboarding',
    'Racing', 'Traveling', 'Reading', 'Golfing'
  ];

  return (
    <div className="font-sans bg-white text-gray-dark">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-light z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl berkeley-blue font-extrabold">Arnav Jamwal</div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('about')} 
                className="nav-link text-gray-dark hover:california-gold font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')} 
                className="nav-link text-gray-dark hover:california-gold font-medium"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="nav-link text-gray-dark hover:california-gold font-medium"
              >
                Contact
              </button>
            </div>
            {/* Mobile menu button */}
            <button 
              className="md:hidden berkeley-blue" 
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-light">
              <div className="flex flex-col space-y-3 pt-4">
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="nav-link text-gray-dark hover:california-gold font-medium text-left"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('skills')} 
                  className="nav-link text-gray-dark hover:california-gold font-medium text-left"
                >
                  Skills
                </button>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="nav-link text-gray-dark hover:california-gold font-medium text-left"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* Hero Section */}
      <section className="hero-gradient text-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="w-32 h-32 bg-white/10 rounded-full mb-6 flex items-center justify-center overflow-hidden shadow-xl">
              <img 
                src={profileImage} 
                alt="Arnav Jamwal"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Arnav Jamwal</h1>
            <p className="text-xl md:text-2xl font-light text-white/90">Founder & Student at Berkeley Haas</p>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold berkeley-blue mb-4">About Me</h2>
            <div className="w-24 h-1 bg-california-gold mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-medium leading-relaxed">
                I'm an entrepreneur and business strategist with a passion for building and scaling digital ventures. 
                My experience spans e-commerce, SaaS, and consulting across multiple successful ventures.
              </p>
              <p className="text-lg text-gray-medium leading-relaxed">
                Currently pursuing my degree at Berkeley Haas while leading a stealth startup 
                and advising early-stage founders on growth strategy and brand development.
              </p>
              <div className="flex space-x-4 pt-4">
                <div className="bg-gray-light px-4 py-2 rounded-full">
                  <span className="text-sm font-medium berkeley-blue">Berkeley Haas Undergrad</span>
                </div>
                <div className="bg-gray-light px-4 py-2 rounded-full">
                  <span className="text-sm font-medium berkeley-blue">8+ Years Experience</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-light/50 p-8 rounded-2xl hover-lift">
              <h3 className="text-xl font-semibold berkeley-blue mb-4">Professional Focus</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-california-gold rounded-full mr-3"></div>
                  <span className="text-gray-medium">E-commerce & DTC Brands</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-california-gold rounded-full mr-3"></div>
                  <span className="text-gray-medium">SaaS & Technology</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-california-gold rounded-full mr-3"></div>
                  <span className="text-gray-medium">Go-to-Market Strategy</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-california-gold rounded-full mr-3"></div>
                  <span className="text-gray-medium">Startup Consulting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold berkeley-blue mb-4">Skills & Interests</h2>
            <div className="w-24 h-1 bg-california-gold mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Professional Skills */}
            <div className="bg-white p-8 rounded-2xl hover-lift">
              <h3 className="text-xl font-semibold berkeley-blue mb-6 flex items-center">
                <Briefcase className="w-6 h-6 mr-3 california-gold" />
                Professional Skills
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {professionalSkills.map((skill, index) => (
                  <div 
                    key={index}
                    className="skill-tag bg-gray-light text-gray-dark px-3 py-2 rounded-full text-sm font-medium text-center cursor-pointer"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Technical Skills */}
            <div className="bg-white p-8 rounded-2xl hover-lift">
              <h3 className="text-xl font-semibold berkeley-blue mb-6 flex items-center">
                <Monitor className="w-6 h-6 mr-3 california-gold" />
                Technical Skills
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {technicalSkills.map((skill, index) => (
                  <div 
                    key={index}
                    className="skill-tag bg-gray-light text-gray-dark px-3 py-2 rounded-full text-sm font-medium text-center cursor-pointer"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Interests Section */}
          <div className="mt-8">
            <div className="bg-white p-8 rounded-2xl hover-lift">
              <h3 className="text-xl font-semibold berkeley-blue mb-6 flex items-center">
                <Star className="w-6 h-6 mr-3 california-gold" />
                Interests & Hobbies
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {interests.map((interest, index) => (
                  <div 
                    key={index}
                    className="skill-tag bg-gray-light text-gray-dark px-3 py-2 rounded-full text-sm font-medium text-center cursor-pointer"
                  >
                    {interest}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold berkeley-blue mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-california-gold mx-auto"></div>
            <p className="text-lg text-gray-medium mt-6 max-w-2xl mx-auto">
              Interested in collaborating or discussing opportunities? I'd love to hear from you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* Email Contact */}
            <a 
              href="mailto:jamwal@berkeley.edu" 
              className="contact-link bg-white border-2 border-gray-light p-8 rounded-2xl text-center hover:border-berkeley-blue group"
            >
              <div className="w-16 h-16 bg-berkeley-blue text-white rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-california-gold transition-colors duration-300">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold berkeley-blue mb-2">Email</h3>
              <p className="text-gray-medium">jamwal@berkeley.edu</p>
            </a>
            
            {/* LinkedIn Contact */}
            <a 
              href="https://linkedin.com/in/arnavjamwal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link bg-white border-2 border-gray-light p-8 rounded-2xl text-center hover:border-berkeley-blue group"
            >
              <div className="w-16 h-16 bg-berkeley-blue text-white rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-california-gold transition-colors duration-300">
                <Linkedin className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold berkeley-blue mb-2">LinkedIn</h3>
              <p className="text-gray-medium">Connect with me</p>
            </a>
          </div>
          
          {/* Additional CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-medium mb-6">Let's discuss how we can work together to create something amazing.</p>
            <a 
              href="mailto:jamwal@berkeley.edu" 
              className="inline-flex items-center bg-berkeley-blue text-white px-8 py-3 rounded-full font-semibold hover:bg-california-gold hover:berkeley-blue transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start a Conversation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-berkeley-blue text-white py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-white/80">&copy; 2024 Arnav Jamwal. Designed with Berkeley pride.</p>
        </div>
      </footer>
    </div>
  );
}
