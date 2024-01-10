const host = import.meta.env.VITE_API_HOST;

async function sendPhoto(type, id, photos, token) {
    try {
        console.log("Sending photos");
        const validPhotos = photos.filter((photo) => photo instanceof File);
        if (validPhotos.length === 0) {
            throw new Error("No se proporcionaron archivos válidos.");
        }

        const form = new FormData();
        validPhotos.forEach((photo) => {
            form.append("photos", photo);
        });
        console.log(form);
        const requestOptions = {
            method: "PUT",
            headers: {
                Authorization: token,
            },
            body: form,
        };
        console.log("hagamos el fetch");
        const response = await fetch(
            `${host}/${type}/${id}/photos`,
            requestOptions
        );
        console.log(response);
        return response;
    } catch (err) {
        console.error(err);
        throw new Error("Error al enviar la foto al post: " + err);
    }
}

export default sendPhoto;
