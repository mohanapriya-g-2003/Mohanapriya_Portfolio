import React from 'react';
import project1Image from '../Images//projects/project1.png';
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
}
const Project = () => {
    // Define an array to store project data
    const images = importAll(require.context('../Images/projects', false, /\.(png|jpe?g|svg)$/));
    const projects = [
        {
            title: "StockWise",
            image: images['portfolio.png'],
            description: " AI-optimized stock management systems for investors includes improved forecasting, optimized stock levels, and strategic investment adjustments.            ",
            tags: ["Django", "React", "Material UI"],
            sourceCode: "#"
        },
        {
            title: "Portfolio Website",
            image: images['portfolio.png'],
            description: "A portfolio website built using Django 3, Next.js 12 and Material UI 5 that uses a PostgreSQL database to store data.",
            tags: ["Django", "React", "Material UI"],
            sourceCode: "#"
        },
       
    ];

    return (
        <section id="project" className="text-center py-5">
            <div className="container  py-5">
                <div className="row justify-content-center">
                    <h2 className="fw-bold">Projects</h2>
                    <p className="lead text-muted mb-5">View some of my latest projects</p>
                </div>
            </div>
            <div className="container col-lg-10 mb-5">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2">
                    {projects.map((project, index) => (
                        <div key={index} className="col-lg-4 mx-auto mb-5">
                            <div className="card h-100 shadow-lg border-0 bg-light">
                                <img className="card-img-top" src={project.image} alt={project.title}/>
                                <div className="card-body p-4">
                                    <h5 className="card-title mb-3">{project.title}</h5>
                                    <div className="mb-2">
                                        {project.tags.map((tag, index) => (
                                            <div key={index} className="badge bg-primary rounded-pill me-1">{tag}</div>
                                        ))}
                                    </div>
                                    
                                    <p className="card-text">{project.description}</p>
                                </div>
                                <div className="card-footer bg-transparent mb-3">
                                    <a
                                        className="btn btn-outline-primary btn-sm text-uppercase"
                                        href={project.sourceCode}
                                        target="_blank"
                                    >
                                        Source Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Project;
