import { Modal } from 'react-bootstrap'

export default function ModalCase({ open, setIsOpen, playerData }) {
    return (
        <Modal show={open} onHide={() => setIsOpen(false)} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title>{playerData.name} highlights</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <iframe
                    className="video-frame"
                    src={playerData.clip}
                    title={`${playerData.name} highlight video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </Modal.Body>
        </Modal>
    )
}
