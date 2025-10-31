import { useParams, useNavigate } from "react-router-dom";
import projectData from "../components/portfolio/projectData"; // now it works!

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectData.find((p) => p.id === Number(id));

  if (!project) return <p className="text-center mt-10">Project not found</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
      >
        Go Back
      </button>

      <h1 className="text-2xl font-bold mb-2">{project.title}</h1>
      <p className="text-gray-400 mb-4">{project.category}</p>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-auto rounded-lg mb-4"
      />
      <p className="text-gray-700 leading-relaxed">{project.description}</p>

      {project.title === "Career Development" && (
        <div className="flex gap-3 mt-6">
          <a
            href="/assets/resume-en.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <FontAwesomeIcon icon={faDownload} />
            EN Resume
          </a>
          <a
            href="/assets/resume-fr.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
          >
            <FontAwesomeIcon icon={faDownload} />
            FR Resume
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
