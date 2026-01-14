import { Project, SkillCategory } from './types';

export const DEVELOPER_NAME = "Martin";
export const DEVELOPER_ROLE = "Web Development Enthusiast";

export const ABOUT_ME = `
I am a university student with a strong curiosity for how things work on the web. 
With about 1.5 years of hands-on experience, I'm currently exploring the landscape of web development—from structuring pages with HTML to handling data in MySQL databases.
I haven't decided between frontend or backend yet, so I'm learning both to become a well-rounded developer. I also enjoy optimizing personal workflows using automation tools like n8n.
`;

export const PROJECTS: Project[] = [
  {
    id: 'weather-sphere',
    title: 'Weather Sphere',
    description: 'This is a personal project I created to test my skills and understanding of how to fetch, manage, and display data from an API.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'OpenWeather API', 'ZenQuotes API'],
    // Note: Replace this URL with the actual screenshot path in your local project
    imageUrl: 'https://images.unsplash.com/photo-1592210454132-328629aff92d?q=80&w=1000&auto=format&fit=crop',
    link: 'https://weather-sphere-gold.vercel.app/',
    github: 'https://github.com/Martin03Git/WeatherSphere'
  },
  {
    id: 'coming-soon',
    title: 'Coming Soon',
    description: 'Currently exploring new technologies and brainstorming ideas for my next application. Stay tuned!',
    techStack: ['Loading...'],
    imageUrl: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1000&auto=format&fit=crop',
    link: '',
    github: ''
  }
];

export const SKILLS: SkillCategory[] = [
  {
    name: 'Core Languages',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
    icon: 'Layout'
  },
  {
    name: 'Backend & Data',
    skills: ['Node.js (Basic)', 'MySQL', 'REST APIs'],
    icon: 'Database'
  },
  {
    name: 'Tools & Version Control',
    skills: ['Git', 'GitHub', 'VS Code', 'Bootstrap'],
    icon: 'Terminal'
  },
  {
    name: 'Automation & Others',
    skills: ['n8n', 'Workflow Automation', 'JSON handling'],
    icon: 'Code2'
  }
];

export const AI_SYSTEM_INSTRUCTION = `
You are "Nexus", an AI assistant for Martin's portfolio website.
Martin is a university student and a web development enthusiast with about 1.5 years of experience.
Your goal is to answer visitors' questions about Martin's journey, skills, and projects.

Here is the context about Martin:
Name: ${DEVELOPER_NAME}
Role: ${DEVELOPER_ROLE}
Bio: ${ABOUT_ME}
Projects: ${JSON.stringify(PROJECTS.map(p => ({ title: p.title, desc: p.description, stack: p.techStack })))}
Skills: ${JSON.stringify(SKILLS)}

Tone: Humble, eager to learn, authentic, and polite.
Do not portray Martin as a senior expert. Use phrases like "exploring", "learning", "building fundamental skills".
If asked about contact info, suggest using the contact form.
`;