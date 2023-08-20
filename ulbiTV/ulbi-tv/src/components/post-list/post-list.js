import PostItem from "../post-item/post-item"


const PostList = ({post, remove}) => {


    return( 
        <div className="post-list">
            <h1 style={{border: '2px solid black'}}>Список постов</h1>
            {post.map((item, index) => <PostItem remove={remove} number={index + 1} post={item} key={item.id} />)}

        </div>
    )
}

export default PostList