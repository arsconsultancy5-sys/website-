/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  Users, 
  Search, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Menu, 
  X,
  Code,
  Building2,
  Factory,
  Stethoscope,
  GraduationCap,
  ChevronRight,
  Send
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Jobs', href: '#jobs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Briefcase className="text-white w-6 h-6" />
          </div>
          <span className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-blue-900' : 'text-white'}`}>
            ARS <span className="text-blue-600">Consultancy</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${scrolled ? 'text-slate-600' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-600/20"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-blue-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className={scrolled ? 'text-slate-900' : 'text-white'} /> : <Menu className={scrolled ? 'text-slate-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 font-medium py-2 border-b border-slate-100"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-blue-600 text-white text-center py-3 rounded-xl font-semibold mt-2"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920" 
          alt="Professional Office" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-blue-900/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block py-1 px-4 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-bold uppercase tracking-widest mb-6">
            Trusted Recruitment Partner
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Your Career, <br />
            <span className="text-blue-400">Our Commitment</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
            Connecting top-tier talent with world-class opportunities. We bridge the gap between ambition and success through personalized recruitment solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 group shadow-xl shadow-blue-600/30">
              Apply for Jobs
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
              Hire Talent
            </button>
          </div>
        </motion.div>
      </div>

      {/* Stats Overlay */}
      <div className="absolute bottom-0 left-0 w-full bg-white/5 backdrop-blur-sm border-t border-white/10 py-8 hidden lg:block">
        <div className="max-w-7xl mx-auto px-12 flex justify-between">
          {[
            { label: 'Placements', value: '5000+' },
            { label: 'Corporate Clients', value: '200+' },
            { label: 'Success Rate', value: '98%' },
            { label: 'Years Experience', value: '12+' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-white/60 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
              alt="Team Meeting" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-blue-600 p-8 rounded-3xl shadow-xl hidden md:block">
            <Users className="text-white w-12 h-12 mb-4" />
            <div className="text-white font-bold text-xl leading-tight">Expert <br />Recruiters</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">About ARS Consultancy</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
            Pioneering Excellence in <span className="text-blue-600">Talent Acquisition</span>
          </h3>
          <p className="text-slate-600 text-lg mb-6 leading-relaxed">
            ARS Consultancy is a premier recruitment and staffing firm dedicated to empowering businesses and individuals. We specialize in identifying high-potential talent and placing them in environments where they can thrive.
          </p>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            With a deep understanding of the evolving job market, we provide comprehensive career guidance and trusted placement services across various industries, ensuring a perfect match for both employers and candidates.
          </p>
          <ul className="space-y-4 mb-10">
            {[
              'Comprehensive Recruitment Strategies',
              'End-to-End Staffing Solutions',
              'Personalized Career Counseling',
              'Industry-Specific Expertise'
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle2 className="text-blue-600 w-5 h-5" />
                {item}
              </li>
            ))}
          </ul>
          <button className="text-blue-600 font-bold flex items-center gap-2 group">
            Learn More About Our Process
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Recruitment Services',
      desc: 'End-to-end talent sourcing and selection tailored to your business needs.',
      icon: <Search className="w-8 h-8" />,
    },
    {
      title: 'IT & Non-IT Hiring',
      desc: 'Specialized hiring for technical roles and diverse administrative positions.',
      icon: <Code className="w-8 h-8" />,
    },
    {
      title: 'Resume Screening',
      desc: 'Meticulous evaluation of candidates to ensure only the best reach your desk.',
      icon: <CheckCircle2 className="w-8 h-8" />,
    },
    {
      title: 'Interview Coordination',
      desc: 'Seamless management of the entire interview lifecycle for efficiency.',
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: 'Career Counseling',
      desc: 'Expert guidance for candidates to navigate their professional journey.',
      icon: <GraduationCap className="w-8 h-8" />,
    },
    {
      title: 'Corporate Staffing',
      desc: 'Scalable staffing solutions for large enterprises and growing startups.',
      icon: <Building2 className="w-8 h-8" />,
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</h2>
        <h3 className="text-4xl font-bold text-slate-900">Comprehensive <span className="text-blue-600">Service Solutions</span></h3>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-3xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-600/5 transition-all group"
          >
            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              {service.icon}
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
            <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
            <button className="text-blue-600 font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              Learn More <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const JobCategories = () => {
  const categories = [
    { name: 'IT Jobs', icon: <Code />, count: '1200+', color: 'bg-blue-500' },
    { name: 'Banking Jobs', icon: <Building2 />, count: '850+', color: 'bg-indigo-500' },
    { name: 'Manufacturing', icon: <Factory />, count: '600+', color: 'bg-emerald-500' },
    { name: 'Healthcare', icon: <Stethoscope />, count: '450+', color: 'bg-rose-500' },
    { name: 'Freshers', icon: <GraduationCap />, count: '2000+', color: 'bg-amber-500' },
  ];

  return (
    <section id="jobs" className="section-padding bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">Job Categories</h2>
            <h3 className="text-4xl font-bold mb-4">Explore Opportunities Across <span className="text-blue-400">Industries</span></h3>
            <p className="text-white/60 text-lg">We partner with leading organizations globally to bring you the best career paths.</p>
          </div>
          <button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-400 hover:text-white transition-all">
            View All Jobs
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl text-center group cursor-pointer"
            >
              <div className={`w-14 h-14 ${cat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                {React.cloneElement(cat.icon as React.ReactElement, { className: "w-7 h-7 text-white" })}
              </div>
              <h4 className="font-bold text-lg mb-2">{cat.name}</h4>
              <p className="text-white/40 text-sm font-medium">{cat.count} Openings</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Trusted Partner',
      desc: 'A decade of building relationships with top employers and candidates.',
      icon: <CheckCircle2 className="w-6 h-6" />,
    },
    {
      title: 'Fast Hiring',
      desc: 'Efficient processes that reduce time-to-hire without compromising quality.',
      icon: <CheckCircle2 className="w-6 h-6" />,
    },
    {
      title: 'Verified Employers',
      desc: 'We only partner with reputable organizations to ensure your safety.',
      icon: <CheckCircle2 className="w-6 h-6" />,
    },
    {
      title: 'Dedicated Support',
      desc: 'Our team is with you at every step of your recruitment journey.',
      icon: <CheckCircle2 className="w-6 h-6" />,
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Why ARS Consultancy</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
            The Preferred Choice for <span className="text-blue-600">Career Growth</span>
          </h3>
          <div className="grid sm:grid-cols-2 gap-8">
            {reasons.map((reason, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  {reason.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">{reason.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="bg-blue-600 rounded-[40px] p-12 text-white relative z-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
            <h4 className="text-3xl font-bold mb-6">Ready to take the next step?</h4>
            <p className="text-white/80 mb-8 text-lg">Join thousands of professionals who have found their dream careers through ARS Consultancy.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl border border-white/20">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/60 uppercase tracking-wider">Call Us Today</div>
                  <div className="font-bold text-lg">+91 9500448483</div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl border border-white/20">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/60 uppercase tracking-wider">Email Us</div>
                  <div className="font-bold text-lg">arsconsultancy5@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -inset-4 bg-blue-100 rounded-[48px] -z-10 transform rotate-2" />
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Contact Us</h2>
          <h3 className="text-4xl font-bold text-slate-900">Get in <span className="text-blue-600">Touch</span></h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                <Phone className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Phone Number</h4>
              <p className="text-slate-600">+91 9500448483</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                <Mail className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Email Address</h4>
              <p className="text-slate-600">arsconsultancy5@gmail.com</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Our Location</h4>
              <p className="text-slate-600">Chennai, Tamil Nadu, India</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 rounded-[40px] shadow-2xl shadow-blue-900/5 border border-slate-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="+91 98765 43210"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                    value={formState.phone}
                    onChange={(e) => setFormState({...formState, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Message</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none resize-none"
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  />
                </div>
                <button 
                  disabled={isSubmitting}
                  className={`w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all ${isSuccess ? 'bg-emerald-500 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-600/20'}`}
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : isSuccess ? (
                    <>
                      <CheckCircle2 className="w-6 h-6" />
                      Message Sent Successfully
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 rounded-[40px] overflow-hidden h-[400px] relative shadow-xl border border-slate-100">
          <div className="absolute inset-0 bg-slate-200 animate-pulse flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-500 font-medium">Google Maps View - Chennai Office</p>
            </div>
          </div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539092!2d80.04419865!3d13.04748785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d333f%3A0x40c5a42928c58740!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1709000000000!5m2!1sen!2sin" 
            className="w-full h-full border-0 relative z-10 opacity-80"
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Briefcase className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                ARS <span className="text-blue-600">Consultancy</span>
              </span>
            </div>
            <p className="text-white/50 leading-relaxed mb-8">
              Empowering careers and businesses through expert recruitment solutions. Your trusted partner in professional growth.
            </p>
            <div className="flex gap-4">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-white/20 rounded-sm" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/50">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#jobs" className="hover:text-blue-400 transition-colors">Job Categories</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-white/50">
              <li><a href="#" className="hover:text-blue-400 transition-colors">IT Recruitment</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Executive Search</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Staffing Solutions</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Career Guidance</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Resume Building</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-white/50 mb-6 text-sm">Subscribe to get the latest job updates and career tips.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm flex-grow outline-none focus:border-blue-600 transition-colors"
              />
              <button className="bg-blue-600 p-3 rounded-xl hover:bg-blue-700 transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm">
          <p>© {new Date().getFullYear()} ARS Consultancy. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <JobCategories />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
