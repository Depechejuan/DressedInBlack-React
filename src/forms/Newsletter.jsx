import { useState } from 'react';
import newsTokken from '../services/token/newsletter-token';

function Newsletter() {
    const [showComponent, setShowComponent] = useState(true);

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await sendNewsLetter();
            newsTokken();
        } catch (err) {
            console.error(err);
        }
    }

    const handleHideButton = () => {
        console.log("Hide")

        setShowComponent(false);
    };
    
    if (!showComponent) {
        return null;
    }


    return (
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
                        required={!showComponent} 
                    />
                    <input 
                        type="text"
                        name="city"
                    />
                    <button type="submit" className="form-btn">
                        Suscribirse
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Newsletter;