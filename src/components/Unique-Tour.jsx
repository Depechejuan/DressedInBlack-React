import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getUniqueTour from "../services/get-unique-tour.js";
import getToken from "../services/token/get-token.js";
import deleteUniquePhoto from "../services/delete-unique-photo.js";
import EditTourForm from "../forms/Tour-Edit.jsx";
import ImageModal from './Image-Modal.jsx'; 
const imgHost = import.meta.env.VITE_IMG_HOST;

function UniqueTour() {
    const [tour, setTour] = useState({});
    const {id} = useParams();
    const token = getToken();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImageUrl, setSelectedImageUrl] = useState('');

    useEffect(()=> {
        async function fetchTour() {
            try {
                const data = await getUniqueTour(id)
                setTour(data.data)
            } catch (err) {
                console.error(err);
            }
        }
        fetchTour();
    }, [id]);

    const handleImageClick = (imageUrl) => {
        setSelectedImageUrl(imageUrl);
        setModalIsOpen(true);
    };

    function deletePhoto(type, idType, image, token) {
        deleteUniquePhoto("tour", type, image, token)
    }

    function getVideoId(url) {
        const parts = url.split("v=");
        if (parts.length === 2) {
            return parts[1];
        } else {
            return null;
        }
    }

    return (
        <section className="tour-container">
            <article className="unique-tour-detail">
                <h3 className="tour-name-title">{tour.tourName}</h3>
            <h4 className="tour-city-title">
                {new Date(tour.tourDate).toLocaleDateString(
                    "es-ES",
                    {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                    }
                )} {tour.venue}, {tour.city}, ({tour.country})
            </h4>
            <section className="date-details">
            <span>
                Setlist:
                <br />
                {tour.setlist && tour.setlist.split("\n").map((line) => (
                    <p key={line.id}>{line}</p>
                ))}
            </span>
            <div className="image-container">
                {tour.imageURL && tour.imageURL.some((image) => image !== null) ? (
                    tour.imageURL.map((image) =>
                        image !== null ? (
                            <>
                                <img
                                    key={image.id}
                                    src={`${imgHost}${image}`}
                                    alt={`Dressed In Black - TRIBUTO a Depeche Mode de España`}
                                    className="every-post-image"
                                    onClick={() => handleImageClick(`${imgHost}${image}`)}
                                />
                                {token && (
                                    <button
                                        className="delete-photo-button"
                                        onClick={() => deletePhoto("tour", tour.id, image, token)}
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
                <ImageModal
                    isOpen={modalIsOpen}
                    closeModal={() => setModalIsOpen(false)}
                    imageUrl={selectedImageUrl}
                />
            </div>
            <div className="tour-video">
                {tour.videoURL && tour.videoURL.length > 0 ? (
                    tour.videoURL.map((url) => (
                        <iframe
                            key={url.id}
                            className="video-container"
                            src={`https://www.youtube.com/embed/${getVideoId(url)}`}
                            title="Dressed In Black - Tributo a DEPECHE MODE"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    ))
                ) : (
                    <></>
                )}
            </div>
            </section>
            </article>
            <EditTourForm tourData={tour} id={id} />
        </section>
    )
}

export default UniqueTour;