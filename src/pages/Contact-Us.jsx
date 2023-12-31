import { Link } from 'react-router-dom';
import ContactCard from '../components/Contact-Card.jsx';
import ContactForm from '../forms/Contact-Form.jsx';
import getToken from "../services/token/get-token.js";


function ContactUs() {
    const token = getToken();
    return (
        <article className="contact-container">
            <ContactForm />
            <br />
            <ContactCard />
            {token ? (
                null
            ) : (
                <p className="account">¿Tienes cuenta? <Link to="/diblog">Log-In</Link></p>
            )}
        </article>
    )
}

export default ContactUs;