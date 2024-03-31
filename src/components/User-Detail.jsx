import { useEffect, useState } from "react";
import getUser from "../services/get-user.js";
import Loading from "./Loading.jsx";
import Divider from "./Divider.jsx";
import Escri from "../assets/band/escri.jpg"
import Javi from "../assets/band/javi.jpg"
import Manu from "../assets/band/manu.jpg"
import Luis from "../assets/band/luis.jpg"
import Juan from "../assets/band/juan.jpg"

function UserDetail() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        async function fetchUser() {
            try {
                const data = await getUser();
                setUser(data);
            } catch (err) {
                console.error(err);
            }
        }
        fetchUser();
    }, [])


    if (user === null) {
        return <Loading />
    }

    return(
        <>
        {user.data.map(u => (
            <article className="users-about" key={user.id}>
            <article className={`user-${u.userName} user-article`} key={u.id}>
                <h4 className="user-name">
                    {u.realName}
                </h4>
                <figure className={`figure-${u.userName} figure-user`}>
                <img
                    className={`user-photo-${u.userName} user-img`}
                    src={u.avatarURL.endsWith("escri.jpg") ? `${Escri}` :
                        u.avatarURL.endsWith("juan.jpg") ? `${Juan}` :
                        u.avatarURL.endsWith("javi.jpg") ? `${Javi}` :
                        u.avatarURL.endsWith("luis.jpg") ? `${Luis}` :
                        u.avatarURL.endsWith("manu.jpg") ? `${Manu}` : null}
                    alt={u.realName}
                />
                    <p className={`user-city-age city-${u.userName}`}>{u.city}</p>
                </figure>
                <section className={`user-info-${u.userName} user-section`}>
                    <p className={`user-instruments instruments-${u.userName}`}>
                        {u.instruments.split(',').join(', ')}
                    </p>
                    {u.biography.split('\n').map((line) => (
                        <p key={line.id} className={`user-bio-${u.userName} bio-user`}>{line}</p>
                    ))                
                    } 
                    <p className={`user-fav-${u.userName} fav-user`}>Disco Favorito: {u.favAlbum} / Canción Favorita: {u.favSong}</p>
                </section>
            </article>
            <Divider />
            </article>
        ))}
        </>

    )
}
export default UserDetail;