const host = import.meta.env.VITE_API_HOST;

async function sendNewsLetter(payload) {
    console.log(payload);

    try {
        const response = await fetch(`${host}/newsletter`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
        const body = await response.json();
        console.log(body);
        if (!response.ok) {
            throw new Error("Something Went Wrong");
        }
        return body;
    } catch (err) {
        console.error(err);
    }
}

export default sendNewsLetter;
