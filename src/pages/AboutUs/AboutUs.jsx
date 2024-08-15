import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="bg-[#1A1A2E] text-white py-20">
        <div className="container mx-auto text-center px-6" data-aos="fade-up">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg mb-6">
            We are passionate about delivering the best service and products to our customers.
          </p>
          <button
            className="bg-[#E94560] hover:bg-[#C5374F] text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300"
          >
            Learn More
          </button>
        </div>
      </section>

      {/* Our Mission Section */}
      <section id="mission" className="py-16">
        <div className="container mx-auto px-6" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto text-center">
            Our mission is to create innovative solutions that make a positive impact on the world.
            We strive to exceed customer expectations with our cutting-edge technology and unparalleled service.
          </p>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300" data-aos="zoom-in">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Customer Satisfaction</h3>
                <p className="text-gray-600">
                  We are committed to ensuring that every customer is completely satisfied with our products and services.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300" data-aos="zoom-in">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We invest in research and development to bring the latest and greatest technology to our customers.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300" data-aos="zoom-in">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Community</h3>
                <p className="text-gray-600">
                  We believe in giving back to the community and supporting initiatives that make a difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="bg-gray-200 py-16" data-aos="fade-up">
        <div className="container mx-auto px-2 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Meet Our Team</h2>
          <p className="text-lg text-gray-700 mb-12">
            Our team is composed of highly skilled professionals who are dedicated to achieving excellence.
          </p>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-2">
              <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
                <img
                  src="/user.png"
                  alt="Team Member"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Jane Doe</h3>
                <p className="text-gray-600">CEO & Founder</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-2">
              <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
                <img
                  src="/user.png"
                  alt="Team Member"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">John Smith</h3>
                <p className="text-gray-600">CTO</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-2">
              <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
                <img
                  src="/user.png"
                  alt="Team Member"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Emily Johnson</h3>
                <p className="text-gray-600">Head of Marketing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-12">
            Have any questions or feedback? We would love to hear from you!
          </p>
          <button
            className="bg-[#0F3460] hover:bg-[#0C2B4E] text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
