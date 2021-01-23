import React from 'react'
import { Nav } from 'react-bootstrap';

class MyNav extends React.Component {
    constructor(props){
        super(props);
        this.state={
         temp:''
        }
    this.handleLogout =  this.handleLogout.bind(this)
      }
    handleLogout(){
        console.log("handleLogout!")
    }
    render(){
        return(
            <div className="c-nav-bar">
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                    <Nav.Link href="/#/login">Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href="/#/signup">Sign Up</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href="#" onClick={this.handleLogout}>Log Out</Nav.Link>
                    </Nav.Item>
                </Nav>

            </div>
        )
    }
        
}

export default MyNav;