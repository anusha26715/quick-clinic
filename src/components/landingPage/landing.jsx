import React, {useState, useCallback} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './landing.css'
import { doctors } from '../../data'

const landing = () => {
    const [search,setSearch] = useState('')
    const [specialty, setSpecialty] = useState('')
    const [doctorsList,setDoctorsList] = useState(doctors)
    const navigate = useNavigate()

    const handleSearch = (e) => {
        e.preventDefault() // Prevent form submission
        
        const filteredDoctors = doctors.filter((each) => {
            const nameMatch = each.name.toLowerCase().includes(search.toLowerCase())
            const specialtyMatch = specialty === '' || each.specialization.toLowerCase() === specialty.toLowerCase()
            
            return nameMatch && specialtyMatch
        })
        
        setDoctorsList(filteredDoctors)
    }

    const handleReset = () => {
        setSearch('')
        setSpecialty('')
        setDoctorsList(doctors)
    }

    // Event Bubbling: Single handler for all doctor card interactions
    const handleDoctorCardClick = useCallback((e) => {
        // Get the clicked element and its data attributes
        const target = e.target
        const doctorCard = target.closest('.doctor-card')
        
        if (!doctorCard) return

        // Get doctor ID from the card
        const doctorId = doctorCard.dataset.doctorId
        const availability = doctorCard.dataset.availability

        // Handle different click targets using event bubbling
        if (target.matches('.btn-appointment.available')) {
            // Book appointment - navigate to doctor profile
            e.preventDefault()
            navigate(`/doctor/${doctorId}`)
        } else if (target.matches('.social-link')) {
            // Social media link clicked
            e.preventDefault()
            const platform = target.dataset.platform
            handleSocialMediaClick(doctorId, platform)
        } else if (target.matches('.doctor-image, .doctor-content')) {
            // Card body clicked - show doctor details
            if (availability === 'Available') {
                navigate(`/doctor/${doctorId}`)
            }
        }
    }, [navigate])

    // Handle social media clicks
    const handleSocialMediaClick = (doctorId, platform) => {
        const doctor = doctors.find(d => d.id === doctorId)
        if (!doctor) return

        const urls = {
            linkedin: `https://linkedin.com/in/${doctor.name.toLowerCase().replace(' ', '')}`,
            twitter: `https://twitter.com/${doctor.name.toLowerCase().replace(' ', '')}`,
            email: `mailto:${doctor.email || 'contact@quickclinic.com'}`
        }

        if (urls[platform]) {
            window.open(urls[platform], '_blank')
        }
    }

    

    return(
        <main className='landing-container'>
            <h2 className='text-center mt-4 mb-5 fw-bold'>Our Doctors are here for you</h2>

            <section className="container">
                <div className="row justify-content-center aos-init aos-animate pb-5" data-aos="fade-up" data-aos-delay="200">
                    <div className="col-lg-12">
                        <div className="search-container">
                            <form className="search-form" onSubmit={handleSearch}  method="get">
                                <div className="row g-3">
                                    <div className="col-md-4">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="doctor_name" 
                                            value={search} 
                                            onChange={e => setSearch(e.target.value)} 
                                            placeholder="Doctor name or keyword"
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <select 
                                            className="form-select" 
                                            name="specialty" 
                                            id="specialty-select"
                                            value={specialty}
                                            onChange={(e) => setSpecialty(e.target.value)}>
                                            
                                            <option value="">Select Specialty</option>
                                            <option value="cardiology">Cardiology</option>
                                            <option value="neurology">Neurology</option>
                                            <option value="orthopedics">Orthopedics</option>
                                            <option value="pediatrics">Pediatrics</option>
                                            <option value="dermatology">Dermatology</option>
                                            <option value="oncology">Oncology</option>
                                            <option value="surgery">Surgery</option>
                                            <option value="emergency">Emergency Medicine</option>
                                            <option value="homeopathy">Homeopathy</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="d-flex gap-2">
                                            <button type="submit" className="btn btn-primary flex-fill search-btn">
                                                <i className="bi bi-search me-2"></i>Search Doctor
                                            </button>
                                            <button 
                                                type="button" 
                                                className="btn btn-outline-secondary"
                                                onClick={handleReset}
                                            >
                                                Reset
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Event Bubbling: Single container handler for all doctor cards */}
                <ul className='row ps-0' onClick={handleDoctorCardClick}>
                    {doctorsList.length !== 0 ? (
                        doctorsList.map((each) => (
                            <div key={each.id} className="col-xl-3 col-lg-4 col-md-6 mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400"> 
                                <div 
                                    className="doctor-card"
                                    data-doctor-id={each.id}
                                    data-availability={each.availability}
                                >
                                    <span className='availability' style={{backgroundColor: each.availability === "Available" ? "green" : each.availability === "Fully Booked" ? "red" : "orange"}}>
                                        {each.availability}
                                    </span>
                                    <div className="doctor-image">
                                        <img src="/images/yammine-doc1.jpg" alt="Dr. Jennifer Martinez" className="img-fluid"/>
                                        <div className="doctor-overlay">
                                            <div className="doctor-social">
                                                <a href="#" className="social-link" data-platform="linkedin">
                                                    <i className="bi bi-linkedin"></i>
                                                </a>
                                                <a href="#" className="social-link" data-platform="twitter">
                                                    <i className="bi bi-twitter"></i>
                                                </a>
                                                <a href="#" className="social-link" data-platform="email">
                                                    <i className="bi bi-envelope"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="doctor-content">
                                        <h4 className="doctor-name">{each.name}</h4>
                                        <span className="doctor-specialty">{each.specialization}</span>
                                        <p className="doctor-bio">{each.bio}</p>
                                        <div className="doctor-experience">
                                            <span className="experience-badge">{`${each.experience} years of experience`}</span>
                                        </div>
                                        <Link to={`/doctor/${each.id}`} className="btn-profile available">
                                                View Profile
                                            </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <h3 className='text-center mt-5'>Doctors Not Found!!</h3>
                    )}
                </ul>
            </section>
        </main>
    )
}

export default landing;