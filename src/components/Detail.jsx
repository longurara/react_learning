import { useState } from 'react'
import { useParams } from 'react-router'
import { Card, Container } from 'react-bootstrap'
import { Link } from 'react-router'
import { PlayersData } from '../shared/PlayersData'
import ModalCase from './ModalCase.jsx'
import PlayerImage from './PlayerImage.jsx'

export default function Detail() {
  const { id } = useParams()
  const player = PlayersData.find((item) => String(item.id) === id)
  const [isOpen, setIsOpen] = useState(false)

  if (!player) {
    return (
      <Container className="py-5">
        <h1>Player not found</h1>
        <Link to="/">Back to players</Link>
      </Container>
    )
  }

  return (
    <Container className="py-4">
      <Card className="detail-card detail-profile shadow-sm mx-auto">
        <div className="detail-hero">
          <PlayerImage src={`/${player.img}`} alt={player.name} className="detail-image" />
          <div className="detail-name">{player.name}</div>
          <button type="button" className="video-button" onClick={() => setIsOpen(true)} aria-label={`Watch ${player.name} highlight`}>
            ▶
          </button>
        </div>
        <Card.Body className="detail-info">
          <Card.Subtitle>{player.club}</Card.Subtitle>
          <p className="detail-price">Market value: €{player.cost.toLocaleString('en-US')}</p>
          <Card.Text>{player.info}</Card.Text>
          <Link to="/" className="btn btn-light">Back to players</Link>
        </Card.Body>
      </Card>
      {isOpen && <ModalCase open={isOpen} setIsOpen={setIsOpen} playerData={player} />}
    </Container>
  )
}
