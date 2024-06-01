import React from 'react';
import { DiNodejs } from "react-icons/di";
import { TiHtml5 } from "react-icons/ti";
import { SiMongodb } from "react-icons/si";
import { PiFileCppDuotone } from "react-icons/pi";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";


const SkillsSection = () => {
  return (
    <section id='skills-section' className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <SkillIcon icon={<DiNodejs />} name='NodeJS' color="#68a063" />
          <SkillIcon icon={<TiHtml5 />} name='HTML5' color="orange" />
          <SkillIcon icon={<SiMongodb />} name='MongoDB' color="green" />
          <SkillIcon icon={<RiReactjsFill />} name='React' color="#228FB9" />
          <SkillIcon icon={<PiFileCppDuotone />} name='C++' color="black" />
          <SkillIcon icon={<RiTailwindCssFill />} name='TailwindCSS' color="skyblue" />
          <SkillIcon icon={<FaCss3Alt />} name='CSS' color="blue" />
          <SkillIcon icon={<FaPython />} name='Python' color="#056C94" />

        </div>
      </div>
    </section>
  );
};

const SkillIcon = ({ icon, name, color }) => {
  return (
    <div className="flex flex-col items-center">
      {React.cloneElement(icon, { size: 64, color })}
      <p className="text-sm mt-2">{name}</p>
    </div>
  );
};

export default SkillsSection;
