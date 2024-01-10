const host = import.meta.env.VITE_API_HOST;

const deleteUniquePhoto = async (type, idType, image, token) => {
    const url = `${host}/${type}/${idType}/${image}`;

    try {
        const response = await fetch(`${url}`, {
            method: "DELETE",
            headers: {
                Authorization: token,
            },
        });

        const body = await response.json();
        if (!response.ok) {
            throw new Error("Something Went Wrong");
        }
        return body;
    } catch (err) {
        console.error(err);
    }
};

export default deleteUniquePhoto;
