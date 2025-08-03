import "./contact.css"

const Contact = () => {
    return(
        <section >

      <div className="container mt-4 mb-4">
        <div className="contact-wrapper">
          <div className="contact-info-panel">
            <div className="contact-info-header">
              <h3>Contact Information</h3>
              <p>
                If you have any questions or need assistance, feel free to reach out to us through the contact information provided below. We are here to help you with any inquiries or concerns you may have.
              </p>
            </div>

            <div className="contact-info-cards">
              <div className="info-card">
                <div className="icon-container">
                  <i className="bi bi-pin-map-fill"></i>
                </div>
                <div className="card-content">
                  <h4>Our Location</h4>
                  <p>EWS_213, Bank of Baroda Street line, THub Hitech City, Hyderabad</p>
                </div>
              </div>

              <div className="info-card">
                <div className="icon-container">
                  <i className="bi bi-envelope-open"></i>
                </div>
                <div className="card-content">
                  <h4>Email Us</h4>
                  <p>quickclinic.info@gmail.com</p>
                </div>
              </div>

              <div className="info-card">
                <div className="icon-container">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <div className="card-content">
                  <h4>Call Us</h4>
                  <p>+91 9989860638</p>
                </div>
              </div>

              <div className="info-card">
                <div className="icon-container">
                  <i className="bi bi-clock-history"></i>
                </div>
                <div className="card-content">
                  <h4>Working Hours</h4>
                  <p>Monday-Saturday: 9AM - 7PM</p>
                </div>
              </div>
            </div>

            <div className="social-links-panel">
              <h5>Follow Us</h5>
              <div className="social-icons">
                <a href="#"><i className="bi bi-facebook"></i></a>
                <a href="#"><i className="bi bi-twitter-x"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
                <a href="#"><i className="bi bi-linkedin"></i></a>
                <a href="#"><i className="bi bi-youtube"></i></a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    )
}

export default Contact;