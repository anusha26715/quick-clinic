import { useNavigate } from 'react-router-dom';
import './notfound.css';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="notfound-container d-flex flex-column align-items-center justify-content-center" style={{minHeight: '70vh', textAlign: 'center'}}>
            <h1 className="display-4 fw-bold mb-3">404 - Page Not Found</h1>
            <p className="lead text-muted mb-4">Sorry, the page you are looking for does not exists or has been moved.</p>
            <button className="btn btn-primary px-4 py-2" onClick={() => navigate('/')}>Go to Home</button>
        </div>
    );
}

export default NotFound;