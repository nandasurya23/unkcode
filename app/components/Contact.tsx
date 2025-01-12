import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 flex flex-col items-center justify-center px-6 py-12">
            <div className="max-w-5xl bg-white shadow-2xl rounded-3xl p-10 md:p-16 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <h1 className="text-5xl font-extrabold text-gray-800 mb-8 text-center md:text-6xl hover:text-teal-600 transition-all duration-300">Contact Us</h1>
                <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center md:text-xl">
                    We’d love to hear from you! Whether you have a question, suggestion, or want to discuss your next project, feel free to reach out to us.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Get In Touch</h2>
                        <form className="space-y-6">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-1">
                                    <label htmlFor="name" className="text-gray-700 text-lg">Your Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="flex-1">
                                    <label htmlFor="email" className="text-gray-700 text-lg">Your Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="text-gray-700 text-lg">Your Message</label>
                                <textarea
                                    id="message"
                                    placeholder="Write your message here"
                                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Location</h2>
                        <div className="h-72 rounded-lg overflow-hidden shadow-lg">
                            {/* You can replace the iframe with your own map URL */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.9399923702963!2d115.26042017423907!3d-8.697248888607504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2419250c184db%3A0xbdbcbd4d03bac493!2sPuri%20Ceraki!5e0!3m2!1sid!2sid!4v1736710246809!5m2!1sid!2sid"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                            ></iframe>
                        </div>

                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Contact Information</h2>
                        <ul className="space-y-4 text-gray-600 text-lg">
                            <li className="flex items-center">
                                <FaMapMarkerAlt className="text-blue-500 mr-3 w-6 h-6" />
                                Jalan Danau Tamblingan 156,gg Batu Sari II no.14, Sanur, Denpasar Selatan, Denpasar City, Bali
                            </li>
                            <li className="flex items-center">
                                <FaPhoneAlt className="text-blue-500 mr-3 w-6 h-6" />
                                +62 819-3209-9231
                            </li>
                            <li className="flex items-center">
                                <FaEnvelope className="text-blue-500 mr-3 w-6 h-6" />
                                unkcode2024@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
