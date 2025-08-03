import './about.css'

const About = () => {

    return (
        <section className="about-container">
            <h4 className="head-line">ABOUT</h4>
            <h2>LEARN MORE ABOUT US</h2>
            <div className="container">
                <div className="about-content-container row" id="Row">
                <div className="img-content-container col-lg-5 p-3">
                    <img src="/images/consultation.webp" className="img-fluid about-image" alt="Oops...No Image Found!!!"/>
                    <div className="experience-badge">
                        <span className="experience-num">20+</span><span>YEARS OF EXPERTISE</span>
                    </div>
                </div>

                <div className="about-context col-lg-7">
                    <div className='p-2'>
                        <h2>Elevating Medical Treatment Through Innovation</h2>
                        <p className="about-context-para1">
                            At Quick Clinic, we are dedicated to transforming healthcare by integrating cutting-edge technology with compassionate care.
                        </p>
                        <p className="about-context-para2">
                            With a focus on innovation, we leverage advanced medical practices and state-of-the-art facilities to provide comprehensive healthcare services. 
                        </p>
                        <div className="about-cards row">
                            <div className="col-md-6 mb-4">
                                <div className="about-card ">
                                    <i className="bi bi-check-circle-fill"></i>
                                    <h5>Dedicated Team Support</h5>
                                    <p>
                                        Our highly skilled professionals are committed to providing personalized service and impactful solutions on every engagement.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="about-card">
                                    <i className="bi bi-lightbulb-fill"></i>
                                    <h5>Forward-Thinking Approach</h5>
                                    <p>
                                        We embrace innovative methodologies to develop unique strategies that drive lasting success.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className="abt-explore-service-btn">
                                <a href="">Explore Our Services</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default About