import React from 'react'
import {Card, Container, CardDeck} from 'react-bootstrap'
import diet from '../data/diet.json'
import './ResPage.css'

class ResPage extends React.Component {
    constructor(props){
        super(props);
    
    this.state={
        dietCards:'' ,
    }
}

    
    render(){
        return(
            <Container className="res-page">
               {/* <p>{this.props.result[0].languages}</p> */}
              
                                        <h2>I am  ResPage</h2>
            </Container>
        )
    }
        
}

export default ResPage;