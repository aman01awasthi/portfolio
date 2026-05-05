const Skills = () => {
  const skills = [
    "React.js",
    "JavaScript ES6+",
    "Tailwind CSS",
    "REST APIs",
    "Git & GitHub",
    "HTML5 & CSS3",
  ];
  return (
    <>
      <div className="bg-gray-900 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-500 mb-10">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="bg-blue-900 text-blue-300 border border-blue-700 px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 hover:text-white transition-colors duration-200"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
