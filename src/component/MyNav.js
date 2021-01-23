import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import './MyNav.css';



const MyNav = function(props) {
    const {activeUser, handleLogout} = props;

    const loginEl = ( ! activeUser)  ?  <Nav.Link href="/#/login">Login</Nav.Link>  : null;
    const signupEl = ( ! activeUser) ?  <Nav.Link href="/#/signup">Signup</Nav.Link>  : null;
    const logoutEl = (activeUser) ?  <Nav.Link onClick={handleLogout}>Logout</Nav.Link> : null;
    return (
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/" ><img className="logo-img" 
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhqQzAiqSS8vODDcDKMSKR8NxAodZHXvbhFqg-g7Rohmv6xililUUPW3ZvVxTet19UhuyVZBU&usqp=CAc"/>
  </Navbar.Brand>
  

  <Nav className="ml-auto">
        {loginEl}
        {signupEl}         
    </Nav>
    <Nav> {activeUser ? 'Hello ' + activeUser.fname : ''}</Nav>
    <Nav className="ml-auto">
    {logoutEl}
    </Nav>
</Navbar>
    )
}
export default MyNav;




// class MyNav extends React.Component {
//     constructor(props){
//         super(props);
//         this.state={
//          temp:''
//         }
//     this.handleLogout =  this.handleLogout.bind(this)
//       }
//     handleLogout(){
//         console.log("handleLogout!")
//     }
//     render(){
//         return(
//             <div className="c-nav-bar">
//                 <Nav className="justify-content-end" activeKey="/home">
//                     <Nav.Item>
//                     <Nav.Link href="/#/login">Login</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                     <Nav.Link href="/#/signup">Sign Up</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                     <Nav.Link href="#" onClick={this.handleLogout}>Log Out</Nav.Link>
//                     </Nav.Item>
//                 </Nav>

//             </div>
//         )
//     }
        
// }

// export default MyNav;