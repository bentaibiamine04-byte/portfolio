import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card1.jpg";
import card2 from "../../assets/images/portfolio-images/card2.jpg";
import card3 from "../../assets/images/portfolio-images/card3.jpeg";
import card4 from "../../assets/images/portfolio-images/card5.jpg";
import card5 from "../../assets/images/portfolio-images/card4.jpg";
import card6 from "../../assets/images/portfolio-images/card6.png";
import card7 from "../../assets/images/portfolio-images/card7.jpg";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "International Mobility",
    title: "International Mobility",
    description:
      "I have not yet completed any international mobility, but I am very interested in gaining international experience during my studies. I have recently started learning Spanish, and one of my goals is to study or complete an internship in a Spanish-speaking country.",
  },
  {
    id: 2,
    image: card2,
    category: "Scientific & Technical Project (TIPE)",
    title: "Solar Tracker System (10 month)",
    description:
      "This project focused on designing and building a solar tracker capable of optimizing the orientation of a solar panel to follow the sun’s position throughout the day. The main goal was to increase energy efficiency by maximizing the amount of sunlight captured.",
  },
  {
    id: 3,
    image: card3,
    category: "Sustainability",
    title: "Sustainability & Civic Engagement",
    description:
      "During my first weeks at INP-ENSEEIHT, I participated in a CleanWalk activity organized by the student association. This event consisted of collecting waste around the city of Toulouse to help raise awareness about environmental responsibility.",
  },
  {
    id: 4,
    image: card4,
    category: "Sports & Activities",
    title: "Sports",
    description:
      "I have always enjoyed practicing sports as a way to stay active and balanced. Currently, I participate in the Run & Fit program at school, which allows me to maintain good physical condition.",
  },
  {
    id: 5,
    image: card5,
    category: "Sports & Activities",
    title: "Activities",
    description:
      "I am currently taking part in a training program with the KanSet association, which focuses on animation and creative projects. I am particularly interested in lighting and its connection with electricity and artistic design.",
  },
  {
    id: 6,
    image: card6,
    category: "System",
    title: "Product Admin Dashboard",
    description:
      "Enhanced user experience by streamlining workflows and optimizing interface components and so on.",
    link: "#!",
  },
  {
    id: 6,
    image: card7,
    category: "Study",
    title: "Career Development",
    description:
      "As a student in the 3EA program (Electronics, Energy, Electricity and Automation), I am highly interested in energy systems, automation, and sustainable technologies. My goal is to build a strong engineering career in innovative fields that contribute to a more sustainable future.",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            My Path Through Innovation, Mobility, and Ambition
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
