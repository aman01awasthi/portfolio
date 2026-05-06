const Contact = () => {
  return (
    <>
      <div className="bg-gray-900 py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-500 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            I'm open to new opportunities. Let's talk.
          </p>

          <div className="flex gap-4 justify-center">
            <a
              href="mailto:aman01awasthi@gmail.com"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/amandeep-awasthi/"
              target="_blank"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg transition-colors duration-200"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
