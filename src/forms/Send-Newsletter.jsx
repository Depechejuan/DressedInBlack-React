import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import sendMail from "../services/send-mail";

function SendNewsLetter() {
    const [data, setData] = useState({
        subject: '',
        text: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await sendMail(data);
            navigate("/");
            console.log(response);
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <section className="form">
            <form className="send-newsletter" method="post" onSubmit={handleSubmit}>
                <h3>Send Newsletter</h3>
                <input 
                    type="text"
                    name="subject"
                    placeholder="ASUNTO"
                    value={data.subject}
                    onChange={handleChange}
                />
                <textarea 
                    type="text"
                    name="text"
                    placeholder="EMAIL"
                    value={data.text}
                    onChange={handleChange}
                />
                <button type="submit" className="form-btn">Enviar Email</button>
            </form>
        </section>
    );
}

export default SendNewsLetter;