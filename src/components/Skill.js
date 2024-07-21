import React from 'react';

const Skill = () => {
    // Define the array of skills here
    const skills = [
        {
            title: 'Frontend Development',
            items: [
                { name: 'HTML', proficiency: 'Experienced' },
                { name: 'CSS', proficiency: 'Experienced' },
                { name: 'SASS', proficiency: 'Intermediate' },
                { name: 'JavaScript', proficiency: 'Basic' }
            ]
        },
        {
            title: 'Backend Development',
            items: [
                { name: 'PostgreSQL', proficiency: 'Basic' },
                { name: 'Node JS', proficiency: 'Intermediate' },
                { name: 'Express JS', proficiency: 'Intermediate' },
                { name: 'Git', proficiency: 'Intermediate' }
            ]
        }
    ];

    return (
        <section id="skills" className="py-5">
            <div className="container col-lg-8 py-5">
                <h1 className="text-center mb-5 fw-bold fs-3">Explore My Skills</h1>
                <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
                    {skills.map((skill, index) => (
                        <div key={index} className="col-12 col-lg-5">
                            <div className="card h-100 rounded-card border-secondary">
                                <div className="card-body m-3">
                                    <h2 className="card-title mb-4 fs-5 text-center">{skill.title}</h2>
                                    <div className="row row-cols-2 g-2">
                                        {skill.items.map((item, idx) => (
                                            <div key={idx} className="col mb-2 d-flex align-items-center">
                                                <i className="fas fa-check-circle me-2"></i>
                                                <div>
                                                    <h3 className="h6 mb-0">{item.name}</h3>
                                                    <p className="text-muted mb-0">{item.proficiency}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;
