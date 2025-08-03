import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { doctors } from '../../data'
import './bookappointment.css'

const BookAppointment = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [doctor, setDoctor] = useState(null)
  const [formData, setFormData] = useState({
    patientName: '',
    email: '',
    appointmentDate: '',
    appointmentTime: '',
    phone: '',
    reason: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const foundDoctor = doctors.find(doc => doc.id === parseInt(id))
    if (foundDoctor) {
      setDoctor(foundDoctor)
    } else {
      navigate('/doctors')
    }
  }, [id, navigate])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.patientName.trim()) {
      newErrors.patientName = 'Patient name is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.appointmentDate) {
      newErrors.appointmentDate = 'Appointment date is required'
    }
    else {
      // Check if date is today or in the future
      const selectedDate = new Date(formData.appointmentDate)
      const today = new Date()
      today.setHours(0,0,0,0)
      if (selectedDate < today) {
        newErrors.appointmentDate = 'Appointment date cannot be before today'
      }
    }
    if (!formData.appointmentTime) {
      newErrors.appointmentTime = 'Appointment time is required'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Phone number must be exactly 10 digits'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      setShowConfirmation(true)
    }
  }

  const confirmAppointment = () => {
    setShowConfirmation(false)
    setIsSubmitted(true)
  }

  const cancelAppointment = () => {
    setShowConfirmation(false)
  }

  if (!doctor) {
    return (
      <div className="container mt-5">
        <div className="text-center">
          <h3>Doctor not found</h3>
          <button 
            className="btn custom-primary-btn" 
            onClick={() => navigate('/doctors')}
          >
            Back to Doctors
          </button>
        </div>
      </div>
    )
  }

  if (isSubmitted) {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card border-success">
              <div className="card-body text-center">
                <i className="bi bi-check-circle text-success" style={{fontSize: '3rem'}}></i>
                <h4 className="text-success mt-3">Appointment Booked Successfully!</h4>
                <p className="text-muted">Thank you for booking an appointment with {doctor.name}</p>
                <p className="text-muted">We'll send you a confirmation email shortly.</p>
                <div className="mt-4">
                  <button 
                    className="btn custom-primary-btn"
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
    )
  }

  return (
    <div className="container mt-3 mb-3">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-header custom-header">
              <h4 className="mb-0 text-white">Book Appointment with {doctor.name}</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                  <label className="form-label">Patient Name</label>
                  <input
                    type="text"
                    className={`form-control ${errors.patientName ? 'is-invalid' : ''}`}
                    placeholder='Enter Patient Name'
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleInputChange}
                  />
                  {errors.patientName && <div className="invalid-feedback">{errors.patientName}</div>}
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    name="email"
                    placeholder='Enter Mail'
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                    name="phone"
                    placeholder='Enter Mobile Number'
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Date</label>
                    <input
                      type="date"
                      className={`form-control ${errors.appointmentDate ? 'is-invalid' : ''}`}
                      name="appointmentDate"
                      value={formData.appointmentDate}
                      onChange={handleInputChange}
                    />
                    {errors.appointmentDate && <div className="invalid-feedback">{errors.appointmentDate}</div>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Time</label>
                    <input
                      type="time"
                      className={`form-control ${errors.appointmentTime ? 'is-invalid' : ''}`}
                      name="appointmentTime"
                      value={formData.appointmentTime}
                      onChange={handleInputChange}
                    />
                    {errors.appointmentTime && <div className="invalid-feedback">{errors.appointmentTime}</div>}
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Reason for Visit (optional)</label>
                  <textarea
                    className="form-control"
                    name="reason"
                    value={formData.reason}
                    placeholder='Enter Your Reason'
                    onChange={handleInputChange}
                    rows={4}
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn custom-primary-btn btn-lg me-2">
                    Book Appointment
                  </button>

                  <Link to={`/doctor/${doctor.id}`} className="btn custom-primary-btn btn-lg ms-2">
                    back
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="card">
              <div className="card-header custom-header">
                <h5 className="mb-0 text-white">Confirm Appointment</h5>
              </div>
              <div className="card-body">
                <h6>Please confirm your appointment details:</h6>
                <div className="confirmation-details">
                  <p><strong>Doctor:</strong> {doctor.name}</p>
                  <p><strong>Patient:</strong> {formData.patientName}</p>
                  <p><strong>Date:</strong> {formData.appointmentDate}</p>
                  <p><strong>Time:</strong> {formData.appointmentTime}</p>
                  <p><strong>Email:</strong> {formData.email}</p>
                  <p><strong>Phone:</strong> {formData.phone}</p>
                  {formData.reason && <p><strong>Reason:</strong> {formData.reason}</p>}
                </div>
                <div className="mt-4 d-flex gap-2 justify-content-end">
                  <button 
                    className="btn btn-outline-secondary"
                    onClick={cancelAppointment}
                  >
                    Cancel
                  </button>
                  <button 
                    className="btn custom-primary-btn"
                    onClick={confirmAppointment}
                  >
                    Confirm Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default BookAppointment
