import Skill from "@/components/skill/Skill";
import { FaHtml5, FaCss3Alt, FaSass, FaBootstrap, FaReact, FaVuejs, FaFigma, FaWordpress, FaPhp, FaLaravel } from "react-icons/fa";
import { RiTailwindCssFill, RiJavascriptFill, RiNextjsFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";

const skillsData = [
  {
    category: "front end developer",
    skills: [
      { title: "HTML", icon: <FaHtml5 /> },
      { title: "CSS", icon: <FaCss3Alt /> },
      { title: "SASS", icon: <FaSass /> },
      { title: "BOOTSTRAP", icon: <FaBootstrap /> },
      { title: "Tailwind CSS", icon: <RiTailwindCssFill /> },
      { title: "JAVASCRIPT", icon: <RiJavascriptFill /> },
      { title: "REACT", icon: <FaReact /> },
      { title: "VUE", icon: <FaVuejs /> },
      { title: "NEXT JS", icon: <RiNextjsFill /> },
    ],
  },
  {
    category: "UI & UX",
    skills: [
      { title: "FIGMA", icon: <FaFigma /> },
    ],
  },
  {
    category: "CMS",
    skills: [
      { title: "WORDPRESS", icon: <FaWordpress /> },
    ],
  },
  {
    category: "back end developer",
    skills: [
      { title: "PHP", icon: <FaPhp /> },
      { title: "LARAVEL", icon: <FaLaravel /> },
      { title: "MYSQL", icon: <SiMysql /> },
    ],
  },
];

const SkillSection = () => {
  return (
    <div className="container mx-auto flex flex-col flex-wrap gap-10 my-10">
      {skillsData.map((category, index) => (
        <div key={index} className="flex flex-row flex-wrap gap-5">
          <h3 className="text-4xl font-bold text-cyan-500">{category.category}</h3>
          {category.skills.map((skill, skillIndex) => (
            <Skill key={skillIndex} title={skill.title} url={skill.icon} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SkillSection;
