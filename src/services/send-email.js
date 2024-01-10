const host = import.meta.env.VITE_API_HOST;

async function sendMail(fullMail) {
    const requestInit = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fullMail),
    };

    try {
        const response = await fetch(`${host}/dibcontact`, requestInit);

        if (!response.ok) {
            throw new Error("Something Went Wrong");
        }

        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
    }
}

export default sendMail;
