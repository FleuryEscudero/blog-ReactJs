import React, { Component } from 'react'
import Post from './Post'

import '../css/Blog.css'

import Table from 'react-bootstrap/Table'



class Blog extends Component {

    showPost = () => {

        const posts = this.props.posts

        if (posts.length === 0) return null;

        return (
            <React.Fragment>

                {Object.keys(posts).map(post => (
                    <Post
                        key={post}
                        post={this.props.posts[post]}
                        deletePost={this.props.deletePost}
                    />
                ))}

            </React.Fragment>
        )



    }

    render() {
        return (

            <div className=" col-12 col-md-8 container">
                <Table responsive className="tableadm">
                    <thead className="tr-header">
                        <tr >
                            <th scope="col">ID</th>
                            <th scope="col">Titulo</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.showPost()}

                    </tbody>
                </Table>

            </div>

        );
    }
}

export default Blog;