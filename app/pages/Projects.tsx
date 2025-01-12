import { projectsData } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const ProjectsPage = () => {
  return (
    <div className=" px-6 py-12 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700">
      <h1 className="text-4xl font-semibold text-center mb-12 text-white">Our Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
