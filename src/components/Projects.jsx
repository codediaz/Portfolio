import { PROJECTS } from "../../constants/const"

const Projects = () => {
    return(
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">
                Projects
            </h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-neutral-400">{project.title}</p>
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <p className="mb-4 text-neutral-400">{project.description}</p>
                            {project.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Projects;