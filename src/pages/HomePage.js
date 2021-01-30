import React from 'react';
import { Container, Jumbotron, Navbar } from 'react-bootstrap';
import './HomePage.css';


// import MyNav from '../component/MyNav';

import SearchBar from '../component/SearchBar'

class HomePage extends React.Component {
    render(){
        return(
            <div>
                   
                <Navbar expand="lg" variant="light" bg="light">
                    <Navbar.Brand href="/#/edit" className="ms-auto me-5">הוספת פרטי דיאטנ.ית</Navbar.Brand>
                </Navbar>
                <Container>
                {/* <img src="https://image.freepik.com/free-photo/elegant-composition-set-lemons-white-surface_24972-1113.jpg */}

                <img src="https://image.freepik.com/free-vector/net-paper-cotton-shopping-bags-with-grocery-isolated-white_107791-4630.jpg"/> 
                    {/* <img src="https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-delicious-fresh-fruit-and-vegetable-poster-banner-image_190809.jpg"/> */}
                    <div className="fruits">
                    <h1 > חפשו דיאטנים</h1>
                    </div>
                    

                </Container> 
            </div>  
                
        )
    }
        
}

export default HomePage;