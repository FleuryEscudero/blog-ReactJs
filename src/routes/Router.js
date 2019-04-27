
//Libraries
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

//components
import Header from '../components/Header';
import Blog from '../components/Blog';
import Navigation from '../components/Navigation';
import DetailPost from '../components/DetailPost';
import NewPost from '../components/NewPost';

import { swal } from 'sweetalert';


class Router extends Component {

    state = {
        posts: []
    }

    addPost = (newPost) => {

        const url = "https://jsonplaceholder.typicode.com/posts"

        axios.post(url, newPost)
            .then(response => {
                                let post = response.data
                                
                                const posts = [...this.state.posts, post]
                                
                                this.setState({
                                    posts: posts
                                }) 
               
            })
    }



    getPosts = () => {
        const url = "https://jsonplaceholder.typicode.com/posts"

        axios.get(url)
            .then(response => {
                this.setState({
                    posts: response.data
                })
            })
    }
    deletePost = (id) => {


        const url = `https://jsonplaceholder.typicode.com/posts/${id}`

        axios.delete(url)
            .then(response => {
                if (response.status === 200) {
                    const posts = [...this.state.posts];

                    let result = posts.filter(post => (
                        post.id !== id
                    ))
                    this.setState({
                        posts: result
                    })
                }

            })
    }


    componentDidMount() {
        this.getPosts();
    }

    render() {
        return (
            <BrowserRouter>
                <Navigation />
                <Header />
                <Switch>
                    <Route exact path="/NewPost" render={() => {
                        return (
                            <NewPost
                                posts={this.state.posts}
                                addPost={this.addPost}

                            />
                        )
                    }}
                    />
                    <Route exact path="/" render={() => {
                        return (
                            <Blog
                                posts={this.state.posts}
                                deletePost={this.deletePost}
                            />
                        )
                    }}
                    />
                    <Route exact path="/post/:postId" render={(props) => {
                        let postId = props.location.pathname.replace("/post/", '');

                        const posts = this.state.posts


                        let filter;
                        filter = posts.filter(post => (
                            post.id === Number(postId)
                        ));
                        return (
                            <DetailPost
                                post={filter[0]}
                            />

                        )
                    }}
                    />

                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;
