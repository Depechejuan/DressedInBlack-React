import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import getUniquePost from "../services/get-unique-post.js";
import getToken from "../services/token/get-token.js";
import deleteUniquePhoto from "../services/delete-unique-photo.js";
import Dates from "./Dates.jsx";
import EditPost from "../forms/Edit-Post.jsx";
import Loading from "./Loading.jsx";

const imgHost = import.meta.env.VITE_IMG_HOST;

function UniquePost() {
    const [post, setPost] = useState({});
    const [isEditPostVisible, setIsEditPostVisible] = useState(false);

    const { id } = useParams();
    const token = getToken();

    useEffect(() => {
        async function fetchPost() {
            try {
                const data = await getUniquePost(id);
                setPost(data);
            } catch (error) {
                console.error("Error fetching post:", error);
            }
        }
        fetchPost();
    }, [id]);

    function deletePhoto(type, idType, image, token) {
        deleteUniquePhoto("post", post.data.id, image, token)
    }

    const handleEditClick = () => {
        setIsEditPostVisible(!isEditPostVisible);
    }
    
    const handleEditPostHide = () => {
        setIsEditPostVisible(false);
    }

    const updatePost = (updatedPost) => {
        setPost(updatedPost);
    };

    function getVideoId(url) {
        if (url && typeof url === 'string') {
            const parts = url.split("v=");
            if (parts.length === 2) {
                return parts[1];
            }
        }
        return null;
    }

    if (!post?.data) {
        return <Loading />;
    }
    
    return(
            <article className="unique-post-detail">
                <h3 className="post-title">{post.data.title}</h3>
                <Dates date={post.data.createdAt} />
                <p className="post-description">{post.data.description}</p>
                <div className="image-container">
                {post.data.imageURL && post.data.imageURL.some((image) => image !== null) ? (
                    post.data.imageURL.map((image) =>
                        image !== null ? (
                            <>
                                <img
                                    key={image.id}
                                    src={`${imgHost}${image}`}
                                    alt={`Dressed In Black - TRIBUTO a Depeche Mode de España`}
                                    className="every-post-image"
                                />
                                {token && (
                                    <button
                                        className="delete-photo-button"
                                        onClick={() => deletePhoto("post", post.data.id, image, token)}
                                    >
                                        X
                                    </button>
                                )}
                                </>
                        ) : null
                    )
                    ) : (
                    <></>
                    )}
                </div>

                <div className="tour-video">
                    {post.data.videoURL && post.data.videoURL.length > 0 ? (
                        post.data.videoURL.map((url) => (
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
                <br />
                {token && <button className="developer-only-btn" onClick={handleEditClick}>Enable Edit</button>}
                <br />
                {isEditPostVisible && (
                <EditPost
                    id={id}
                    data={post.data}
                    onHide={handleEditPostHide}
                    updatePost={updatePost}
                    post={post} // Pasa el estado 'post'
                />
                )}

            </article>
    )
}

export default UniquePost;