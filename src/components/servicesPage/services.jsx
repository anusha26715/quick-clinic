import { Link } from "react-router-dom";
import "./services.css"

const Services = () => {
    return(
        <section className="services section pt-4 pb-5">
            <h3 className="text-center pt-3 pb-3 fw-bold">Our Services</h3>

            <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                <div className="services-cta aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                    <div className="cta-content">
                        <i className="bi bi-calendar-check"></i>
                        <h3>Ready to Schedule Your Appointment?</h3>
                        <p className="pt-3 pb-3">
                        At Quick Clinic, we offer a wide range of medical services to cater to your health needs. Whether you need a routine check-up, specialist consultation, or emergency care, our team of experienced healthcare professionals is here to provide you with the best care possible. From general medicine to specialized treatments, we are committed to ensuring your well-being and health.
                        </p>
                        <div className="cta-buttons">
                        <Link to="" className="btn-book">Book Now</Link>
                        <Link to="/contact" className="btn-contact">Contact Us</Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

            </div>

        </section>
    )
}

export default Services;