
import React from 'react'
import {Button, Container, Form } from 'react-bootstrap';
import users from '../data/users.json'

class LogInPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            pwd:''
        }
    }
    //i can change to .find instes loop
    validateLogin = () => {
        for( let i = 0; i< users.length; i++) {
            if( users[i].pwd == this.state.pwd && users[i].email == this.state.email) {
                // this.props.handleLogin(users[i])
                window.location = '/'
                return;
        }
   
  
        alert('user not found');
        }
    }
    render(){
        return(

            <div className="log-in-page">
                
                <Container>
                    
                <Form>
                <h5>התחברות</h5>
                <Form.Group controlId="formBasicEmail">
                <Form.Label>דואר אלקטרוני</Form.Label>
                <Form.Control type="email" 
                onChange={(event) => {this.setState({email: event.target.value})}} 
                placeholder="Enter email" value={this.state.email} />
                </Form.Group>
                
                <Form.Group controlId="formBasicPassword">
                <Form.Label>סיסמה</Form.Label>
                <Form.Control type="password"
                 onChange={(event) => {this.setState({pwd: event.target.value})}} 
                 placeholder="Password"  value={this.state.pwd}/>
                </Form.Group>
                <br/>
                <Button onClick={this.validateLogin}  type="button">
                  
                התחברות
                </Button>
                
            </Form> 
            <br/>
            <a href="/#/signup">הרשמה</a>
            </Container>
            
            </div>
        )
    }
        
}

export default LogInPage;