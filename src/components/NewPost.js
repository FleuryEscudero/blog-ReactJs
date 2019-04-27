import React, { Component } from 'react';

import '../css/NewPost.css';

import Form from 'react-bootstrap/Form';
import MaterialIcon from 'material-icons-react';
import Button from 'react-bootstrap/Button'


class NewPost extends Component {

    title = React.createRef();
    body = React.createRef();
   
    addPost = (e) => {
        e.preventDefault();

        const post = {
            title : this.title.current.value,
            body : this.body.current.value,
            userId : 1
        }
       
        this.props.addPost(post);

       
        
        
    }

   


    render() {
        return (
            <div className="col-12 col-md-8 container">
                <Form onSubmit={this.addPost}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="form-label">Nuevo Post</Form.Label>
                        <Form.Control type="text" ref={this.title} placeholder="Escribe el titulo" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">

                        <textarea className="textarea"  ref={this.body} placeholder="Contenido... "></textarea>
                    </Form.Group>
                    <Button type ="submit" className="btn btn-light">Enviar  <MaterialIcon icon="send" size="14px" /></Button>
                </Form>
            </div>
        );
    }
}

export default NewPost;