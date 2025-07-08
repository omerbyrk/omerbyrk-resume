import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import FiverrIcon from '../components/Icon/FiverrIcon';
import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.webp';
import porfolioImage2 from '../images/portfolio/portfolio-2.webp';
import porfolioImage3 from '../images/portfolio/portfolio-3.webp';
import porfolioImage4 from '../images/portfolio/portfolio-4.webp';
import porfolioImage5 from '../images/portfolio/portfolio-5.webp';
import porfolioImage6 from '../images/portfolio/portfolio-6.webp';
import porfolioImage7 from '../images/portfolio/portfolio-7.webp';
import porfolioImage8 from '../images/portfolio/portfolio-8.webp';
import profilepic from '../images/profilepic.webp';
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
  title: 'Ömer Bayrak',
  description: "It is Omer Bayrak's Personal Website",
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
        In my free time, you can catch me at <strong className="text-stone-100">GYM</strong>,
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
    { label: 'Interests', text: 'Motorcycles, GYM & Books', Icon: SparklesIcon },
    { label: 'Study', text: 'Gazi University', Icon: AcademicCapIcon },
    { label: 'Employment', text: 'Fiverr', Icon: BuildingOffice2Icon },
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
    name: 'Mobile development',
    skills: [
      {
        name: 'Flutter',
        level: 9,
      },
      {
        name: 'Swift',
        level: 6,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 8,
      },
      {
        name: 'Angular',
        level: 7,
      },
      {
        name: 'TypeScipt',
        level: 8,
      },
      {
        name: 'JavaScript',
        level: 9,
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
        name: 'C#',
        level: 7,
      },
      {
        name: 'Java',
        level: 6,
      },
      {
        name: 'Golang',
        level: 6,
      }
    ],
  },

];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'GLKR Şantiyeler',
    description: 'The mobile app features a user-friendly interface for on-site use, integrating with .NET backend services. It includes modules for daily reporting, accounting, purchasing, material requests, payroll, and attendance, along with a real-time notification system.',
    url: 'https://apps.apple.com/tr/app/%C5%9Fantiyeler-mobile/id6746783866',
    image: porfolioImage1,
  },
  {
    title: 'Politics & War',
    description: 'Text-based game application. It is a popular game in the App Store & Google Play. Some of the features I have added to the app are in-app purchase, push notification, API integration.',
    url: 'https://apps.apple.com/us/app/politics-and-war/id1552461332',
    image: porfolioImage2,
  },
  {
    title: 'Silarius Mobile App',
    description: 'Shopify mobile application. I have developed a custom shopping application that integrates with any Shopify store via ShopifyStoreFront API. The app has cart management, payment gateway, product/category listing, filtering, searching, multi language, multi currency features in it.',
    url: 'https://apps.apple.com/tr/app/silarius/id1545373631',
    image: porfolioImage3,
  },
  {
    title: 'Love Letter',
    description: 'This is my personal project. It gives users a way to sent Love Letter via SMS. When a receiver click the letter link on the SMS, the receiver get directed to browser to read the letter. I have used SwiftUI, Firebase, HTML, JavaScript & CSS in the project.',
    url: 'https://apps.apple.com/tr/app/love-letter-between-couples/id1661561515',
    image: porfolioImage4,
  },
  {
    title: 'Veri Sözlüğü',
    description: 'It is developed for DSI(Devlet Su İşleri). It is a program to store their unstructured data that comes from outside of the institution. The main feature in the program is that allow user building dynamic form(like Google Forms), and enter their data to the system. The program supports text, number, date inputs. Furthermore, the data has relations between each other. When an user enter a data, s/he can select the parent of the data. For example, firstly, users create the model of the data they will give like bridge(name, year), then enter a bridge record via the dynamic form. After bridge is entered, they can create another model which related to the bridge like bridge materials, then enter the bridge materials to the system by chosing bridge parent record on the dynamic form. The program only accesible via VPN(in the institution), so I can not give you the link of it.',
    url: '#',
    image: porfolioImage5,
  },
  {
    title: 'VICTUME',
    description: 'It is my hobby project I have developed it for nutritionist. It was the first times of the Flutter release. I just wanted to develop this project to practice Flutter, MongoDB, NodeJS, React and Docker. It is consisted of 3 parts like Backend (NodeJS), Web Admin Panel(React) and Mobile App (Flutter). In the admin panel, nutritionist can prepare an diet program and assign it to clients. In the mobile app, clients can contact with their nutritionist by message(used Socket connection) and give feedback to their nutritionist If they complate their task(diet program) on the each meal.',
    url: 'https://github.com/omerbyrk/victume-mobile',
    image: porfolioImage6,
  },
  {
    title: 'Add to Cart Animation Package',
    description: 'A flutter popular plugin which provide developers add to cart animation. I have prepared it to special to shopping apps however It can be used it on the others apps too, becasue it accept every widget to drag as in the gif. So It can be useful at shopping, game, news and other category apps.',
    url: 'https://pub.dev/packages/add_to_cart_animation',
    image: porfolioImage7,
  },
  {
    title: 'Flutter Boilerplate',
    description: 'A flutter boilerplate project can be used both enterprise & individual application. It has a lots of pre-build features such as; Auth, Provider, BLoC State Management, Dependency Injection, Localization & Theme.',
    url: 'https://github.com/omerbyrk/flutter-boilerplate',
    image: porfolioImage8,
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
    date: 'March 2024 - Present',
    location: 'GLKR Software at Ankara, Turkey',
    title: 'Senior Flutter Developer',
    content: (
      <>
        <p>
          At GLKR Software, a subsidiary of Güleker Construction established to digitize worksite
          operations, I developed a mobile application to complement the existing web portal and
          improve usability on construction sites. Using Flutter, I integrated with the existing
          backend services.
          <br />
          <br />
        </p>
        <strong>I built these key modules from scratch</strong>
        <ul style={{ listStyleType: "unset", paddingLeft: "20px" }}>
          <li>Daily worksite reports</li>
          <li>Accounting</li>
          <li>Purchasing</li>
          <li>Material demand</li>
          <li>Payroll(timesheet) management</li>
          <li>Real-time notification</li>
          <li>pub.dev library integration</li>
        </ul>

      </>
    ),
  },
  {
    date: 'March 2020 - Present',
    location: 'Fiverr & Bionluk',
    title: 'Flutter Developer (Freelance)',
    content: (
      <>
        <p>
          Depending on the customer's desires, I am creating a new application, adding features to an existing application, or solving a bug in the application.
          <br />
          <br />
        </p>
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

      </>
    ),
  },
  {
    date: 'March 2022 - October 2022',
    location: 'FreshApps at Eindhoven, Netherlands',
    title: 'Flutter Developer',
    content: (
      <>

        <p>
          We have developed an app named DIDIYO consist of customer, market and courier applications. The project details is added to the projects section below. <strong className="text-stone-600">2-week sprint</strong> were run for project management. <strong className="text-stone-600">JIRA, Time Doctor, Zoom & Teams</strong> were used for team management. <strong className="text-stone-600">Bitbucket</strong> was used as the version control system(Git).<br /><br />
        </p>
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
      </>
    ),
  },
  {
    date: 'October 2019 - October 2020',
    location: 'Software Developer',
    title: 'Efor Group Insurance/Broker',
    content: (
      <p>
        Efor group are using Kolmisoft telecom software in it. My job is that developing an a <strong className="text-stone-600">.Net</strong> program that integrates with that Kolmisoft software. By integration, I have fetch the call recording data to BTK in a spesific JSON format. I have used many <strong className="text-stone-600">design pattern method</strong> in this app to learn it deeply.

        <br /><br />

        I have developed a program <strong className="text-stone-600">.Net</strong> program that parses insurance policies from different companies delivered by email. Since each company has its own email format I have used different parser for them. I have used <strong className="text-stone-600">factory design pattern</strong> while selecting the parser for the email. All the parser such as; AllianzParser, AksigortaParser derived by Parser Interface.
      </p>
    ),
  },
  {
    date: 'July 2018 - October 2019',
    location: 'Full-Stack Software Developer',
    title: 'Fastsoft Information Techology',
    content: (
      <p>
        The company provides general software solutions for hospitals. I have used many programing languages and technologies such as; <strong className="text-stone-600"> .Net Core, Angular, PostreSQL, Microsoft SQL Server and TFS</strong>.
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
      name: 'Deniz Bozkurt | Fastsoft Information Technology',
      text: 'We have worked with Ömer for two years. We have use him on frontend, backend and mobile side of our projects. He was the joker developer of our company. Also, He is easy to communicate, hard working, versatile, responsible and self-improving developer. It was great to work with him. I am assuring that you are definately in the right place!',
      image: 'https://cdn.jsdelivr.net/gh/omerbyrk/webvify-public/omerbayrak-cv/deniz-bozkurt.jpg',
    },
    {
      name: 'Alex Winchell | Politics & War',
      text: 'Omer did a great job, working with me daily on our project. I needed to build an app with all the features like in-app purchases, push notifications, and API integration. He really made the process as easy for me as possible and stayed on top of everything. I have been and will be continuing to work with Omer and I would highly recommend him for your next app project. Thanks Omer for all of your hard work!',
      image: 'https://webvify.app/wp-content/uploads/2023/01/alex.jpg',
    },
    {
      name: 'Aniket Arenja | Pizza Country',
      text: '**ATTENTION** This developer right here will provide you with perfectly working apps. He is professional, does extra work for fair money, he consults and helps understanding processes. This man right here is my personal business partner from now on. There is nobody else better on the market. TRUST ME.',
      image: 'https://webvify.app/wp-content/uploads/2023/01/pizza_country.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'omer.bayrak06@hotmail.com',
      href: 'mailto:omer.bayrak06@hotmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Ankara',
      href: 'https://maps.app.goo.gl/F1UKFHZmapWCQ4ZDA',
    }

  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/omerbyrk' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/omerbyrk/' },
  { label: 'Fiverr', Icon: FiverrIcon, href: 'https://www.fiverr.com/omerbyrk' },

];
