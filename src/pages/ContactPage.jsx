import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    title: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus(null);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          title: formData.title,
          phone: formData.phone,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setStatus({
            type: "success",
            message: "Message sent successfully! We will get back to you soon.",
          });

          setFormData({
            name: "",
            email: "",
            company: "",
            title: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          console.error(error);
          setStatus({
            type: "error",
            message: "Something went wrong. Please try again.",
          });
        },
      )
      .finally(() => {
        setLoading(false);
      });
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
            <div
              className={`mb-6 p-4 rounded-lg ${
                status.type === "success"
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#e867e6]"
            />

            <input
              type="email"
              placeholder="Your Email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#e867e6]"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Company"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg"
              />

              <input
                type="text"
                placeholder="Title"
                name="title"
                required
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg"
              />
            </div>

            <input
              type="text"
              placeholder="Phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg"
            />

            <textarea
              rows="5"
              placeholder="How can we help you?"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#e867e6] hover:bg-[#8967ef] text-white px-8 py-3 rounded-lg font-semibold transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
