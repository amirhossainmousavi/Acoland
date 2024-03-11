import React from 'react';
import Text from '../text';

interface TeamMemberProps {
  name: string;
  jobTitle: string;
  imageSrc: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, jobTitle, imageSrc }) => {
  return (
    <div className="w-full md:w-[24%] bg-cover h-[23rem] bg-center bg-no-repeat rounded-lg lg:rounded-lg relative overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300">
        <div className="flex flex-col justify-end h-full gap-2 px-4 py-6 text-white">
          <Text className="text-lg font-semibold text-white">{name}</Text>
          <Text className="text-sm text-white">{jobTitle}</Text>
        </div>
      </div>
      <div className="w-full h-full bg-no-repeat bg-cover bg-center" style={{backgroundImage: `url(${imageSrc})`}}></div>
    </div>
  );
};

export default TeamMember;
