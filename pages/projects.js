// Relative imports
import Project from "../components/Project";
import { projects } from "../data/projects";
import Nav from "../components/Nav";

const Projects = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen pb-20">
      <Nav />

      <main className="flex flex-col w-full max-w-lg pl-6 pr-20 lg:px-0">
        {/* Title */}
        <h1 className="mt-20 text-2xl font-light text-gray-900 font-inter">
          Projects
        </h1>

        {/* Posts container */}
        <div className="flex flex-col w-full mt-10">
          <div className="flex flex-col mt-5 space-y-12">
            {projects.map((project, index) => (
              <Project key={index} project={project} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
