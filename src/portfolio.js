import emoji from 'react-easy-emoji';
import defilab from './assets/img/icons/common/defilab.jpeg'
import marchiquita from './assets/img/icons/common/marchiquita.jpg'

export const greetings = {
    "name": "Nicolas Gimenez",
    "title": "Hi all, I'm Nico",
    "description": "Soy un apasionado Desarollador Web Full Stack. Especialista en Blockchain, Javascript y Linux. Con experiencia desarollando aplicaciones con  JavaScript / Reactjs / Nodejs / Python / Flask / Nextjs/ Gatsby y muchas otras librerias y frameworks. También hago un poco de desarollo mobile multiplataforma con  Flutter.",
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
    subTitle: 'Desarollo software eficiente de calidad, amparandome en buenas practicas de desarollo. Creo, construyo y me involucro en diversas comunidades orientadas al sector IT. Hago servicios de consultoria y sirvo de guia en los campos que domino.',
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
        'Blockchain Basic Knowledge',
	 'Programming Basic',
	 'ICO ITO',
	 "Bitcoin's Protocol",
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
    role: 'Project Manager',
    company: 'Municipality of Mar Chiquita',
    companylogo: marchiquita,
    date: 'June 2018 – December 2019',
    desc:
      'Development high impact projects on the community.',
    descBullets: [
   'Leading project planning sessions',
   'Coordinating staff and internal resources',
   'Managing project progress and adapt work as required',
   'Conducting project review and creating detailed reports for executive staff',
   'Securing growth opportunities and initiating new projects',
    ],
  },
  {
    role: 'Front-End Developer',
    company: 'Defi Lab',
    companylogo: defilab,
    date: 'January 2020 – May 2021',
    desc:'Creation of a dynamic website that lists the prices of Bitcoin',
    descBullets: [

      'Determining the structure and design of web pages',
      'Ensuring user experience determines design choices.',
      'Developing features to enhance the user experience.',
      'Striking a balance between functional and aesthetic design.',
      'Building reusable code for future use.',
    ]

  },
]

