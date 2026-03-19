import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', title: '', phone: '', message: ''
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
    setFormData({ name: '', email: '', company: '', title: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-16 bg-gray-50 min-h-[70vh]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-[#4C74F6] via-[#E253E5] to-[#FF7E30] inline-block">
            Contact Us
          </h1>
        </div>
        
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden p-8 border border-gray-200">
          {status && (
            <div className={`mb-6 p-4 rounded-lg flex items-center ${status.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
              <div className="font-medium">{status.message}</div>
            </div>
          )}
          
          <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input type="text" placeholder="Your Name" name="name" id="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e867e6] focus:border-transparent transition-all" />
            </div>
            <div>
              <input type="email" placeholder="Your Email" name="email" id="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e867e6] focus:border-transparent transition-all" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input type="text" placeholder="Company" name="company" id="company" required value={formData.company} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e867e6] focus:border-transparent transition-all" />
              </div>
              <div>
                <input type="text" placeholder="Title" name="title" id="title" required value={formData.title} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e867e6] focus:border-transparent transition-all" />
              </div>
            </div>
            <div>
              <input type="text" placeholder="Phone" name="phone" id="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e867e6] focus:border-transparent transition-all" />
            </div>
            <div>
              <textarea rows="5" placeholder="How can we help you?" name="message" id="message" required value={formData.message} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e867e6] focus:border-transparent transition-all resize-none"></textarea>    
            </div>
            <div className="pt-2">
              <button type="submit" className="w-full bg-[#e867e6] hover:bg-[#8967ef] text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-sm cursor-pointer">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
