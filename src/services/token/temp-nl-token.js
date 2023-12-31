function tempToken() {
    const now = new Date();

    localStorage.setItem("NEWSLETTER", true);
    localStorage.setItem("DATE", now);
}

export default tempToken;
