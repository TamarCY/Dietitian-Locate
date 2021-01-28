import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Card, Col, Container, Row } from 'react-bootstrap';


//where to store the diet data????
class EditPage extends React.Component {
    constructor(props){
        super(props);
        this.state={

                fname:'',
                lname:'',
                imgUrl:'',
                email:'',
                phone:'',
                languages:[],
                expertis:[],
                clinics:[],
                location:''



            
        }
    }
    render(){
        return(
            <Container>
                <Card >
                {/* <Card border="secondary" style={{ width: '40rem' }}> */}
                    <Card.Header >
                    <h5 className="card-title">פרטי דיאטנ.ית</h5></Card.Header>
                    <Card.Body>

            <Form >

    <Row>
        <Col>
        <Form.Label>שם פרטי</Form.Label>
        <Form.Control placeholder="ְשם פרטי" value={this.state.fname} 
        onChange={(event)=> this.setState({fname : event.target.value})} />
        </Col>
        <Col>
        <Form.Label>שם משפחה</Form.Label>
        <Form.Control placeholder="שם משפחה" value={this.state.lname} 
        onChange={(event)=> this.setState({lname : event.target.value})}/>
        </Col>
    </Row>


    {/* <Form.Row>
        <Form.Group as={Col} controlId="formGridFName">
        <Form.Label>שם פרטי</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridLName">
        <Form.Label>שם משפחה</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
    </Form.Row> */}
    
    <Form.Row>
      <Form.Label>תמונה</Form.Label>
      <Form.Control type="text" />
    </Form.Row>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPhone">
      <Form.Label>טלפון</Form.Label>
      <Form.Control type="text" placeholder="ספרות בלבד"/>
    </Form.Group>
  </Form.Row>
  
  {/* <Row>
        <Col>
        <Form.Label>Email</Form.Label>
        <Form.Control placeholder="" />
        </Col>
        <Col>
        <Form.Label>טלפון</Form.Label>
        <Form.Control placeholder="ספרות בלבד" />
        </Col>
    </Row> */}

  <Form.Group controlId="formGridLanguages">
    <Form.Label>שפות</Form.Label>
    {['checkbox'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check inline label="עברית"  type={type} id={`inline-${type}-1`} value="hebrew"/>
      <Form.Check inline label="אנגלית" type={type} id={`inline-${type}-2`} value="english"/>
      <Form.Check inline label="רוסית" type={type} id={`inline-${type}-3`} value="russian"/>
      <Form.Check inline label="ערבית" type={type} id={`inline-${type}-4`} value="arabic"/>
      <Form.Check inline label="צרפתית" type={type} id={`inline-${type}-5`} value="french"/>
      <Form.Check inline label="ספרדית" type={type} id={`inline-${type}-6`} value="spanish"/>
      <Form.Check inline label="גרמנית" type={type} id={`inline-${type}-7`} value="german"/>      
    </div>
  ))}
  </Form.Group>

  <Form.Group controlId="formGridExpertis">
    <Form.Label>תחומי עיסוק</Form.Label>
    {['checkbox'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check name="expertis" inline label="סוכרת" type={type} id={`inline-${type}-1`} value="diabetes" onChange={console.log("changed")}/>
      <Form.Check name="expertis" inline label="ירידה במשקל" type={type} id={`inline-${type}-2`} value="weight"/>
      <Form.Check name="expertis" inline label="ספורט" type={type} id={`inline-${type}-3`} value="sport"/>
      <Form.Check name="expertis"inline label="בריאטריה" type={type} id={`inline-${type}-4`} value="bariatrics"/>
      <Form.Check name="expertis" inline label="נפרולוגיה" type={type} id={`inline-${type}-5`} value="nephrology"/>
      <Form.Check name="expertis" inline label="גריאטריה" type={type} id={`inline-${type}-6`} value="geriatrics"/>
      <Form.Check name="expertis" inline label="אלרגיה" type={type} id={`inline-${type}-7`} value="allergy"/>   
      <Form.Check name="expertis" inline label="ילדים" type={type} id={`inline-${type}-4`} value="kids"/>
      <Form.Check name="expertis" inline label="פגים" type={type} id={`inline-${type}-5`} value="premature"/>
      <Form.Check name="expertis" inline label="הריון ופוריות" type={type} id={`inline-${type}-6`} value="pregnancy"/>
      <Form.Check name="expertis" inline label="הנקה" type={type} id={`inline-${type}-7`} value="nursing"/> 
      <Form.Check name="expertis" inline label="פסיכיאטריה" type={type} id={`inline-${type}-8`} value="psychiatry"/>
      <Form.Check name="expertis" inline label="צמחונות- טבעונות" type={type} id={`inline-${type}-9`} value="veg"/>
      <Form.Check name="expertis" inline label="קידום בריאות" type={type} id={`inline-${type}-10`} value="promotion"/>
      <Form.Check name="expertis" inline label="צליאק" type={type} id={`inline-${type}-11`} value="celiac"/>
  
 
    </div>
  ))}
  </Form.Group>

  <Form.Group controlId="formGridClinics">
    <Form.Label>מרפאות</Form.Label>
    {['checkbox'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check inline label="מכבי"  type={type} id={`inline-${type}-1`} />
      <Form.Check inline label="כללית" type={type} id={`inline-${type}-2`} />
      <Form.Check inline label="מאוחדת" type={type} id={`inline-${type}-3`} />
      <Form.Check inline label="לאומית" type={type} id={`inline-${type}-4`} />
      <Form.Check inline label="פרטי" type={type} id={`inline-${type}-5`} />     
    </div>
  ))}
  </Form.Group>

    <Form.Group as={Col} controlId="formGridLocation">
      <Form.Label>אזור</Form.Label>
      <Form.Control value={this.state.loctaion} onClick={(event)=>
        {this.setState({loction:event.target.value})}} as="select" defaultValue="בחר אזור">
        <option value="n">צפון</option>
        <option value="c">מרכז</option>
        <option value="s">דרום</option>
      </Form.Control>
    </Form.Group>
    <br/>
    <Button variant="primary" type="button">
        שלח.י
    </Button>

</Form>
</Card.Body>
</Card>


</Container>

            // <div className="edit-page">
            //     <Form>
            //     <Form.Group controlId="formBasicEmail">
            //         <Form.Label>Email address</Form.Label>
            //         <Form.Control type="email" placeholder="Enter email" />
            //         <Form.Text className="text-muted">
            //         We'll never share your email with anyone else.
            //         </Form.Text>
            //     </Form.Group>

            //     <Form.Group controlId="formBasicPassword">
            //         <Form.Label>Password</Form.Label>
            //         <Form.Control type="password" placeholder="Password" />
            //     </Form.Group>
            //     <Form.Group controlId="formBasicCheckbox">
            //         <Form.Check type="checkbox" label="Check me out" />
            //     </Form.Group>
            //     <Button variant="primary" type="submit">
            //         Submit
            //     </Button>
            //     </Form>
            //     <h2>I am  EditPage</h2>
            // </div>
        )
    }
        
}

export default EditPage;