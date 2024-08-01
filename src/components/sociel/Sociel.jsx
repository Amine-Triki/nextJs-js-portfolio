import { RiGithubFill, RiLinkedinFill, RiFacebookCircleFill, RiYoutubeFill, RiInstagramFill } from "react-icons/ri";

const socialLinks = [
  { href: "https://github.com/Amine-Triki", icon: <RiGithubFill className="text-5xl fill-gray-700" />, label: "GitHub" },
  { href: "https://tn.linkedin.com/in/amine-triki-06b95220b/", icon: <RiLinkedinFill className="text-5xl fill-blue-600" />, label: "LinkedIn" },
  { href: "https://www.facebook.com/amine.triki.1998", icon: <RiFacebookCircleFill className="text-5xl fill-blue-500" />, label: "Facebook" },
  { href: "https://www.youtube.com/@aminetrikitv", icon: <RiYoutubeFill className="text-5xl fill-red-500" />, label: "YouTube" },
  { href: "https://www.instagram.com/mr_amine_triki/", icon: <RiInstagramFill className="text-5xl fill-pink-300" />, label: "Instagram" },
];

const Social = () => {
  return (
    <div className="mt-4 flex">
      {socialLinks.map((link, index) => (
        <a key={index} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
