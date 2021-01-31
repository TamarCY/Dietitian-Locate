

           


import React from 'react';
import {Navbar} from 'react-bootstrap';
import './AddDietNav.css';


class AddDietNav extends React.Component {
    render(){
        return(
            
                   
                <Navbar expand="lg" variant="light" bg="light">
                    <Navbar.Brand href="/#/edit" className="ms-auto me-5"> הוספת דיאטנ.ית למאגר</Navbar.Brand>
                </Navbar>
                
        )
    }
}
        


export default AddDietNav;
