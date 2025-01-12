import { IconType } from 'react-icons';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: IconType;
}

export default function ServiceCard({
    title,
    description,
    icon: Icon,
}: ServiceCardProps) {
    return (
        <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-500 ease-in-out transform hover:scale-105">
            <div className="flex items-center justify-center mb-4">
                <Icon className="text-6xl text-blue-500 transition-all duration-300 ease-in-out transform hover:text-blue-700" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 transition-all duration-300 ease-in-out transform hover:text-blue-600">
                {title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {description}
            </p>
            <div className="flex justify-center">
                <button className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-200 ease-in-out">
                    Learn More
                </button>
            </div>
        </div>
    );
}
