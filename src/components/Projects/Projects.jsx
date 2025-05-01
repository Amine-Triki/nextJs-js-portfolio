"use client"
import { useState } from 'react';
import projects from './AllProjects';
import Image from 'next/image';
const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('all');
  
    const switchCategories = (category) => {
      setActiveCategory(category);
    };
    const categories = ['all', 'JavaScript', 'Wordpress', 'React'];

    return (
      <main>

        <section className="text-center pt-5 pb-5">
          <div className="container mx-auto my-5">

          <ul className="switcher rounded-md bg-yellow-500 text-white flex md:flex-row py-3 justify-around px-0 flex-wrap sm:flex-col mb-10">
  {categories.map((category) => (
    <li
      key={category}
      className={`cursor-pointer ${activeCategory === category ? 'text-fuchsia-500 active' : 'hover:text-emerald-600'}`}
      onClick={() => switchCategories(category)}
    >
      {category === 'all' ? 'All works' : category}
    </li>
  ))}
</ul>

            <div className="gallery text-left ">
              <div className="gap-10 flex justify-center flex-wrap ">
                {projects
                  .filter((project) => activeCategory === 'all' || project.category === activeCategory)
                  .map((project, index) => (
                    <div className={`rounded-lg	border-current	border-2 p-3 post ${project.category} mb-3`} key={index}>
                      <div className="card" style={{ width: '18rem' }}>
                        <Image src={project.imageSrc} className="card-img-top" alt={project.title} />
                        <div className="card-body mt-5 ">
                          <h5 className="card-title text-blue-400 font-bold text-lg	">{project.title}</h5>
                          <p className="card-text mb-10">{project.description}</p>
                          <div className='flex justify-around'>
                            {project.category !== 'Wordpress'&& (
                            <a href={project.link} className="bg-yellow-400 px-3 py-2 rounded-lg "  rel="noreferrer" target="_blank">
                              Github
                            </a>
                            )}
                            {project.link !== '' && (
                            <a href={project.link} className="bg-blue-400 px-3 py-2 rounded-lg "  rel="noreferrer" target="_blank">
                              Visit
                            </a>
                            )}
                            </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  };
  
  export default Projects;