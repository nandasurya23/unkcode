export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 flex flex-col items-center justify-center px-6 py-12">
            <div className="max-w-5xl bg-white shadow-2xl rounded-3xl p-10 md:p-16 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <h1 className="text-5xl font-extrabold text-gray-800 mb-8 text-center md:text-6xl hover:text-teal-600 transition-all duration-300">About Unckode</h1>
                <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center md:text-xl">
                    At Unckode, we are a cutting-edge digital agency committed to helping businesses thrive in the digital era.
                    Our focus is on delivering creative, innovative, and results-driven solutions tailored to meet our clients&apos; unique needs.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            To become a leading digital agency that empowers businesses to achieve their goals through technology, creativity, and innovation.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Our mission is to provide top-notch digital solutions that drive growth, enhance brand visibility, and create meaningful connections between businesses and their customers.
                        </p>
                    </div>
                </div>

                <div className="my-8">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Slogan</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6 italic text-center">
                        &quot;Transforming Ideas into Digital Excellence&quot;
                    </p>
                </div>

                <div className="my-8">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Products</h2>
                    <ul className="list-inside text-gray-600 text-lg leading-relaxed space-y-4">
                        <li className="flex items-start">
                            <span className="text-teal-500 font-semibold mr-2">Web Development:</span>
                            Crafting modern, responsive, and user-friendly websites tailored to your business needs.
                        </li>
                        <li className="flex items-start">
                            <span className="text-teal-500 font-semibold mr-2">Graphic Design:</span>
                            Creating visually stunning designs that effectively communicate your brand identity.
                        </li>
                        <li className="flex items-start">
                            <span className="text-teal-500 font-semibold mr-2">Social Media Marketing:</span>
                            Building impactful social media strategies to boost your online presence and engagement.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
