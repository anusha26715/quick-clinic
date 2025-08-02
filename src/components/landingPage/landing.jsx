import './landing.css'
import { doctors } from '../../data'

const landing = () => {
    return(
        <main className="landing-container">
            <h2>Doctors are here for you</h2>
            <ul>
                {doctors.map((each)=> (
                    <li key={each.id}>{each.bio}</li>
                ))}
            </ul>
        </main>
    )
}

export default landing;