import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  twitterUrl: string;
  linkedinUrl: string;
}

const TeamCard = ({ name, role, imageUrl, twitterUrl, linkedinUrl }: TeamMember) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
      <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden">
        <Image src={imageUrl} alt={name} layout="fill" objectFit="cover" />
      </div>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-500">{role}</p>
      <div className="mt-4 space-x-4 flex justify-center">
        <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-blue-500 text-2xl" />
        </a>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-blue-700 text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
