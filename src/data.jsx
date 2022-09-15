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
import Project4 from './assets/projects/text-based.gif';
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
        title: 'linkedin-logo',
        titleF: 'linkedin-footer-logo',
    },
    {
        icon: <FiGithub />,
        href: 'https://github.com/basilnoor',
        title: 'github-logo',
        titleF: 'github-footer-logo',
    },
    {
        icon: <FiInstagram />,
        href: 'https://www.instagram.com/basilnoor/',
        title: 'insta-logo',
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
    },
];

// hobbies
export const hobbies = [
    {
        hobImg: HobImage3,
        hobText:
            "Sports have always been a huge part of my life. Whether it was playing soccer in elementary school, tennis in high school, or volleyball in college. I've been playing sports for as long as I can remember. Specifically, team oriented sports bring me a lot of joy because I'm able to play alongside friends.",
        hobTitle: 'Sports',
        hobDesc: 'Soccer / Tennis / Volleyball',
    },
    {
        hobImg: HobImage1,
        hobText:
            "I enjoy watching mixed martial arts, especially the UFC, but I never actually started training. Fortunately, that all changed a couple of years ago when I began learning Brazillian Jiu Jitsu (BJJ). It is not an exaggeration to say that since learning BJJ, my outlook on life has changed, and overall, I couldn't be happier.",
        hobTitle: 'Mixed Martial arts',
        hobDesc: 'Brazillian Jiu Jitsu / Mauy Thai',
    },
    {
        hobImg: HobImage2,
        hobText:
            "Personally, gaming is another way for me to satisfy my competitive nature. I enjoy playing fiercely competitive esports titles like Valorant or League of Legends. The skills needed to excel in these games appeal to me just as much as the skills required to excel in any of the other sports I play.",
        hobTitle: 'Gaming',
        hobDesc: 'FPS / MMORPG / Fighting',
    },
    {
        hobImg: HobImage4,
        hobText:
            "As you may have noticed, all of my previous interests serve as outlets for my competitive nature. On the other side, 3-D printing is a hobby that allows me to unwind, express my creativity, and create something I find fascinating. From functional computer mice to miniatures of Marvel super heroes.",
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