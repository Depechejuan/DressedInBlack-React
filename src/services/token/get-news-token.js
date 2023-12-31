function isExpired(dateString, days) {
    const storedDate = new Date(dateString);
    const currentDate = new Date();
    const difference = currentDate - storedDate;
    const differenceInDays = difference / (1000 * 60 * 60 * 24);
    return differenceInDays > days;
}

function getNewsToken() {
    const news = localStorage.getItem("NEWSLETTER");
    const date = localStorage.getItem("DATE");
    console.log(news);
    console.log(date);
    if (date && isExpired(date, 5)) {
        console.log("no cumpleel if");
        localStorage.removeItem("NEWSLETTER");
        localStorage.removeItem("DATE");
        return null;
    }
    return news;
}

export default getNewsToken;
