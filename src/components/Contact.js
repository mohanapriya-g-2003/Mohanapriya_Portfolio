import React from 'react';

const Contact = () => {
    return (
        <section className="contact section py-5" id="contact">
        <div className="container py-5">
            <div className="row text-center justify-content-center mb-5">
                <h2 className="fw-bold">Contact Me</h2>
                <p className="lead text-muted">Let's get in touch</p>
            </div>

            <div className="row justify-content-center">
                <div className="col-12 col-lg-10 shadow p-4 bg-light">
                    <div className="row">
                        <div className="col-12 col-md-6 mb-4">
                            <div className="mb-4 d-flex align-items-center">
                                <i className="fas fa-envelope fs-3 me-3"></i>
                                <div>
                                    <h3 className="h5">Email</h3>
                                    <span className="text-muted">lalithamohana06@gmail.com</span>
                                </div>
                            </div>
                            <div className="mb-4 d-flex align-items-center">
                                <i className="fas fa-phone fs-3 me-3"></i>
                                <div>
                                    <h3 className="h5">Call Me</h3>
                                    <span className="text-muted">+91 9345875562</span>
                                </div>
                            </div>
                            <div className="mb-4 d-flex align-items-center">
                                <i className="fas fa-map-marker-alt fs-3 me-3"></i>
                                <div>
                                    <h3 className="h5">Location</h3>
                                    <span className="text-muted">Coimbatore, India</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <form id="contact-form">
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" name="name" placeholder="Name"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" placeholder="email@gmail.com"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="project" className="form-label">Project</label>
                                    <input type="text" className="form-control" id="project" name="project" placeholder="Project Title"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea id="message" name="message" rows="4" className="form-control" placeholder="Explain in detail"></textarea>
                                </div>
                                <button type="submit" onClick={(event) => {
    event.preventDefault();
    alert("This function is not enabled. Please try contacting via email or LinkedIn.");
  }} className="btn btn-primary">Send Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   

    );
};

export default Contact;