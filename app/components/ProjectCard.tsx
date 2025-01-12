import Image from 'next/image';
import Link from 'next/link';

interface Project {
    title: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
}

const ProjectCard = ({ title, description, imageUrl, projectUrl }: Project) => {
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
            <div className="relative w-full h-48">
                <Image
                    src={imageUrl}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="object-cover"
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                <p className="text-gray-500 mt-2">{description}</p>
                <div className="mt-4">
                    <Link href={projectUrl} className="text-blue-500 hover:text-blue-700">
                        View Project
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
