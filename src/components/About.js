import React from 'react';
import Profile from '../Images/profile.jpg';
const About = () => {
    const experience = "1+Years";
    const education = "M.Tech CSE (Integrated)";
    const description = " As a software developer, I am passionate about solving complex problems and creating innovative solutions. My expertise lies in software development, project management, testing, and agile methodologies";

    const contentArray = [
        { 
            icon: "fas fa-briefcase",
            title: "Experience",
            text: experience
        },
        { 
            icon: "fas fa-graduation-cap",
            title: "Education",
            text: education
        }
    ];

    return (
        <section id="about">
            <div className="container py-5">
                <div className="row text-center justify-content-center">
                    <h2 className="lead fw-bold fs-2">Let's get to know me</h2>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mt-lg-auto mb-lg-auto mb-4 mb-lg-0 d-flex justify-content-center align-items-center">
                        <div className="section__pic-container">
                            <img src={Profile} alt="Profile picture" className="about-pic img-fluid rounded-circle" style={{ width: "200px", height: "200px", objectFit: "cover" }}></img>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="about-details-container">
                            <div className="about-containers d-flex flex-column">
                                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2">
                                    {contentArray.map((item, index) => (
                                        <div className="col-lg-5  mb-3 " key={index}>
                                            <div className="d-flex h-100">
                                                <div className="card flex-grow-1 border border-secondary rounded-card p-2">
                                                    <i className={item.icon + " text-center d-block mx-auto mb-3"} style={{ fontSize: "40px" }}></i>
                                                    <div className="card-body text-center">
                                                        <h3 className="card-title">{item.title}</h3>
                                                        <p className="card-text">{item.text}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    
                                </div>
                                <div className="text-container text-justify mt-4">
                        <p>
                            {description}
                        </p>
                    </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default About;
