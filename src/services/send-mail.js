import getToken from "./token/get-token";
const host = import.meta.env.VITE_API_HOST;

async function sendMail(payload) {
    const token = getToken();
    try {
        const response = await fetch(`${host}/send-email`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
            body: JSON.stringify(payload),
        });

        const body = await response.json();
        if (!response.ok) {
            throw new Error("Something Went Wrong");
        }
        return body;
    } catch (err) {
        console.error(err);
    }
}

export default sendMail;
