import React from 'react'
import {Card, Container, CardDeck, Table} from 'react-bootstrap'
import diet from '../data/diet.json'
import './ResPage.css'

class ResPage extends React.Component {
    constructor(props){
        super(props);
    
    this.state={
        dietCards:'' ,
    }
}

    // displyClinics(dietObj){
    //     for (let i=0; i<this.props; i++){

    // }
    
    render(){
        const dietTableRows = [];
        console.log(this.props.results);
        
        for (let i=0; i<this.props.results.length; i++){
            const rowContent = <tr >
                <td><img className="img-fluid w-50" src={this.props.results[i].imgUrl}/></td>
                <td>{this.props.results[i].fname}</td>
                <td>{this.props.results[i].lname}</td>
                <td>{this.props.results[i].phone}</td>
                {/* <td><a><i class="far fa-envelope"></i></a>{this.props.results[i].email}</td> */}
                <td><a href={"mailto:"+this.props.results[i].email}><i class="far fa-envelope"></i></a></td>


                {/* <td>{this.props.results[i].clinics}</td> */}          
            </tr>
            dietTableRows.push(rowContent);
        }
        return(
            <Container className="res-page">
                {/* <h1>תוצאות</h1> */}
                <Table striped hover  responsive="md" className="mt-5
                "> 
                 <thead>
                    {/* <tr>
                        <th></th>
                        <th>שם</th>
                        <th>שם משפחה</th>
                        <th>טלפון </th>
                        <th>מייל</th>
                    </tr> */}
            </thead>
            <tbody>
                 {dietTableRows}
            </tbody>
    </Table>
              
                                       

            </Container>
        )
    }
        
}

export default ResPage;