import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getAllPost from "../services/get-all-posts.js";
import Loading from "./Loading.jsx";
import Dates from "./Dates.jsx";


function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const data = await getAllPost();
                setPosts(data);
            } catch (err) {
                console.error("Error Fetching Posts", err);
            }
        }
        fetchPosts();
    }, []);
    
    if (posts.length === 0) {
        return <Loading />
    }

    function getVideoId(url) {
        if (url && typeof url === 'string') {
            const parts = url.split("v=");
            if (parts.length === 2) {
                return parts[1];
            }
        }
        return null;
    }

    return(
        <section className="post-list">
            {posts.data.map(post => (
                <article className="preview-post" key={post.id}>
                    <Link className="link-to-post" to={`/posts/${post.id}`}>
                        <h3 className="post-title">{post.title}</h3>
                    </Link>
                    <Dates date={post.createdAt} />
                    <p className="post-description">{post.description}</p>
                    <div className="image-container">
                        {post.imageURL.some((image) => image !== null) ? (
                        post.imageURL.map((image) =>
                            image !== null ? (
                                <img
                                    key={image.id}
                                    src={`https://drive.google.com/uc?export=view&id=${image}`}
                                    alt={`Dressed In Black - TRIBUTO a Depeche Mode de España`}
                                    className="every-post-image"
                                />
                            ) : null
                        )
                        ) : (
                        <></>
                        )}
                    </div>

                    <div className="tour-video">
                        {post.videoURL && post.videoURL.length > 0 ? (
                            post.videoURL.map((url) => (
                                url !== null ? (
                                    <iframe
                                        key={url.id}
                                        className="video-container"
                                        src={`https://www.youtube.com/embed/${getVideoId(url)}`}
                                        title="Dressed In Black - Tributo a DEPECHE MODE"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    />
                                ) : null
                            ))
                        ) : (
                            <></>
                        )}
                    </div>
                </article>
            ))}
        </section>
    );
}

export default PostList;