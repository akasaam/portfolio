import { Mail, Phone, MapPin, Github, Instagram } from 'lucide-react';
import { MovingBorder } from './ui/moving-border';
import { Tooltip } from './ui/tooltip';

export const SocialLinks = () => {
  const links = [
    {
      href: 'mailto:akarajuhalder@gmail.com',
      icon: <Mail className="w-5 h-5" />,
      text: 'akarajuhalder@gmail.com',
      tooltip: 'Send me an email',
    },
    {
      href: 'tel:+917501411769',
      icon: <Phone className="w-5 h-5" />,
      text: '+91 75014 11769',
      tooltip: 'Call me',
    },
    {
      href: '#',
      icon: <MapPin className="w-5 h-5" />,
      text: 'Siliguri, West Bengal, India',
      tooltip: 'My location',
    },
    {
      href: 'http://www.github.com/akasaam',
      icon: <Github className="w-5 h-5" />,
      text: 'GitHub',
      tooltip: 'Check out my GitHub profile',
    },
    {
      href: 'https://www.instagram.com/aka_director',
      icon: <Instagram className="w-5 h-5" />,
      text: 'Instagram',
      tooltip: 'Follow me on Instagram',
    },
  ];

  return (
    <div className="mt-8 flex flex-wrap gap-4">
      {links.map((link, index) => (
        <Tooltip key={index} content={link.tooltip}>
          <MovingBorder className="hover:bg-slate-800/80 backdrop-blur-sm transition-all duration-300">
            <a
              href={link.href}
              className="flex items-center gap-2"
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={
                link.href.startsWith('http') ? 'noopener noreferrer' : undefined
              }
            >
              {link.icon}
              {link.text}
            </a>
          </MovingBorder>
        </Tooltip>
      ))}
    </div>
  );
};
