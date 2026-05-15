import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';

export default function Contact({ selectedService = '' }) {
  const [formData, setFormData] = useState({ name: '', email: '', service: 'Custom Beat Production', message: '' });
  const [status, setStatus] = useState('');

  // Auto-fill message when a service is pre-selected from the Services section
  useEffect(() => {
    if (!selectedService) return;
    setFormData(prev => ({
      ...prev,
      service: selectedService,
      message: prev.message || `Hi, I'm interested in your ${selectedService} service. I'd love to discuss my project!`
    }));
    setStatus(''); // clear any previous submission status
  }, [selectedService]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const API = import.meta.env.VITE_API_URL ?? '';
    try {
      const res = await fetch(`${API}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.status === 'success') {
        setStatus('success');
        setFormData({ name: '', email: '', service: 'Custom Beat Production', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative" aria-label="Contact">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glassmorphism rounded-3xl p-8 md:p-12 border border-magenta/20 shadow-[0_0_30px_rgba(255,0,255,0.1)] relative overflow-hidden">
          {/* Subtle cyan glow inside form */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-neonCyan/20 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="text-center mb-10 relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Book a Session</h2>
            <p className="text-gray-400">Let's craft your next hit. Fill out the intake form below.</p>
          </div>

          {status === 'success' ? (
            <div className="text-center p-8 bg-neonCyan/10 border border-neonCyan/50 rounded-xl relative z-10">
              <h3 className="text-xl font-bold text-neonCyan mb-2">Message Received!</h3>
              <p className="text-white">I'll get back to you within 24-48 hours to discuss your project.</p>
            </div>
          ) : (
            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Artist / Real Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-neonCyan focus:border-transparent transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-neonCyan focus:border-transparent transition-all"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-400 mb-2">Service Needed</label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-neonCyan focus:border-transparent transition-all appearance-none"
                >
                  <option>Custom Beat Production</option>
                  <option>Mixing & Mastering</option>
                  <option>Film Scoring / Sound Design</option>
                  <option>Other / General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Project Details</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-neonCyan focus:border-transparent transition-all"
                  placeholder="Tell me about your project, references, timeline..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-black bg-gradient-to-r from-neonCyan to-cyan-400 hover:opacity-90 shadow-[0_0_15px_rgba(0,247,255,0.4)] transition-opacity disabled:opacity-50"
              >
                <Send className="mr-2 h-5 w-5" />
                {status === 'sending' ? 'Sending...' : 'Send Request'}
              </button>
              {status === 'error' && <p className="text-red-500 text-center mt-2">Failed to send message. Please try again.</p>}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
