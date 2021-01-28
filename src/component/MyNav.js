import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import './MyNav.css';



const MyNav = function(props) {
    const {activeUser, handleLogout} = props;

    const loginEl = ( ! activeUser)  ?  <Nav.Link href="/#/login">התחברות</Nav.Link>  : null;
    const signupEl = ( ! activeUser) ?  <Nav.Link href="/#/signup">הרשמה</Nav.Link>  : null;
    const logoutEl = (activeUser) ?  <Nav.Link className="ms-auto me-4"  onClick={handleLogout}>החלפת משתמש.ת</Nav.Link> : null;
    return (
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/" ><img className=" m-1 logo-img" 
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhqQzAiqSS8vODDcDKMSKR8NxAodZHXvbhFqg-g7Rohmv6xililUUPW3ZvVxTet19UhuyVZBU&usqp=CAc"/>
  {activeUser ?  ' '+ activeUser.fname : ''}
  </Navbar.Brand>
  

  <Nav className="w-100">
      
        {loginEl}
        {signupEl}
        {logoutEl}
        
        
             
    </Nav>
    
    
</Navbar>
    )
}
export default MyNav;




