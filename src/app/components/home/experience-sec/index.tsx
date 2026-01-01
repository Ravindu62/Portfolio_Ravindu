import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "2020",
            title: "Associate Image Processor",
            company: "Orel IT",
            type: "Fulltime",
            description: "I was an project employee with a large team that developed autonomous driving technologies and advanced driver-assistance systems including cameras, computer chips and software. "
        },
        {
            year: "2023",
            title: "Former Director",
            company: "University of Colombo Dancing Circle",
            type: "Freelance",
            description: "I was appointed as a Assistant Director of the PR & IT Department of Dancing Circle of University of Colombo for the term 2023/24. My job is to design flyers for the directory. I was able to do major projects in the club to market the club at university level. Because of my performance and the commitment that I put in there led me to be appointed as the Director of the PR & IT Directory of the club. In my directory period I was able to recruit a new PR team and train them as well."
        },
        {
            year: "2024",
            title: "Trainee Project Manager",
            company: "Omobio Pvt Ltd",
            type: "On-site",
            description: "I was a trainee project manager responsible for planning, executing, and closing projects. Managed teams, timelines, and budgets to ensure successful project delivery. I have worked on mulitple projects simultaneously in multiple domains gaining technical knowledge as well."
        },
        {
            year: "2025 - Present",
            title: "Associate Project Manager",
            company: "Omobio Pvt Ltd",
            type: "Part-time",
            description: "Upon successful trainee period I was pormoted as an Associate Project Manager after completing my trainee period successfully. As an Associate Project Manager, I am responsible for a largest selfcare application in Sri Lanka. My main responsibilities were Project Planning, Prioratizing CRs, Preparing Effort Estimations, Maintaining project with Agile Methodologies, Pre Sales related activities, SLA Support, Resource allocation and project delivery while coordinating with cross-functional teams to ensure project success."
        },
    ];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className=" relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 1 ? 'border-primary' : 'border-black'
                                            }`}>
                                            {index === 1 && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;