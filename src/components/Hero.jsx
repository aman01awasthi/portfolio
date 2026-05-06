const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-center pt-20">
      <h1 className="text-5xl font-bold text-white">Amandeep Awasthi</h1>
      <h3 className="text-2xl text-gray-400 mt-4">Frontend Developer</h3>
      <h5 className="text-lg text-gray-400 max-w-3xl mt-4 px-4">
        Builds and ships production React apps — trusted
        with real users, real deadlines, real scale.
      </h5>
      <div className="flex gap-4 mt-8">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200">
          View Projects
        </button>

        <a href="/resume.pdf" download="Amandeep_Awasthi_Resume.pdf" className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg">
            Download Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
