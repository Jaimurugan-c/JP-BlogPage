export default function AboutPage() {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-gray-600 mb-4">
            Welcome to <span className="font-semibold">Our Blog</span>, where we share insights, stories, and knowledge 
            on various topics that matter to us and our readers. Our mission is to provide valuable content 
            that informs, inspires, and entertains.
          </p>
          <p className="text-gray-600 mb-4">
            Whether you're here for the latest trends, expert advice, or just some good reads, we've got something for you. 
            We believe in fostering a community of curious minds and passionate discussions.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-6">Our Mission</h2>
          <p className="text-gray-600 mt-2">
            Our goal is to create a platform that encourages learning, growth, and meaningful conversations. 
            We strive to keep our content fresh, relevant, and engaging for all our visitors.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-6">Contact Us</h2>
          <p className="text-gray-600 mt-2">
            Have any questions or suggestions? Feel free to reach out to us at 
            <a href="mailto:contact@ourblog.com" className="text-blue-500 hover:underline"> contact@ourblog.com</a>.
          </p>
        </div>
      </div>
    );
  }
  