
import { Card, Col } from "react-bootstrap"

const DietCard = function(props) {
    return (
    <Col lg={3} md={6} sm={12}>
        <Card>
        {/* <Card.Img variant="top" src={props.img} alt={props.fname} /> */}
        <Card.Body>
        <Card.Title>{props.fname}+ ' ' +{props.lname}</Card.Title>
        <Card.Text>
                    {props.languages[0]}
        </Card.Text>
        </Card.Body>
    </Card>
  </Col>
  )
}
export default DietCard;


<RecipeCard key={recipe.id} name={recipe.name} img={recipe.img} desc={recipe.desc}/>