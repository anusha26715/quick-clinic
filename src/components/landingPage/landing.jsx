import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './landing.css'
import { doctors } from '../../data'

const landing = () => {
    const [search,setSearch] = useState('')
    const [specialty, setSpecialty] = useState('')
    const [doctorsList,setDoctorsList] = useState(doctors)

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
    

    return(
        <main className='landing-container'>
            <h2 className='text-center mt-4 mb-5'>Our Doctors are here for you</h2>

            <section className="container">
                <div className="row justify-content-center aos-init aos-animate pb-5" data-aos="fade-up" data-aos-delay="200">
                    <div className="col-lg-12">
                        <div className="search-container">
                            <form className="search-form"onSubmit={handleSearch} method="get">
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

                <ul className='row ps-0'>
                    {doctorsList.length !== 0?(
                        doctorsList.map((each)=> (
                            <div key={each.id} className="col-xl-3 col-lg-4 col-md-6 mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400"> 
                                <div className="doctor-card">
                                    <div className="doctor-image">
                                        <img src="src/assets/yammine-doc1.jpg" alt="Dr. Jennifer Martinez" className="img-fluid"/>
                                        <div className="doctor-overlay">
                                            <div className="doctor-social">
                                                <a href="#" className="social-link"><i className="bi bi-linkedin"></i></a>
                                                <a href="#" className="social-link"><i className="bi bi-twitter"></i></a>
                                                <a href="#" className="social-link"><i className="bi bi-envelope"></i></a>
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
                                        <Link to={`/doctor/${each.id}`} className="btn-appointment">Book Appointment</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ):(
                        <h3 className='text-center mt-5'>Doctors Not Found!!</h3>
                    )}
                </ul>
            </section>
        </main>
    )
}

export default landing;