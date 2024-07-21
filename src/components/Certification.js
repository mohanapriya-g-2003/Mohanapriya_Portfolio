import React from 'react';
import Image from '../Images/certificates/certificate.png';

// Create a function to import all images from the 'img' folder
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
}
const images = importAll(require.context('../Images/certificates', false, /\.(png|jpe?g|svg)$/));
const Certification = () => {
    
    const certifications = [
        { title: "Cisco CyberSecurity" ,image:images['cisco cybersecurity.jpg']},
        { title: "Ethics in Engineering" ,image:images['ethics in engineering.jpg']},
        { title: "UiPath RPA" ,image:images['uipath rpa.jpg']},  
    ];

    return (
        <section id="certification" className="text-center py-5">
            <div className="container py-5">
                <div className="row justify-content-center">
                    <h2 className="fw-bold">Certifications</h2>
                    <p className="lead text-muted mb-5">Some of my certifications</p>
                </div>
            </div>
            <div className="container col-lg-8 col-md-10 mb-5">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2">
                    {certifications.map((certification, index) => (
                        <div key={index} className="col-lg-4 mx-auto mb-5">
                            <div className="card h-100 shadow-lg border-0 bg-light">
                                <img className="card-img-top" src={certification.image} alt="Project 1"/>
                                <div className="card-body">
                                    <h5 className="card-title ">{certification.title}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Certification;
