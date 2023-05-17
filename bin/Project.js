// Absolute imports
import { ArrowRight } from "iconoir-react";

const Project = ({ project }) => {
  return (
    <div className="flex items-start space-x-2">
      <span className="w-2/12 text-sm font-light text-gray-400 font-sans">{project.year}</span>

      <div className="flex flex-col w-10/12">
        <a
          rel="noreferrer"
          target={"_blank"}
          href={project.url}
          className="flex items-center space-x-1 hover:underline"
        >
          <span className="text-sm font-medium text-gray-900 font-sans">{project.name}</span>
          <ArrowRight className="w-4 h-4 text-gray-900 transform -rotate-45" />
        </a>
        <span className="mt-2 text-sm font-normal leading-6 text-gray-500 font-sans">
          {project.description}
        </span>

        {project.status === "Shut down" && (
          <div className="flex items-center h-6 px-2 mt-4 text-xs font-normal text-red-700 border border-red-100 rounded-lg bg-red-50 w-max font-sans">
            {project.status}
          </div>
        )}

        {project.status === "Sold" && (
          <div className="flex items-center h-6 px-2 mt-4 text-xs font-normal text-green-700 border border-green-200 rounded-lg bg-green-50 w-max font-sans">
            {project.status}
          </div>
        )}
        {project.status === "Active" && (
          <div className="flex items-center h-6 px-2 mt-4 text-xs font-normal text-gray-900 bg-gray-100 border border-gray-200 rounded-lg w-max font-sans">
            {project.status}
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
