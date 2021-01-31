import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Card, Col, Container, Row } from 'react-bootstrap';
import './EditPage.css';

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
                location:'c',
                id:''

            
        }
    }
    changeOption = (event)=>{
    
     if( this.state[event.target.name].includes(event.target.value)){
        this.setState({
          [event.target.name]: this.state[event.target.name].filter((option)=>{
            return option != event.target.value 
          })
        }

        )
     }
     else {
        this.setState({
          [event.target.name]: this.state[event.target.name].concat(event.target.value)})
     }
      
    }

    sendAndClose = () =>{
      this.props.addDiet(this.state);
      window.location = '/'
    }
    render(){
        return(
          <div className="editPage pt-4">
            <Container >
                <Card >
                {/* <Card border="secondary" style={{ width: '40rem' }}> */}
                    <Card.Header >
                    <h5 className="card-title">הוספת דיאטנ.ית</h5></Card.Header>
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
      <Form.Control type="text" value={this.state.imgUrl} 
        onChange={(event)=> this.setState({imgUrl : event.target.value})} />
    </Form.Row>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" value={this.state.email} 
        onChange={(event)=> this.setState({email : event.target.value})}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPhone">
      <Form.Label>טלפון</Form.Label>
      <Form.Control type="text"  value={this.state.phone} 
        onChange={(event)=> this.setState({phone : event.target.value})}/>
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

  {/* <Form.Group controlId="formGridLanguages">
    <Form.Label>שפות</Form.Label>
    {['checkbox'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check inline label="עברית"  type={type} id={`inline-${type}-1`} value="hebrew" name="languages" checked={this.state.languages.includes("hebrew")} onChange={this.changeOption}/>
      <Form.Check inline label="אנגלית" type={type} id={`inline-${type}-2`} value="english" name="languages" checked={this.state.languages.includes("english")} onChange={this.changeLang}/>
      <Form.Check inline label="רוסית" type={type} id={`inline-${type}-3`} value="russian" name="languages" checked={this.state.languages.includes("russian")} onChange={this.changeLang}/>
      <Form.Check inline label="ערבית" type={type} id={`inline-${type}-4`} value="arabic" name="languages" checked={this.state.languages.includes("arabic")} onChange={this.changeLang}/>
      <Form.Check inline label="צרפתית" type={type} id={`inline-${type}-5`} value="french" name="languages" checked={this.state.languages.includes("french")} onChange={this.changeLang}/>
      <Form.Check inline label="ספרדית" type={type} id={`inline-${type}-6`} value="spanish" name="languages" checked={this.state.languages.includes("spanish")} onChange={this.changeLang}/>
      <Form.Check inline label="גרמנית" type={type} id={`inline-${type}-7`} value="german" name="languages" checked={this.state.languages.includes("german")} onChange={this.changeLang}/>      
    </div>
  ))}
  </Form.Group> */}

  <Form.Group controlId="formGridLanguages">
    <Form.Label>שפות</Form.Label>
    {['checkbox'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check inline label="עברית"  type={type} id={`inline-${type}-1`} value="hebrew" name="languages"  onChange={this.changeOption}/>
      <Form.Check inline label="אנגלית" type={type} id={`inline-${type}-2`} value="english" name="languages"  onChange={this.changeOption}/>
      <Form.Check inline label="רוסית" type={type} id={`inline-${type}-3`} value="russian" name="languages"  onChange={this.changeOption}/>
      <Form.Check inline label="ערבית" type={type} id={`inline-${type}-4`} value="arabic" name="languages"  onChange={this.changeOption}/>
      <Form.Check inline label="צרפתית" type={type} id={`inline-${type}-5`} value="french" name="languages"  onChange={this.changeOption}/>
      <Form.Check inline label="ספרדית" type={type} id={`inline-${type}-6`} value="spanish" name="languages"  onChange={this.changeOption}/>
      <Form.Check inline label="גרמנית" type={type} id={`inline-${type}-7`} value="german" name="languages"  onChange={this.changeOption}/>     
    </div>
  ))}
  </Form.Group>

  {/* <Form.Group controlId="formGridExpertis">
    <Form.Label>תחומי עיסוק</Form.Label>
    {['checkbox'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check name="expertis" inline label="סוכרת" type={type} id={`inline-${type}-1`} value="diabetes" checked={this.state.languages.includes("diabetes")} onChange={this.changeOption}/>
      <Form.Check name="expertis" inline label="ירידה במשקל" type={type} id={`inline-${type}-2`} value="weight" checked={this.state.languages.includes("weight")} onChange={this.changeOption}/>
      <Form.Check name="expertis" inline label="ספורט" type={type} id={`inline-${type}-3`} value="sport" checked={this.state.languages.includes("sport")} onChange={this.changeOption}/>
      <Form.Check name="expertis"inline label="בריאטריה" type={type} id={`inline-${type}-4`} value="bariatrics" checked={this.state.languages.includes("bariatrics")} onChange={this.changeOption}/>
      <Form.Check name="expertis" inline label="נפרולוגיה" type={type} id={`inline-${type}-5`} value="nephrology" checked={this.state.languages.includes("nephrology")} onChange={this.changeOption}/>
      <Form.Check name="expertis" inline label="גריאטריה" type={type} id={`inline-${type}-6`} value="geriatrics" checked={this.state.languages.includes("geriatrics")} onChange={this.changeOption}/>
      <Form.Check name="expertis" inline label="אלרגיה" type={type} id={`inline-${type}-7`} value="allergy" checked={this.state.languages.includes("allergy")} onChange={this.changeOption}/>   
      <Form.Check name="expertis" inline label="ילדים" type={type} id={`inline-${type}-4`} value="kids" checked={this.state.languages.includes("kids")} onChange={this.changeOption}/>
      <Form.Check name="expertis" inline label="פגים" type={type} id={`inline-${type}-5`} value="premature" checked={this.state.languages.includes("premature")} onChange={this.changeOption}/>
      <Form.Check name="expertis" inline label="הריון ופוריות" type={type} id={`inline-${type}-6`} value="pregnancy" checked={this.state.languages.includes("pregnancy")} onChange={this.changeOption}/>
      <Form.Check name="expertis" inline label="הנקה" type={type} id={`inline-${type}-7`} value="nursing" checked={this.state.languages.includes("nursing")} onChange={this.changeOption}/> 
      <Form.Check name="expertis" inline label="פסיכיאטריה" type={type} id={`inline-${type}-8`} value="psychiatry" checked={this.state.languages.includes("psychiatry")} onChange={this.changeOption}/>
      <Form.Check name="expertis" inline label="צמחונות- טבעונות" type={type} id={`inline-${type}-9`} value="veg" checked={this.state.languages.includes("veg")} onChange={this.changeOption}/>
      <Form.Check name="expertis" inline label="קידום בריאות" type={type} id={`inline-${type}-10`} value="promotion" checked={this.state.languages.includes("promotion")} onChange={this.changeOption}/>
      <Form.Check name="expertis" inline label="צליאק" type={type} id={`inline-${type}-11`} value="celiac" checked={this.state.languages.includes("celiac")} onChange={this.changeOption}/>
  
 
    </div>
  ))}
  </Form.Group> */}

  <Form.Group controlId="formGridExpertis">
    <Form.Label>תחומי עיסוק</Form.Label>
    {['checkbox'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check name="expertis" inline label="סוכרת" type={type} id={`inline-${type}-1`} value="diabetes"  onChange={this.changeOption}/>
      <Form.Check name="expertis" inline label="ירידה במשקל" type={type} id={`inline-${type}-2`} value="weight"  onChange={this.changeOption}/>
      <Form.Check name="expertis" inline label="ספורט" type={type} id={`inline-${type}-3`} value="sport"  onChange={this.changeOption}/>
      <Form.Check name="expertis"inline label="בריאטריה" type={type} id={`inline-${type}-4`} value="bariatrics"  onChange={this.changeOption}/>
      <Form.Check name="expertis" inline label="נפרולוגיה" type={type} id={`inline-${type}-5`} value="nephrology" onChange={this.changeOption}/>
      <Form.Check name="expertis" inline label="גריאטריה" type={type} id={`inline-${type}-6`} value="geriatrics"  onChange={this.changeOption}/>
      <Form.Check name="expertis" inline label="אלרגיה" type={type} id={`inline-${type}-7`} value="allergy"  onChange={this.changeOption}/>   
      <Form.Check name="expertis" inline label="ילדים" type={type} id={`inline-${type}-4`} value="kids"  onChange={this.changeOption}/>
      <Form.Check name="expertis" inline label="פגים" type={type} id={`inline-${type}-5`} value="premature"  onChange={this.changeOption}/>
      <Form.Check name="expertis" inline label="הריון ופוריות" type={type} id={`inline-${type}-6`} value="pregnancy"  onChange={this.changeOption}/>
      <Form.Check name="expertis" inline label="הנקה" type={type} id={`inline-${type}-7`} value="nursing"  onChange={this.changeOption}/> 
      <Form.Check name="expertis" inline label="פסיכיאטריה" type={type} id={`inline-${type}-8`} value="psychiatry"  onChange={this.changeOption}/>
      <Form.Check name="expertis" inline label="צמחונות- טבעונות" type={type} id={`inline-${type}-9`} value="veg"  onChange={this.changeOption}/>
      <Form.Check name="expertis" inline label="קידום בריאות" type={type} id={`inline-${type}-10`} value="promotion"  onChange={this.changeOption}/>
      <Form.Check name="expertis" inline label="צליאק" type={type} id={`inline-${type}-11`} value="celiac"  onChange={this.changeOption}/>
  
 
    </div>
  ))}
  </Form.Group>

  {/* <Form.Group controlId="formGridClinics">
    <Form.Label>מרפאות</Form.Label>
    {['checkbox'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check inline label="מכבי"  type={type} id={`inline-${type}-1`}  value="mac" name="clinics" checked={this.state.languages.includes("mac")} onChange={this.changeOption}/>
      <Form.Check inline label="כללית" type={type} id={`inline-${type}-2`} value="clal" name="clinics" checked={this.state.languages.includes("clal")} onChange={this.changeOption}/>
      <Form.Check inline label="מאוחדת" type={type} id={`inline-${type}-3`} value="meu" name="clinics" checked={this.state.languages.includes("meu")} onChange={this.changeOption}/>
      <Form.Check inline label="לאומית" type={type} id={`inline-${type}-4`} value="leu" name="clinics" checked={this.state.languages.includes("leu")} onChange={this.changeOption}/>
      <Form.Check inline label="פרטי" type={type} id={`inline-${type}-5`} value="private" name="clinics" checked={this.state.languages.includes("private")} onChange={this.changeOption}/>     
    </div>
  ))}
  </Form.Group> */}

<Form.Group controlId="formGridClinics">
    <Form.Label>מרפאות</Form.Label>
    {['checkbox'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check inline label="מכבי"  type={type} id={`inline-${type}-1`}  value="mac" name="clinics"  onChange={this.changeOption}/>
      <Form.Check inline label="כללית" type={type} id={`inline-${type}-2`} value="clal" name="clinics"  onChange={this.changeOption}/>
      <Form.Check inline label="מאוחדת" type={type} id={`inline-${type}-3`} value="meu" name="clinics"  onChange={this.changeOption}/>
      <Form.Check inline label="לאומית" type={type} id={`inline-${type}-4`} value="leu" name="clinics"  onChange={this.changeOption}/>
      <Form.Check inline label="פרטי" type={type} id={`inline-${type}-5`} value="private" name="clinics"  onChange={this.changeOption}/>     
    </div>
  ))}
  </Form.Group>

    <Form.Group as={Col} controlId="formGridLocation">
      <Form.Label>אזור</Form.Label>
      <Form.Control value={this.state.loctaion} onClick={(event)=>
        {this.setState({location:event.target.value})}} as="select" defaultValue="בחר אזור">
        <option value="c">מרכז</option>
        <option value="n">צפון</option>
        <option value="s">דרום</option>
      </Form.Control>
    </Form.Group>
    <br/>
    <Button variant="primary" type="button" onClick={this.sendAndClose}> 
        שליחה
    </Button>

</Form>
</Card.Body>
</Card>


</Container>
</div>

           
        )
    }
        
}

export default EditPage;