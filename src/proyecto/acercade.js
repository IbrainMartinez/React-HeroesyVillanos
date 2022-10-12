import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import TablaUsuario from './heroes/TablaUsuario'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

const Acerca = () => {
    return (
        <>
    <Container className="DivimagenesAcerca">
    <Card className="cuadro" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="c.jpeg" />
      <Card.Body>
        <Card.Title>Christopher Mora</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
      <ListGroup.Item><b>Clasificacion:</b> Heroe</ListGroup.Item>
        <ListGroup.Item><b>Edad:</b> 20</ListGroup.Item>
        <ListGroup.Item><b>Poder:</b> Invisibilidad</ListGroup.Item>
        <ListGroup.Item><b>Heroe favorito:</b> IronMan</ListGroup.Item>
        <ListGroup.Item><b>Villano favorito:</b> Magneto</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="https://github.com/ChristopherMora">Link GitHub</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    
    
  <Card className="cuadro" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="i.jpeg" />
      <Card.Body>
        <Card.Title>Ibrain Martinez</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><b>Clasificacion:</b> Antiheroe</ListGroup.Item>
        <ListGroup.Item><b>Edad:</b> 20</ListGroup.Item>
        <ListGroup.Item><b>Poder:</b> Volar</ListGroup.Item>
        <ListGroup.Item><b>Heroe favorito:</b> Flash</ListGroup.Item>
        <ListGroup.Item><b>Villano favorito:</b> Volar</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="https://github.com/IbrainMartinez">Link GitHub</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </Container>
    </>
    )
    
    
}

export default Acerca;