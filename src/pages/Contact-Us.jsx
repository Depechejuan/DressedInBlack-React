import ContactCard from '../components/Contact-Card.jsx';
import ContactForm from '../forms/Contact-Form.jsx';


function ContactUs() {

    return (
        <article className="contact-container">
            <ContactForm />
            <br />
            <ContactCard />
        </article>
    )
}

export default ContactUs;