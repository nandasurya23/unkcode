'use client'; // Menandakan bahwa komponen ini hanya untuk sisi klien

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Importing the swiper styles
import TeamCard from './TeamCard';

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  twitterUrl: string;
  linkedinUrl: string;
}

const SwiperComponent = ({ teamMembers }: { teamMembers: TeamMember[] }) => {
  return (
    <Swiper
      spaceBetween={30} // Jarak antar slide
      slidesPerView="auto" // Mengatur jumlah slide yang ditampilkan per viewport
      loop={true} // Untuk mengulangi slider
      centeredSlides={true} // Menempatkan slide tengah di tengah viewport
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {teamMembers.map((member, index) => (
        <SwiperSlide key={index}>
          <TeamCard
            name={member.name}
            role={member.role}
            imageUrl={member.imageUrl}
            twitterUrl={member.twitterUrl}
            linkedinUrl={member.linkedinUrl}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
