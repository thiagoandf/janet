import { Link } from 'react-router';
import { motion } from 'motion/react';
import BackIcon from '@/components/icons/BackIcon';
import GitHubIcon from '@/components/icons/GitHubIcon';
import LinkedInIcon from '@/components/icons/LinkedInIcon';
import classes from './SocialLinks.module.css';

const tileVariant = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: i * 0.5 },
  }),
};

const SOCIALS = [
  {
    href: 'https://github.com/thiagoandf',
    label: 'GitHub profile',
    Icon: GitHubIcon,
  },
  {
    href: 'https://linkedin.com/in/thiagoandf',
    label: 'LinkedIn profile',
    Icon: LinkedInIcon,
  },
] as const;

function SocialLinks() {
  return (
    <div className={classes.root}>
      <Link to="/" className={classes.backLink} aria-label="Back">
        <BackIcon />
      </Link>
      <div className={classes.socialContainer}>
        {SOCIALS.map(({ href, label, Icon }, index) => (
          <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
            <motion.div
              className={classes.singleSocial}
              variants={tileVariant}
              initial="hidden"
              animate="visible"
              custom={index + 1}
            >
              <Icon />
            </motion.div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default SocialLinks;
