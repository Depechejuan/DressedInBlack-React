

function ImageModal({ isOpen, closeModal, imageUrl }) {
    if (!isOpen) return null;

    return (
        <article className="modal" onClick={closeModal}>
            <figure className="modal-content">
                <img
                    src={imageUrl}
                    alt="Dressed In Black - Full Size"
                    onClick={closeModal}
                />
            </figure>
        </article>
    );
}

export default ImageModal;  