import React from 'react';

//Estilos
import '../css/Navigation.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import MaterialIcon from 'material-icons-react';
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (

        <Navbar className="nav" variant="light">
            <Nav className="mr-auto">
                <Link to={'/'} ><MaterialIcon icon="home" size="large" /></Link>
                <Link to={'/newPost'}><MaterialIcon icon="add_circle_outline" size="large" /></Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
            </Form>
        </Navbar>


    );
}

export default Navigation;