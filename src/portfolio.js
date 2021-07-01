import emoji from 'react-easy-emoji';

import googlelogo from './assets/img/icons/common/google.svg'
import github from './assets/img/icons/common/github.svg'
import airbnb from './assets/img/icons/common/airbnbLogo.png'

export const greetings = {
    "name": "Nicolas Gimenez",
    "title": "Hi all, I'm Nico",
    "description": "A passionate Front End Developer, Blockchain Expert Knowledge and Javascript Engineer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Python / Flask / Nextjs/ Gatsby and some other cool libraries and frameworks and Cross Platform Mobile Apps With Flutter.",
    "resumeLink": "https://nicoarkano.ml"
}

export const openSource = {
  githubUserName: 'nicoarkano',
};

export const contact = {
  
}

export const socialLinks = {
    "facebook": "https://www.facebook.com/nicoarkano",
    "instagram": "https://www.instagram.com/nicoarkano",
    "twitter": "https://twitter.com/nicoarkano",
    "github": "https://github.com/nicoarkano",
    "linkedin": "https://www.linkedin.com/in/nicoarkano/"
}

export const skillsSection = {
    title: 'What I do',
    subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
    skills: [
      emoji(
        '⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications'
      ),
      emoji('⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks'),
      emoji(
        '⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean'
      ),
    ],
    
    softwareSkills: [
      {
        skillName: 'html-5',
        fontAwesomeClassname: 'vscode-icons:file-type-html',
      },
      {
        skillName: 'css3',
        fontAwesomeClassname: 'vscode-icons:file-type-css',
      },
      {
        skillName: 'sass',
        fontAwesomeClassname: 'logos:sass',
      },
      {
        skillName: 'JavaScript',
        fontAwesomeClassname: 'logos:javascript',
      },
      {
        skillName: 'reactjs',
        fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
      },
      {
        skillName: 'nodejs',
        fontAwesomeClassname: 'logos:nodejs-icon',
      },
      {
        skillName: 'flutter',
        fontAwesomeClassname: 'logos:flutter',
      },
      
      {
        skillName: 'npm',
        fontAwesomeClassname: 'vscode-icons:file-type-npm',
      },
      {
        skillName: 'mongoDB',
        fontAwesomeClassname: 'vscode-icons:file-type-mongo',
      },
   
      {
        skillName: 'firebase',
        fontAwesomeClassname: 'logos:firebase',
      },
      {
        skillName: 'python',
        fontAwesomeClassname: 'logos:python',
      },
      {
        skillName: 'git',
        fontAwesomeClassname: 'logos:git-icon',
      },
      {
        skillName: 'docker',
        fontAwesomeClassname: 'logos:docker-icon',
      },
    ],
}


export const SkillBars = [
    {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '90', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Programming',
      progressPercentage: '60',
    },
 
    {
      Stack: 'English',
      progressPercentage: '50',
    },
    {
      Stack: 'Backend',
      progressPercentage: '45',
    },
]

export const educationInfo = [
    {
      schoolName: 'Platzi',
      subHeader: 'Blockchain and Criptocurrency School',
      duration: 'March 2020 - June 2020',
      desc: 'Platzi teach me the basic knowledge to afront mi life',
      descBullets: [
        'Blockchain Basic Knowledge'
	 'Programming Basic'
	 'ICO ITO'
	 "Bitcoin's Protocol"
	 "Ethereum's Protocol",
      ],
    },
    {
      schoolName: 'FreeCodeCamp',
      subHeader: 'Master of Science in Computer Science',
      duration: 'March 2021 - June 2021',
      desc: 'Participated in the research of XXX and published 3 papers.',
      descBullets: [
        'Lorem ipsum dolor sit amet, consectetfgur adipiscing elit',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      ],
    },
    {
      schoolName: 'University of Helsinki',
      subHeader: 'Full Stack Open 2021',
      duration: 'June 2021 - January 2022',
      desc:
        'Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...',
      descBullets: ['Lorem ipsum dolorfdg sit amet, consectetur adipiscing elit'],
    },
]

export const experience = [
  {
    role: 'Software Engineer',
    company: 'Google',
    companylogo: googlelogo,
    date: 'June 2018 – Present',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    descBullets: [
      'Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ],
  },
  {
    role: 'Front-End Developer',
    company: 'Defi Lab',
    companylogo: github,
    date: 'May 2017 – May 2018',
    desc:
      'Lorem ipsum dolor sit amet, consefdctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

export const projects = [
  {
    name: "lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    name: "lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    name: "lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    link: {
      name: "hanzla",
      url: "kasjfklsdjf"
    }
  }
]
