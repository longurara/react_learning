import {Container, Row} from 'react-bootstrap'
import { Link } from 'react-router'

export default function homePAge() {
  return (
   <>
   <p>Welcome to the Home Page</p>
   <Link to="/list">List of Players</Link>
   </>
  )
}
