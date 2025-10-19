import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Electricity",
    description:
      "The study of how electric power is generated, transmitted, and used. It focuses on electrical circuits, power systems, and energy distribution.",
  },
  {
    id: 2,
    title: "Electronics",
    description:
      "The study of how to control and use electrical signals to build devices and systems such as sensors, communication systems, and computers.",
  },
  {
    id: 3,
    title: "Automation",
    description:
      "The use of control systems and technologies to make processes work automatically, improving efficiency and reducing human intervention.",
  },
  {
    id: 4,
    title: "Energy",
    description:
      "The study of how energy is produced, converted, and managed, including renewable sources, power plants, and sustainable technologies.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
           Student at ENSEEIHT, specializing in electrical engineering, electronics, energy, and automation, after two years of preparatory classes in Mathematics and Physics. Curious, motivated, and rigorous, I am eager to develop my technical and scientific skills through practical and innovative projects.
          </p>
        </div>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
