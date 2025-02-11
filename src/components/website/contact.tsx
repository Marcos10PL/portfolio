import Section from "../section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const links = [
  {
    name: "marek.krama@gmail.com",
    url: "mailto:marek:krama@gmail.com",
    icon: faEnvelope,
  },
  {
    name: "504-955-917",
    url: "tel:+48504955917",
    icon: faPhone,
  },
  { name: "github", url: "https://github.com/Marcos10PL", icon: faGithub },
  {
    name: "facebook",
    url: "https://www.facebook.com/profile.php?id=100013527426866",
    icon: faFacebook,
  },
];

export default function Contact() {
  return (
    <Section id="contact" header="kontakt">
      <div className="flex flex-wrap justify-center gap-8 max-w-96">
        {links.map(({ name, url, icon }) => {
          const isTelLink = url.startsWith("tel");

          return (
            <a
              key={name}
              href={url}
              target={!isTelLink ? "_blank" : undefined}
              className={`block ${isTelLink && 'cursor-default'} hover:${!isTelLink ? "bg-indigo-950" : "none"} p-5 border border-indigo-400 rounded-lg transition-colors`}
            >
              <div className="flex items-center gap-4">
                <FontAwesomeIcon icon={icon} width={20} />
                <p>{name}</p>
              </div>
            </a>
          );
        })}
      </div>
    </Section>
  );
}
