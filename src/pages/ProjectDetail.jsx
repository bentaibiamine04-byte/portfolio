import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import projectData from "../components/portfolio/projectData";

// Extended project data with full descriptions
const projectDetailsData = {
  1: {
    sections: [
      {
        title: "Being in France as an International Student",
        content: "Being in France as an international student has already given me a valuable mobility experience. It has allowed me to adapt to a new academic system, interact with students from diverse backgrounds, and develop my independence and cultural awareness. I have learned to navigate different teaching methods, work collaboratively in multicultural teams, and balance rigorous coursework with personal growth. This experience has strengthened my adaptability, communication skills, and confidence in international environments."
      },
      {
        title: "Future Goals",
        content: "Looking ahead, I am highly motivated to pursue additional mobility opportunities. One of my main goals is to study or complete an internship in Spain, specifically at ICFO (Institute of Photonic Sciences, Barcelona). There, I aim to:",
        list: [
          "Explore fundamental and applied quantum research while gaining hands-on experience in cutting-edge photonics projects.",
          "Practice and improve my Spanish, which I am currently learning, in both academic and professional contexts.",
          "Gain new perspectives on research and innovation, particularly in quantum technologies and space communication.",
          "Build an international network with researchers and peers, opening doors to future collaborations."
        ]
      },
      {
        content: "I believe that combining my current mobility experience in France with future opportunities in Spain will allow me to grow both as an engineer and as an individual, enhancing my technical skills, cultural understanding, and global outlook."
      }
    ]
  },
  2: {
    projectInfo: {
      title: "Solar Tracker System",
      type: "Scientific & Technical Project (TIPE)",
      duration: "10 months"
    },
    sections: [
      {
        title: "Project Description",
        content: "This project focused on designing and building a solar tracker capable of optimizing the orientation of a solar panel to follow the sun's position throughout the day. The main goal was to increase energy efficiency by maximizing the amount of sunlight captured."
      },
      {
        title: "Technical Aspects",
        list: [
          "Studied the principles of solar energy conversion and panel orientation.",
          "Designed a mechanical structure to allow movement on two axes.",
          "Developed a control system using sensors and microcontrollers to detect sunlight and adjust the panel's position automatically.",
          "Tested and analyzed the system's performance compared to a fixed solar panel."
        ]
      },
      {
        title: "Reflection",
        content: "This project helped me strengthen my understanding of renewable energy systems, electronics, and automation. It also improved my presentation skills and problem-solving. It confirmed my interest in energy and control systems, and motivated me to pursue further studies in this field."
      },
      {
        content: "This was one of the first projects that made me realize how engineering can contribute to a more sustainable future."
      }
    ]
  },
  3: {
    sections: [
      {
        content: "During my first weeks at INP-ENSEEIHT, I participated in a CleanWalk activity organized by the student association. This event consisted of collecting waste around the city of Toulouse to help raise awareness about environmental responsibility."
      },
      {
        content: "I also took part in a Fresque du Climat workshop for three hours, where I learned about the causes and consequences of climate change. This experience made me more aware of environmental issues and motivated me to become more engaged in sustainable actions."
      },
      {
        content: "In the future, I plan to get involved in more environmental projects, such as joining student associations focused on sustainability or participating in local ecological initiatives. I believe that even small actions can contribute to a positive impact on our planet."
      }
    ]
  },
  4: {
    sections: [
      {
        title: "Sports",
        content: "I have always enjoyed practicing sports as a way to stay active and balanced. Currently, I participate in the Run & Fit program at school, which allows me to maintain good physical condition."
      },
      {
        content: "In the past, I also practiced basketball, sprint running, and long jump throughout my high school years. These activities helped me develop discipline, teamwork, and perseverance."
      },
      {
        title: "Activities",
        content: "I am currently taking part in a training program with the can7 association, which focuses on animation and creative projects. I am particularly interested in lighting and its connection with electricity and artistic design."
      },
      {
        content: "This activity allows me to learn new technical and creative skills while connecting with people who share the same interests."
      }
    ]
  },
  5: {
    sections: [
      {
        content: "As a student in the 3EA program (Electronics, Energy, Electricity and Automation), I am highly interested in energy systems, automation, and sustainable technologies. My goal is to build a strong engineering career in innovative fields that contribute to a more sustainable future."
      },
      {
        content: "In this section, I include my CV in English and French, which highlights my academic background, technical skills. I also aim to develop my professional network through platforms like LinkedIn and future internships abroad."
      },
      {
        content: "Over the coming years, I plan to gain practical experience through internships and projects that align with my interests, helping me grow both technically and professionally."
      }
    ]
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectData.find((p) => p.id === Number(id));
  const projectDetails = projectDetailsData[Number(id)];

  if (!project) return <p className="text-center mt-10">Project not found</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 mb-10">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>Go Back</span>
      </button>

      {/* Project Header */}
      <div className="mb-6">
        <p className="text-blue-600 text-sm font-semibold mb-2">{project.category}</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
        
        {/* Project Info for Solar Tracker */}
        {projectDetails?.projectInfo && (
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <p className="text-gray-700"><span className="font-semibold">Project Title:</span> {projectDetails.projectInfo.title}</p>
            <p className="text-gray-700"><span className="font-semibold">Project Type:</span> {projectDetails.projectInfo.type}</p>
            <p className="text-gray-700"><span className="font-semibold">Duration:</span> {projectDetails.projectInfo.duration}</p>
          </div>
        )}
      </div>

      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-auto rounded-lg mb-8 shadow-lg"
      />

      {/* Detailed Content */}
      <div className="prose prose-lg max-w-none">
        {projectDetails?.sections.map((section, index) => (
          <div key={index} className="mb-6">
            {section.title && (
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">{section.title}</h2>
            )}
            {section.content && (
              <p className="text-gray-700 leading-relaxed mb-4">{section.content}</p>
            )}
            {section.list && (
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                {section.list.map((item, i) => (
                  <li key={i} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Download Buttons for Career Development */}
      {project.title === "Career Development" && (
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Download My Resume</h3>
          <div className="flex gap-4">
            <a
              href="/assets/cv/cv_eng.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md"
            >
              <FontAwesomeIcon icon={faDownload} />
              <span>EN Resume</span>
            </a>
            <a
              href="/assets/cv/cv_fr.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition shadow-md"
            >
              <FontAwesomeIcon icon={faDownload} />
              <span>FR Resume</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;