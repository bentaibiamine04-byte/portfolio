import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Projects = ({ data }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project/${data.id}`);
  };

  return (
    <div onClick={handleClick} className="max-w-106 rounded-lg hover:shadow-2xl duration-300 transition-all shadow-gray-300 border border-gray-200 overflow-hidden">
      {/* 🖼️ Project Image */}
      <img
        src={data?.image}
        alt={`${data?.title} image`}
        className="w-full h-48 object-cover"
      />

      {/* 📄 Project Info */}
      <div className="p-4 xs:p-6">
        <p className="text-gray-400 text-xs font-medium">{data?.category}</p>
        <p className="text-gray-900 text-md xxs:text-lg font-semibold pt-1 mb-3">
          {data?.title}
        </p>
        <p
          style={{ lineHeight: "20px" }}
          className="text-gray-600 text-xs xxs:text-[14px] mb-4"
        >
          {data?.description}
        </p>

        {/* 🎓 Show buttons only for Career Development card */}
        {data?.title === "Career Development" && (
          <div className="flex gap-3 mt-3">
            <a
              href="/assets/cv/cv_ang.pdf"
              download
              className="flex items-center justify-center gap-2 px-3 py-2 text-xs sm:text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              <FontAwesomeIcon icon={faDownload} />
              <span>EN Resume</span>
            </a>

            <a
              href="/assets/cv/cv_en.pdf"
              download
              className="flex items-center justify-center gap-2 px-3 py-2 text-xs sm:text-sm bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
            >
              <FontAwesomeIcon icon={faDownload} />
              <span>FR Resume</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
