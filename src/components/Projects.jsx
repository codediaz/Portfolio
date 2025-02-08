import { PROJECTS } from "../../constants/const"
import { motion } from "framer-motion";

const Projects = () => {
    return(
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl"
            >
                Projects
            </motion.h2>
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