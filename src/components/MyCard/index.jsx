import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'



const MyCard = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
        {props.description}
        </Card.Text>
        <Button >{props.btn}</Button>
        </Card.Body>
    </Card>
    )
}

export default MyCard