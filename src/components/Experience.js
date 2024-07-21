import React from 'react';

const experiences = [
  {
    company: "Arizona State University",
    link: "https://www.asu.edu/",
    position: "Software Engineer",
    duration: "January 2021 - Present",
    description:
      "Managed large-scale deployment of JupyterHub with Nbgrader and webwork software, facilitating approx 5500 students.",
    
  },
  {
    company: "Augmenify Infotech Pvt. Ltd.",
    link: "https://www.augmenify.com/",
    position: "Backend Developer",
    duration: "August 2020 - November 2020",
    description:
      "Documented and coded server-less web application for the hotel industry and designed REST API using Flask-based JWT authentication.",
  }, 
  // Add more experience objects as needed
];

const Experience = () => {
  return (
    <section id="experience" className=" mt-5 py-4">
         <div className="text-center mb-4">
          <h2>Experience</h2>
        </div>
        <div className="container col-lg-9 col-sm-10 bg-light border border-secondary rounded ml-sm-auto"> 

       
        <div className="row mt-4 ">
          {experiences.map((exp, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <h4 className="text-left text-success">{exp.company}</h4>
                <h5 className="text-left">{exp.duration}</h5>
                <p className="text-left"><em>{exp.position}</em></p>
                <p className="text-left"><em>{exp.description}</em></p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>  );
};

export default Experience;
