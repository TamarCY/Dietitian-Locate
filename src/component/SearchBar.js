import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Card, Col, Container, Row } from 'react-bootstrap';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state={
                languages:'hebrew',
                expertis:[],
                clinics:[],
                location:'c'
        }
    }

    // changeAndSend = (event) => {
    //     this.changeOption(event);
    //     this.sendAndClose();
    // }

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
         this.props.searchDiet(this.state);
        //  window.location = '/#/res'
       }

    render(){
        return(


       
            <Container className="c-search-bar">
            <Form>
            <Form.Group controlId="formGridExpertis">
                <Form.Label>תחומי עיסוק</Form.Label>
                {['checkbox'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                {/* <Form.Check name="expertis" inline label="סוכרת" type={type} id={`inline-${type}-1`} value="diabetes"  onChange={this.changeAndSend} checked={this.state.expertis.includes("diabetes")} /> */}
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

           

            <Form.Group as={Col} controlId="formGridLanguages">
                    <Form.Label>שפה</Form.Label>
                    <Form.Control value={this.state.languages} onChange={(event)=>
                        {this.setState({languages:event.target.value})}} as="select">
                        <option value="hebrew">עברית</option>
                        <option value="english">אנגלית</option>
                        <option value="russian">רוסית</option>
                        <option value="arabic">ערבית</option>
                        <option value="french">צרפתית</option>
                        <option value="spanish">ספרדית</option>
                        <option value="german">גרמנית</option>

                    </Form.Control>
                    </Form.Group>


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
                        {this.setState({location:event.target.value})}} as="select" defaultValue="מרכז">
                        <option value="c">מרכז</option>
                        <option value="n">צפון</option>
                        <option value="s">דרום</option>
                    </Form.Control>
                    </Form.Group>
                    <br/>
                    <Button variant="primary" type="button" onClick={this.sendAndClose}> 
                        חיפוש
                    </Button>

        </Form>

                
               
            </Container>
        )
    }
        
}

export default SearchBar;

