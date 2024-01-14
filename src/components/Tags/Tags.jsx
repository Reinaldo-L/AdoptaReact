import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Tags = (props) => {
    return (
        <Card>
            <Button badge-danger>{props.btn}</Button>
        </Card>
        )
}