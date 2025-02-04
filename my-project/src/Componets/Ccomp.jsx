import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="Your Name" 
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none" 
            required 
          />
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="Your Email" 
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none" 
            required 
          />
          <input 
            type="text" 
            name="subject" 
            value={formData.subject} 
            onChange={handleChange} 
            placeholder="Subject" 
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none" 
          />
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            placeholder="Your Message" 
            rows="4" 
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none" 
            required 
          ></textarea>
          <button 
            type="submit" 
            className="w-full bg-orange-600 text-white p-3 rounded-xl hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}