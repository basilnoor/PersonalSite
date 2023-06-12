// Used to organize images and clean up code in components
//  icons
import {
    FiInstagram,
    FiLinkedin,
    FiGithub,
    FiMail,
    FiUser,
} from 'react-icons/fi';

// projects images
import Project1 from './assets/projects/rankup.webp';
import Project2 from './assets/projects/tr-discord.webp';
import Project3 from './assets/projects/exercise_main.webp';
import Project4 from './assets/projects/text-based.webp';
import Project5 from './assets/projects/weather_app.webp';

// skills images
import SkillImg1 from './assets/skills/python.webp';
import SkillImg2 from './assets/skills/git.webp';
import SkillImg3 from './assets/skills/js.webp';
import SkillImg4 from './assets/skills/reactjs.webp';
import SkillImg5 from './assets/skills/tailwind.webp';
import SkillImg6 from './assets/skills/nodejs.webp';
import SkillImg7 from './assets/skills/html5.webp';
import SkillImg8 from './assets/skills/css3.webp';
import SkillImg9 from './assets/skills/mysql.webp';
import SkillImg10 from './assets/skills/mongodb.webp';
import SkillImg11 from './assets/skills/firebase.webp';
import SkillImg12 from './assets/skills/bash.webp';
import SkillImg13 from './assets/skills/c.webp';
import SkillImg14 from './assets/skills/docker.webp';
import SkillImg15 from './assets/skills/jenkins.webp';

// hobbies iamges
import HobImage1 from './assets/hobbies/mma.webp';
import HobImage2 from './assets/hobbies/gaming.webp';
import HobImage3 from './assets/hobbies/sports.webp';
import HobImage4 from './assets/hobbies/printing.webp';

// navigation
export const navigation = [
    {
        name: 'HOME',
        href: 'home',
    },
    {
        name: 'ABOUT',
        href: 'about',
    },
    {
        name: 'WORK',
        href: 'work',
    },
    {
        name: 'PORTFOLIO',
        href: 'portfolio',
    },
    {
        name: 'HOBBIES',
        href: 'hobbies',
    },
    {
        name: 'CONTACT',
        href: 'contact',
    },
];

// social
export const social = [
    {
        icon: <FiLinkedin />,
        href: 'https://www.linkedin.com/in/basilnoor/',
        title: 'Linkedin',
        titleF: 'linkedin-footer-logo',
    },
    {
        icon: <FiGithub />,
        href: 'https://github.com/basilnoor',
        title: 'Github',
        titleF: 'github-footer-logo',
    },
    {
        icon: <FiInstagram />,
        href: 'https://www.instagram.com/basilnoor/',
        title: 'Instagram',
        titleF: 'insta-footer-logo',
    },
];


// projects
export const projectsData = [
    {
        id: '1',
        image: Project1,
        name: 'RankUp Valorant',
        category: 'Front-end',
        skills: 'React, Chakra Ui, CSS, Google Firebase',
        href: 'https://github.com/basilnoor/RankUp-Valorant',
    },
    {
        id: '2',
        image: Project2,
        name: 'Team Randomizer Bot',
        category: 'Back-end',
        skills: 'Python, Hikari API, Hikari-lightbulb Framework',
        href: 'https://github.com/basilnoor/TeamRandomizerBot',
    },
    {
        id: '3',
        image: Project3,
        name: 'Exercise App',
        category: 'both',
        skills: 'MongoDB, Express, REST APIs, NodeJs, React',
        href: 'https://github.com/basilnoor/Exercise-Tracker',
    },
    {
        id: '4',
        image: Project4,
        name: 'Text-based Adventure Game',
        category: 'Back-end',
        skills: 'Python',
        href: 'https://github.com/basilnoor/TextAdventureGame',
    },
    {
        id: '5',
        image: Project5,
        name: 'Weather App',
        category: 'both',
        skills: 'Python, Tkinter GUI',
        href: 'https://github.com/basilnoor/WeatherApp',
    },
];

// projects
export const projectsNav = [
    {
        name: 'All',
    },
    {
        name: 'Front-end',
    },
    {
        name: 'Back-end',
    },
];

// skill
export const skills = [
    {
        image: SkillImg1,
        name: 'Python',
    },
    {
        image: SkillImg4,
        name: 'React',
    },
    {
        image: SkillImg3,
        name: 'JavaScript',
    },
    {
        image: SkillImg7,
        name: 'HTML 5',
    },
    {
        image: SkillImg5,
        name: 'Tailwind CSS',
    },
    {
        image: SkillImg8,
        name: 'CSS 3',
    },
    {
        image: SkillImg2,
        name: 'Git',
    },
    {
        image: SkillImg6,
        name: 'NodeJs',
    }
];

// skill 2
export const skills2 = [
    {
        image: SkillImg9,
        name: 'MySQL',
    },
    {
        image: SkillImg10,
        name: 'MongoDB',
    },
    {
        image: SkillImg11,
        name: 'Firebase',
    },
    {
        image: SkillImg12,
        name: 'Bash',
    },
    {
        image: SkillImg13,
        name: 'C Programming Language',
    },
    {
        image: SkillImg14,
        name: 'Docker',
    },
    {
        image: SkillImg15,
        name: 'Jenkins',
    }
];

// hobbies
export const hobbies = [
    {
        hobImg: HobImage3,
        hobText:
            "Sports have always played a significant role in my life. Starting from playing soccer during elementary school to tennis in high school and volleyball during college. I have been happily engaged in sports for as long as I can remember.",
        hobTitle: 'Sports',
        hobDesc: 'Soccer / Tennis / Volleyball',
    },
    {
        hobImg: HobImage1,
        hobText:
            "From a young age, martial arts have captivated my interest. Growing up in Canada, I had the opportunity to train in boxing, and now I am fortunate enough to be learning Brazilian Jiu-Jitsu (BJJ) where i plan to occasionally compete.",
        hobTitle: 'Mixed Martial arts',
        hobDesc: 'Boxing / Brazillian Jiu Jitsu',
    },
    {
        hobImg: HobImage2,
        hobText:
            "Gaming is another way for me to satisfy my competitive nature. I enjoy playing competitive esports titles like Valorant or League of Legends. The skills needed to excel in these games appeal to me just as much as the skills required to excel in any of the other sports I play.",
        hobTitle: 'Gaming',
        hobDesc: 'FPS / MMORPG / Fighting',
    },
];

// contact
export const contact = [
    {
        icon: <FiMail />,
        title: 'Want to contact me?',
        subtitle: 'Email me at:',
        description: 'basilnoor5@gmail.com',
    },
    {
        icon: <FiUser />,
        title: 'Get to know me better!',
        subtitle: 'Check out my socials',
        description: 'Links in the footer',
    },
];