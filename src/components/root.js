import React from 'react'
import {connect} from 'react-redux'
import Layout from './layout'
import PostAdmin from './postAdmins'
import Post from './post'

import {
    createPost as createPostAction,
    getPosts as getPostsAction,
    createComment as createCommentAction,
    getComments as getCommentsAction
} from '../redux/actions'

class Root extends React.Component{
    state = {}

    componentDidMount(){
       //this.props.action1(999)
       //api.comments.create({author:'1gerardo',content:'lorem'})
       const {getComments,getPosts} = this.props
       getComments([
        {
          "id": 1,
          "postId":123,
          "author": "leo",
          "content":"que tal"
        }
      ])
       getPosts([
        {
          "id":123,
          "content":"hola"
        }
      ])
    }

    render(){
        const {
            comments,
            posts,
            createComment,
            createPost
        } = this.props
        return (
            <Layout>
                <PostAdmin />
                {posts.map(post => (
                    <Post
                        key={post.id}
                        comments={comments.filter(comment => comment.postId === post.id)}
                        content={post.content}
                        imageUrl={post.imageUrl}
                        createComment={createComment}
                        postId={post.id}
                        author="guest"
                    />
                ))}
            </Layout>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        comments:state.comments,
        posts: state.posts
    }
}
/* mapDispatchToProps accepta un objeto de acciones el cual es inyectado en las Props */
const mapDispatchToProps = {
    createPost: createPostAction,
    getPosts: getPostsAction,
    createComment: createCommentAction,
    getComments: getCommentsAction
}
/* const mapDispatchToProps = dispatch => {
    action1: dispatch(action1),
    action2: dispatch(action2),
} */

export default connect(mapStateToProps,mapDispatchToProps)(Root)