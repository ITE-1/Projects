
import PostItem from "./post"



const PostsList = ({data}) => {


    return (

        <div className="post-list">
            {data.map(data => {
                return <PostItem {...data}/>
            })}
        </div>
    )
}

export default PostsList