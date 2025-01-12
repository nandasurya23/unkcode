'use client'; // Menandakan bahwa komponen ini hanya untuk sisi klien

import { teamMembers } from '../data/teamData';
import SwiperComponent from '../components/SwiperComponent'

const TeamPage = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-semibold text-center mb-12">Our Team</h1>
      <SwiperComponent teamMembers={teamMembers} />
    </div>
  );
};

export default TeamPage;
