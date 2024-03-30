import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Ömer Bayrak.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Ankara based <strong className="text-stone-100">Mobile App Developer</strong>, currently working as freelancer
        at <strong className="text-stone-100">Fiverr</strong> helping build a modern, well-designed, clean-coded mobile applications.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me at <strong className="text-stone-100">GYM</strong>,
        driving <strong className="text-stone-100">motorcycle</strong>, reading <strong className="text-stone-100">books</strong> or exploring beautiful{' '}
        <strong className="text-stone-100">places</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a computer engineer who worked with varieties programing language in IT sector. At first, I have started to learn JAVA by including Hibernate, Spring & Sprint Boots. Later on, at my first professional job, I have learnt .Net Core, Angular & SQL. On my personal project, I have used Golang, NodeJS, React and even Vue. The language does not matter If you are professional enough! Finally, I am keeping up my journey by developing Mobile Apps with Swift & Flutter.`,
  aboutItems: [
    { label: 'Location', text: 'Ankara', Icon: MapIcon },
    { label: 'Age', text: '28', Icon: CalendarIcon },
    { label: 'Nationality', text: 'Turk', Icon: FlagIcon },
    { label: 'Interests', text: 'Motorcycles, GYM, Books', Icon: SparklesIcon },
    { label: 'Study', text: 'Gazi University', Icon: AcademicCapIcon },
    { label: 'Employment', text: 'Fiverr & Biounluk', Icon: BuildingOffice2Icon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Turkish',
        level: 10,
      },
      {
        name: 'English',
        level: 7.5,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2024',
    location: 'Gazi University',
    title: 'Computer Engineer',
    content: <p>
      I have deeply understand that <strong className="text-stone-600">Object Oriented Programing, Data Structure, Design Patterns, Network & Database System</strong>. I have also get experinced of <strong className="text-stone-600">AI, Microprocessors, Unix Programing, Image Processing & Real Time Sysyems</strong>. The one of the best thing I got from the University is <strong className="text-stone-600">researching essays on Google Scholar</strong>. I have developed <strong className="text-stone-600">Custom OCR System, Social Mobile App & Building an AI model</strong> to detect If a person is skin cancer by scar photo of her/him. Finally, while I am at university, I have worked professionally at Fastsoft Company(I was intern before) and deeply understood <strong className="text-stone-600">Git, Agile Management & Team Work</strong>.
    </p>,
  },
  {
    date: 'March 2017',
    location: 'Ordu University',
    title: 'Computer Programing',
    content: <p>It was wonderful to understanding basic of Algorithm by learning <strong className="text-stone-600">Pascal & C#</strong>. In my personal time, I have putted my time to learn <strong className="text-stone-600">Java, JavaScript, CSS & HTML</strong>. I have developed <strong className="text-stone-600">blog site, movie site, restrountant managment system</strong> until the university end.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2020 - Present',
    location: 'Fiverr & Bionluk',
    title: 'Flutter Developer',
    content: (
      <p>
        Depending on the customer's desires, I create a new application, add features to an existing application, or solve a bug in the application.
        <br />
        <br />
        <strong>General Tasks</strong>
        <ul style={{ listStyleType: "unset", paddingLeft: "20px" }}>
          <li>UI Designs</li>
          <li>Backend API Integration(using GraphQL & JSON)</li>
          <li>Backend Authentication Integration(using JWT mostly)</li>
          <li>Firebase Module Integrations(Messaging & Remote Control & Analytics & Database &
            Authentication ...)</li>
          <li>In-App Purchase/Subscription (RevenueCat)</li>
          <li>AdMob Integration</li>
          <li>pub.dev library integration</li>
        </ul>
      </p>
    ),
  },
  {
    date: 'March 2022 - October 2022',
    location: 'FreshApps at Eindhoven, Netherlands',
    title: 'Flutter Developer',
    content: (
      <p>
        We have developed an app named DIDIYO consist of customer, market and courier applications. The project details is added to the projects section below. 2-week sprints were run for project management. JIRA, Time Doctor, Zoom & Teams were used for team management. Bitbucket was used as the version control system(Git).<br /><br />
        <strong>General Tasks</strong>
        <ul style={{ listStyleType: "unset", paddingLeft: "20px" }}>
          <li>UI Designs</li>
          <li>Backend API Integration(using GraphQL & JSON)</li>
          <li>Payment Gateway Integration</li>
          <li>Bug fixings in Sprint backlog</li>
          <li>Rich Notification Integration(with Link & Image)</li>
          <li>Deep Link Integration</li>
          <li>pub.dev library integration</li>
          <li>Add to cart animation was developed by me for the DIDIYO project and uploaded to the pub.dev platform as an library. It has <strong className="text-stone-600"> 200 Likes & %93 popularity! 🤩</strong> <br />Link: <a style={{ color: "blue" }} href="https://pub.dev/packages/add_to_cart_animation" target='_blank'>add_to_cart_animation | Flutter packages</a> </li>
        </ul>
      </p>
    ),
  },
  {
    date: 'October 2019 - October 2020',
    location: 'Software Developer',
    title: 'Efor Group Insurance/Broker',
    content: (
      <p>
        Efor group are using Kolmisoft telecom software in it. My job is that developing an a .Net program that integrates with that Kolmisoft software. By integration, I have fetch the call recording data to BTK in a spesific JSON format. I have used many <strong className="text-stone-600">design pattern method</strong> in this app to learn it deeply.

        <br /><br />

        I have developed a program .Net program that parses insurance policies from different companies delivered by email. Since each company has its own email format I have used different parser for them. I have used factory design pattern while selecting the parser for the email. All the parser such as; AllianzParser, AksigortaParser derived by Parser Interface.
      </p>
    ),
  },
  {
    date: 'July 2018 - October 2019',
    location: 'Full-Stack Software Developer',
    title: 'Fastsoft Information Techology',
    content: (
      <p>
        The company provides general software solutions for the  hospitals. I have used many programing languages and technologies such as; .Net, Angular, PostreSQL, Microsoft SQL Server and TFS.
      </p>
    ),
  }
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx' },
  { label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/' },
  { label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/' },
  { label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx' },
];
