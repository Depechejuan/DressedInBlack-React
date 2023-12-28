const host = import.meta.env.VITE_API_HOST;

async function getUser() {
    console.log(host);
    const result = await fetch(`${host}/users`);
    const users = await result.json();
    return users;
}

export default getUser;
