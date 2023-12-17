import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards() {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Rodinný Nákup</Card.Title>
            <Button variant="primary">Zobrazit Nákupní Seznam</Button>
            <br></br><br></br>
            <Button variant="danger" onClick={""}>Smazat</Button>
        </Card.Body>
        </Card>
    );
  }
export default Cards;
  