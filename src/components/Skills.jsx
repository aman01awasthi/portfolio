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
                className="bg-gray-800 text-white px-6 py-3 rounded-lg text-lg font-medium"
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
