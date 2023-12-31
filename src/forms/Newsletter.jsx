import { useState } from 'react';
import newsTokken from '../services/token/newsletter-token';
import tempToken from '../services/token/temp-nl-token';
import getNewsToken from '../services/token/get-news-token';
import sendNewsLetter from '../services/send-newsletter';

function Newsletter() {
    const [showComponent, setShowComponent] = useState(true);
    const [formData, setFormData] = useState({
        email: '',
        city: ''
    })

    const checkStatus = getNewsToken();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await sendNewsLetter(formData);
            newsTokken();
            handleHideButton();
        } catch (err) {
            console.error(err);
        }
    }

    const handleHideButton = () => {
        console.log("Hide")
        tempToken();
        setShowComponent(false);
    };
    
    if (!showComponent) {
        return null;
    }

    const mostrarComponente = checkStatus === null || checkStatus === undefined;

    return (
        <>
        {mostrarComponente &&
            <section className="suscribe">
            <form className="newsletter" method="post" onSubmit={handleSubmit}>
                <button type="submit" className="ocultar-btn" onClick={handleHideButton} >
                    Ocultar
                </button>
                <p>¡Suscríbete a nuestra Newsletter para estar al tanto de nuestros conciertos!</p>
                <div>
                    <input 
                        type="text"
                        name="email"
                        placeholder="email"
                        value={formData.email}
                        onChange={handleChange}
                        required={!showComponent} 
                    />
                    <input 
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                    />
                    <button type="submit" className="form-btn">
                        Suscribirse
                    </button>
                </div>
            </form>
        </section>
        }
        </>
    );

}

export default Newsletter;