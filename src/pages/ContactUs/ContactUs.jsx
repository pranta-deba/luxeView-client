import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet-async';

const ContactUs = () => {
    AOS.init();

    return (
        <div className="">
            <Helmet>
                <title>LuxeView | Contact Us</title>
            </Helmet>
            {/* Banner */}
            <div className="py-20 text-center text-white" style={{ backgroundColor: '#1A1A2E' }}>
                <h1 className="text-5xl font-bold" data-aos="fade-down">Contact Us</h1>
                <p className="mt-4 text-lg" data-aos="fade-up">We’d love to hear from you! Reach out to us anytime.</p>
            </div>

            {/* Contact Information */}
            <div className="grid md:grid-cols-3 gap-8 p-8 md:p-16">
                <div className="text-center" data-aos="fade-right">
                    <FaPhone className="mx-auto text-5xl mb-4 hover:text-[#E94560]" />
                    <h2 className="text-2xl font-semibold">Phone Number</h2>
                    <p className="mt-2">+123 456 7890</p>
                </div>
                <div className="text-center" data-aos="fade-up">
                    <FaEnvelope className="mx-auto text-5xl mb-4 hover:text-[#E94560]" />
                    <h2 className="text-2xl font-semibold">Email</h2>
                    <p className="mt-2">info@luxeview.com</p>
                </div>
                <div className="text-center" data-aos="fade-left">
                    <FaMapMarkerAlt className="mx-auto text-5xl mb-4 hover:text-[#E94560]" />
                    <h2 className="text-2xl font-semibold">Location</h2>
                    <p className="mt-2">1 Khulshi, Chittagong, Bangladesh</p>
                </div>
            </div>

            {/* Social Media Links */}
            <div className="text-center py-8 bg-[#1A1A2E] text-white">
                <h2 className="text-2xl font-semibold" data-aos="fade-up">Follow Us</h2>
                <div className="flex justify-center space-x-6 mt-4" data-aos="fade-up">
                    <a className="text-3xl hover:text-[#E94560]"><FaFacebookF /></a>
                    <a className="text-3xl hover:text-[#E94560]"><FaTwitter /></a>
                    <a className="text-3xl hover:text-[#E94560]"><FaInstagram /></a>
                </div>
            </div>

            {/* Send Message Form */}
            <div className="p-8 md:p-16">
                <h2 className="text-center text-3xl font-semibold mb-8" data-aos="fade-up">Send Us a Message</h2>
                <form onSubmit={(e) => e.preventDefault()} className="max-w-2xl mx-auto space-y-6" data-aos="fade-up">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="mb-2 font-semibold">Name</label>
                        <input id="name" type="text" className="p-3 rounded-md bg-[#0F3460] text-white focus:outline-none focus:ring-2 focus:ring-[#E94560]" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-2 font-semibold">Email</label>
                        <input id="email" type="email" className="p-3 rounded-md bg-[#0F3460] text-white focus:outline-none focus:ring-2 focus:ring-[#E94560]" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="message" className="mb-2 font-semibold">Message</label>
                        <textarea id="message" className="p-3 rounded-md bg-[#0F3460] text-white focus:outline-none focus:ring-2 focus:ring-[#E94560]" rows="5"></textarea>
                    </div>
                    <div className="text-center">
                        <button type='submit' className="bg-[#0F3460] hover:bg-[#0C2B4E] text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300">Send Message</button>
                    </div>
                </form>
            </div>

            {/* Map Section */}
            <div className="w-full h-96" data-aos="fade-up">
                <iframe
                    className="w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224468.9311390195!2d91.81903704999999!3d22.35739545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a64095dfd3%3A0x5015cc5bcb6905d9!2sChattogram!5e1!3m2!1sen!2sbd!4v1723758404501!5m2!1sen!2sbd"
                    allowFullScreen=""
                    loading="lazy"
                    title="Location Map"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactUs;
