const host = import.meta.env.VITE_API_HOST;

async function getUser() {
    console.log(host + "/users");
    const result = await fetch(`${host}/users`);
    const users = await result.json();
    console.log(users);
    return users;
}

export default getUser;
