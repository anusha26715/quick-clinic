import './doctorprofile.css'
import { useParams, useNavigate } from 'react-router-dom'
import { doctors } from '../../data'
import { useEffect, useState } from 'react'

const Doctorprofile = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [doctor, setDoctor] = useState(null)

  useEffect(() => {
    const foundDoctor = doctors.find(doc => doc.id === parseInt(id))
    if (foundDoctor) {
      setDoctor(foundDoctor)
    } else {
      navigate('/doctors')
    }
  }, [id, navigate])

  if (!doctor) {
    return (
      <div className="container mt-5">
        <div className="text-center">
          <h3>Doctor not found</h3>
          <button className="btn btn-primary" onClick={() => navigate('/doctors')}>
            Back to Doctors
          </button>
        </div>
      </div>
    )
  }

  return (
    <section className="mt-5">
      <div className="container doctor-profile-container">
        <div className="row">
          <div className="col">
            <div className="row image-context">
              <div className="col-md-4">
                <img src="/images/yammine-doc1.jpg" className='img-fluid profile-img' alt={doctor.name} />
              </div>
              <div className="col-md-8">
                <h4>{doctor.name}</h4>
                <p>Specialization: <span className="fw-bold" style={{color:'var(--color-tealblue)'}}>{doctor.specialization}</span></p>
                <div className="mb-3">
                  <span className="badge bg-info me-2 doctor-profile-bg">Experience: {doctor.experience} years</span>
                  <span className="badge bg-warning">Rating: {doctor.rating || '4.5'}</span>
                </div>
                <p><strong>Location:</strong> {doctor.location || 'Hyderabad'}</p>
                <p className="text-muted">{doctor.bio}</p>
                <p><strong>Consultation Fees:</strong> <span className="text-success fw-bold">₹{doctor.fees || '1100'}/-</span></p>
                {/* Schedule Section */}
                <div className="mt-3 mb-3">
                  <h6 className="text-primary doctor-profile-text mb-2">
                    <i className="bi bi-calendar3 me-2"></i>
                    Consultation Schedule
                  </h6>
                  <div className="schedule-container">
                    {doctor.schedule && doctor.schedule.length > 0 ? (
                      <div className="row">
                        {doctor.schedule.map((schedule, index) => (
                          <div key={index} className="col-md-6 col-lg-4 mb-2">
                            <div className="schedule-item">
                              <span className="schedule-day fw-bold">{schedule.day}</span>&nbsp;
                              <span className="schedule-time text-muted">{schedule.time}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted">Schedule not available</p>
                    )}
                  </div>
                </div>
                <div className="mt-4">
                  {doctor.availability === "Available" ? (
                    <button 
                      className="btn btn-primary me-2 book-btn"
                      onClick={() => navigate(`/book-appointment/${doctor.id}`)}
                    >
                      Book Appointment
                    </button>
                  ) : (
                    <button className="btn btn-secondary me-2" disabled>
                      Not Available
                    </button>
                  )}
                  <button 
                    className="btn btn-outline-secondary"
                    onClick={() => navigate('/doctors')}
                  >
                    Back to Doctors
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Doctorprofile
