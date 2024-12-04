import React from "react";
import CTA from "../components/CTA";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import { Link } from "react-router-dom";

const Projects = () => {
  const downloadResume = () => {
    // doesnt work
    const link = document.createElement("a");
    link.href = "../../public/Mehak_Mattoo_Resume.pdf";
    link.download = "Mehak_Mattoo_Resume.pdf"; // Specify the downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="max-container">
      <div className="text-slate-500 mt-2 leading-relaxed">
        <p>
          I've embarked on numerous projects throughout the years, but these are
          the ones I hold closest to my heart. You can check them out and feel
          free to contribute your ideas for further enhancements.
        </p>
      </div>
      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="threads"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="btn">

      <a
        href="../../public/Mehak_Mattoo_Resume.pdf" // Path
        download="Mehak_Mattoo_Resume.pdf" // Name of the file when downloaded
      >
        Download Resume
      </a>
      </button>

   

      <hr className="mt-5 border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
