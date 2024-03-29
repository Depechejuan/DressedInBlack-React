const host = import.meta.env.VITE_API_HOST;

const deleteUniquePhoto = async (type, idType, image, token) => {
    console.log(host);
    console.log(idType);
    console.log(image);
    const url = `${host}/${image}`;
    console.log(url);
    try {
        const response = await fetch(`${url}`, {
            method: "DELETE",
            headers: {
                Authorization: token,
            },
        });

        const body = await response.json();
        if (!response.ok) {
            console.error("ERROR!");
            throw new Error("Something Went Wrong");
        }
        return body;
    } catch (err) {
        console.error(err);
    }
};

export default deleteUniquePhoto;
