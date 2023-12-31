import { useEffect, useState } from "react";
import getUser from "../services/get-user.js";
import Loading from "./Loading.jsx";
import Divider from "./Divider.jsx";


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
    /*
        get avatarURL = 1O_SDEUqqE0guakDqkRCQ9f-aGxP593dq
        make it look like:
        https://drive.google.com/uc?export=view&id=${u.avatarURL}

        https://drive.google.com/uc?export=view&id=1O_SDEUqqE0guakDqkRCQ9f-aGxP593dq
    */
    return(
        <>
        {user.data.map(u => (
            <div className="users-about" key={user.id}>
            <article className={`user-${u.userName} user-article`} key={u.id}>
                <h4 className="user-name">
                    {u.realName}
                </h4>
                <figure className={`figure-${u.userName} figure-user`}>
                    <img className={`user-photo-${u.userName} user-img`} src={`https://drive.google.com/uc?export=view&id=${u.avatarURL}`} alt={u.realName}></img>
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
            </div>
        ))}
        </>

    )
}
export default UserDetail;