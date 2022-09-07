import React, { useState, useEffect } from 'react';

import { projectsData } from '../data';
import { projectsNav } from '../data';
import Project from './Project';

const Projects = () => {
    const [item, setItem] = useState({ name: 'all' })
    const [projects, setProjects] = useState([])
    const [active, setActive] = useState(0)

    useEffect(() => {
        // get projects based on font-end or back-end item
        if (item.name === 'all') {
            setProjects(projectsData)
        } else {
            const selectProjects = projectsData.filter((project) => {
                return project.category.toLowerCase() === item.name || project.category.toLowerCase() === 'both';
            });
            setProjects(selectProjects);
        }
    }, [item]);

    // change active item
    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase() })
        setActive(index);
    }


    return (
        <div>
            {/* nav */}
            <nav className='mb-12 max-w-xl mx-auto'>
                <ul className='flex flex-col md:flex-row justify-evenly items-center text-white'>
                    {projectsNav.map((item, index) => {
                        return <li onClick={(e) => { handleClick(e, index); }}
                            className={`${active === index ? 'active' : ''} cursor-pointer capitalize m-4 text-xl`}
                            key={index}>
                            {item.name}
                        </li>
                    })}
                </ul>
            </nav>
            {/* projects */}
            <section className='grid gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8'>
                {projects.map((item) => {
                    return <Project item={item} key={item.id} />
                })}
            </section>
        </div>
    )
};

export default Projects;