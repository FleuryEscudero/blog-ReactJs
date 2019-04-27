import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/Post.css'

import Button from 'react-bootstrap/Button'
import MaterialIcon from 'material-icons-react';
import swal from 'sweetalert';



class Post extends Component {

    confirmDelete = () => {

        const { id } = this.props.post;

        swal({
            title: "Estas Seguro?",
            text: "Una vez borrado, no vas a poder recueprar tu post!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                this.props.deletePost(id)
                swal("Poof! Se elimino tu post!", {
                    icon: "success",
              });
            } else {
                
              swal("Uff!! Tu post esta a salvo!", { 
                  icon: "success"
                });
             
            }
          });

          
    }

    render() {
        const { id, title } = this.props.post;

        return (
            <tr>
                <td>{id}</td>
                <td className="td-title">{title}</td>
                <td>
                    <Link to={`/post/${id}`} className="actlink "><MaterialIcon icon="send" size="18px" /></Link>
                    <Button onClick={this.confirmDelete} className="actlink btn-link"><MaterialIcon icon="delete" size="18px" /></Button>
                </td>
            </tr>
        );
    }
}

export default Post;