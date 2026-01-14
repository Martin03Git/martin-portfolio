
import { Project, SkillCategory } from './types.ts';

export const DEVELOPER_NAME = "Martin";
export const DEVELOPER_ROLE = "Web Development Enthusiast";

export const ABOUT_ME = `
I am a university student with a strong curiosity for how things work on the web. 
With about 1.5 years of hands-on experience, I'm currently exploring the landscape of web development—from structuring pages with HTML to handling data in MySQL databases.
I haven't decided between frontend or backend yet, so I'm learning both to become a well-rounded developer. I also enjoy optimizing personal workflows using automation tools like n8n.
`;

// System instruction for the Gemini AI assistant (Nexus)
export const AI_SYSTEM_INSTRUCTION = `
You are Nexus, a friendly and professional AI assistant for Martin's personal portfolio. 
Martin is a university student and web development enthusiast with approximately 1.5 years of experience.
Your goal is to answer questions about Martin's studies, skills, and projects based on the information provided on this portfolio.

Martin's Background:
- Role: University student & Web Development Enthusiast.
- Focus: Exploring both frontend and backend development to become a well-rounded developer.
- Interests: Web architecture, database management, and workflow automation.

Technical Skills:
- Core Languages: HTML5, CSS3, JavaScript, PHP.
- Backend & Data: Node.js (Basic), MySQL, REST APIs.
- Tools & Version Control: Git, GitHub, VS Code, Bootstrap.
- Automation: n8n, Workflow Automation, JSON handling.

Featured Projects:
1. Weather Sphere: A personal project built to practice API integration (OpenWeather API and ZenQuotes API). Built with Node.js and Express.

Communication Style:
- Professional yet approachable.
- Enthusiastic about technology and Martin's journey.
- If a user asks something about Martin that is not mentioned in these instructions, politely explain that you only have access to information regarding his professional portfolio and current skill set.
`;

export const PROJECTS: Project[] = [
  {
    id: 'weather-sphere',
    title: 'Weather Sphere',
    description: 'This is a personal project I created to test my skills and understanding of how to fetch, manage, and display data from an API.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'OpenWeather API', 'ZenQuotes API'],
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
