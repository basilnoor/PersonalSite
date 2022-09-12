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
import Project1 from './assets/projects/rankup.png';
import Project2 from './assets/projects/tr-discord.png';
import Project3 from './assets/projects/exercise_main.png';
import Project4 from './assets/projects/text-based.gif';
import Project5 from './assets/projects/weather_app.png';

// skills images
import SkillImg1 from './assets/skills/python.png';
import SkillImg2 from './assets/skills/git.png';
import SkillImg3 from './assets/skills/js.png';
import SkillImg4 from './assets/skills/reactjs.png';
import SkillImg5 from './assets/skills/tailwind.png';
import SkillImg6 from './assets/skills/nodejs.png';
import SkillImg7 from './assets/skills/html5.png';
import SkillImg8 from './assets/skills/css3.png';

// hobbies iamges
import HobImage1 from './assets/hobbies/mma.png';
import HobImage2 from './assets/hobbies/gaming.png';
import HobImage3 from './assets/hobbies/sports.png';
import HobImage4 from './assets/hobbies/printing.png';

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
    },
    {
        icon: <FiGithub />,
        href: 'https://github.com/basilnoor',
    },
    {
        icon: <FiInstagram />,
        href: 'https://www.instagram.com/basilnoor/',
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
    },
    {
        id: '2',
        image: Project2,
        name: 'Team Randomizer Bot',
        category: 'Back-end',
        skills: 'Python, Hikari API, Hikari-lightbulb Framework',
    },
    {
        id: '3',
        image: Project3,
        name: 'Exercise App',
        category: 'both',
        skills: 'MongoDB, Express, REST APIs, NodeJs, React',
    },
    {
        id: '4',
        image: Project4,
        name: 'Text-based Adventure Game',
        category: 'Back-end',
        skills: 'Python',
    },
    {
        id: '5',
        image: Project5,
        name: 'Weather App',
        category: 'both',
        skills: 'Python, Tkinter GUI',
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
        image: SkillImg2,
        name: 'Git',
    },
    {
        image: SkillImg3,
        name: 'JavaScript',
    },
    {
        image: SkillImg4,
        name: 'React',
    },
    {
        image: SkillImg5,
        name: 'Tailwind CSS',
    },
    {
        image: SkillImg6,
        name: 'NodeJs',
    },
    {
        image: SkillImg7,
        name: 'HTML 5',
    },
    {
        image: SkillImg8,
        name: 'CSS 3',
    },
];

// hobbies
export const hobbies = [
    {
        hobImg: HobImage3,
        hobText:
            "Growing up sports have been a huge part of my life. Whether it was playing soccer in elementary school, tennis in high school, or volleyball in college. I've been playing sports for as long as I can remember.",
        hobTitle: 'Sports',
        hobDesc: 'Soccer / Tennis / Volleyball',
    },
    {
        hobImg: HobImage1,
        hobText:
            "I've always enjoyed watching mixed martial arts, especially the UFC, but I never actually started training. Fortunately, that all changed a couple of years ago when I began learning Brazillian Jiu Jitsu (BJJ). It is not an exaggeration to say that since learning BJJ, my outlook on life has changed, and overall, I couldn't be happier.",
        hobTitle: 'Mixed Martial arts',
        hobDesc: 'Brazillian Jiu Jitsu / Mauy Thai',
    },
    {
        hobImg: HobImage2,
        hobText:
            "Gaming isn't only a hobby for me; it's also a way to satisfy my competitive nature. I enjoy playing fiercely competitive esports titles like League of Legends or Valorant. The skills needed to excel in these games appeal to me just as much as the skills required to excel in any of the other sports I play.",
        hobTitle: 'Gaming',
        hobDesc: 'FPS / MMORPG / Fighting',
    },
    {
        hobImg: HobImage4,
        hobText:
            "As you may have seen, all of my past interests served as outlets for my competitive nature. On the other side, 3-D printing is a hobby that allows me to unwind, express my creativity, and produce something I find fascinating. From functional computer mouse to miniatures of marvel super heroes.",
        hobTitle: '3D-Printing',
        hobDesc: 'Functional Mice / Detailed Figures',
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