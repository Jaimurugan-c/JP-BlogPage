export default function Services() {
    const services = [
      {
        title: "Content Writing",
        description: "High-quality, SEO-optimized blog posts tailored to your niche.",
        icon: "✍️",
      },
      {
        title: "Guest Posting",
        description: "Get featured on top blogs to expand your audience and reach.",
        icon: "🌍",
      },
      {
        title: "SEO Optimization",
        description: "Enhance your blog’s visibility with keyword optimization and strategies.",
        icon: "🚀",
      },
      {
        title: "Social Media Marketing",
        description: "Promote your blog effectively across all social media platforms.",
        icon: "📢",
      },
    ];
  
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-5xl mx-auto text-center py-12">
          <p className="text-gray-600 mt-4">Helping your blog grow with professional services</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg flex items-start space-x-4">
              <span className="text-3xl">{service.icon}</span>
              <div>
                <h2 className="text-xl font-semibold text-gray-700">{service.title}</h2>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <h2 className="text-2xl font-semibold text-gray-800">Ready to Elevate Your Blog?</h2>
          <p className="text-gray-600 mt-2">Contact us today and take your content to the next level.</p>
          <button className="mt-4 px-6 py-3 bg-orange-600 text-white rounded-full shadow-md hover:bg-blue-700 transition">Get Started</button>
        </div>
      </div>
    );
  }
  