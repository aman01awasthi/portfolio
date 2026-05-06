const Projects = () => {
  const projects = [
    {
      name: "Expense Tracker",
      description:
        "Personal finance tracker built with React and Tailwind — live on Vercel",
      tech: ["React", "Tailwind"],
      liveLink: "your-vercel-link",
      githubLink: "your-github-link",
      isPrivate: false,
    },
    {
      name: "VyazPay",
      description:
        "Complete fintech platform for personal loans — architected and shipped solo",
      tech: ["React.js", "Bootstrap", "Material UI"],
      liveLink: "https://vyazpay.com",
      githubLink: null,
      isPrivate: true,
    },
    {
      name: "InvestXTimes",
      description:
        "Investor dashboard with real-time return projections based on selected plans",
      tech: ["JavaScript", "Bootstrap", "CSS3"],
      liveLink: "https://investxtimes.com",
      githubLink: null,
      isPrivate: true,
    },
    {
      name: "CampusDunia",
      description:
        "Four-dashboard platform serving 600,000+ users across Indian educational institutions",
      tech: ["JavaScript", "Bootstrap", "CSS3"],
      liveLink: "https://test.cerebroxtek.com",
      githubLink: null,
      isPrivate: true,
    },
  ];

  return (
    <>
      <div className="bg-gray-800 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-500 mb-10">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div
                key={i}
                className="bg-gray-900 rounded-xl p-6 text-left flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex gap-2 flex-wrap mb-4">
                    {project.tech.map((tec, i) => (
                      <span
                        key={i}
                        className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs"
                      >
                        {tec}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 items-center mt-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
                  >
                    Live Link
                  </a>
                  {project.githubLink &&(

                    <a
                      href={project.githubLink}
                      target="_blank"
                      className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg text-sm"
                    >
                      GitHub
                    </a>
                  )}
                  {project.isPrivate &&(

                      <span className="text-gray-500 text-xs italic">Private codebase — company project</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
