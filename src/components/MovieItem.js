import { Card, Button } from "react-bootstrap";

const MovieItem = ({img, name, boxCount}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        </Card.Text>
        <Button variant="primary">{boxCount}</Button>
      </Card.Body>
    </Card>
  );
};

export default MovieItem;
