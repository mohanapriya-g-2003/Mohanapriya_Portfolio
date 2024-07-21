import React from 'react';

function Home() {
    return (
        <section className="bgimage" id="home">
            <div className="stars"></div>
            <div className="twinkling"></div>
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-12 hero-text">
                        <h2 className="display-7 mb-2">I'm Mohanapriya G  <i className="fas fa-hand-paper hand-gesture"></i></h2>
                        <p className="lead mb-4">I am a Software Developer from Coimbatore</p>

                        {/* Social media icons */}
                         <div className="social-icons mt-4">
                                <a href="#" className="text-white me-2"><i className="fab fa-instagram"></i></a>
                                <a href="#" className="text-white me-2"><i className="fab fa-github"></i></a>
                                <a href="#" className="text-white"><i className="fab fa-linkedin"></i></a>
                        </div> 
                        
                        {/* Download CV button */}
                        <div className="mt-4">
                                <a href="#" className="btn btn-outline-dark btn-glow">Download CV</a>
                        </div> 
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
