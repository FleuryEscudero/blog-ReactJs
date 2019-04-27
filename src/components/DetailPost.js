import React, { Component } from 'react'


import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import MaterialIcon from 'material-icons-react';


import '../css/DetailPost.css'

class DetailPost extends Component {

    showPost = (props) => {
        if (!props.post) return null;
        const { id, title, body } = this.props.post;

        return (
            <React.Fragment>
                <Card>
                    <Card.Header>Post no. {id} </Card.Header>
                    <Card.Body>
                        <Card.Title className="title">{title}</Card.Title>
                        <Card.Text>
                            {body}
                        </Card.Text>
                        <Link to ={'/'}  className="btn btn-link"><MaterialIcon icon="arrow_back" size="18px" /></Link>
                    </Card.Body>
                </Card>

            </React.Fragment>

        )
    }

    render() {




        return (

            <div className="col-12 col-md-8 container detailPost">
                <div>
                    {this.showPost(this.props)}
                </div>

            </div>


        );
    }
}

export default DetailPost;