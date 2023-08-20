import MyButton from '../UI/my-btn/my-btn'
import './post-item.css'

const PostItem = ({post, number, remove}) => {

    return (
        <div className="post"> 
        <div className="post-item">
    
        <h1><span>{number}.</span>{post.title}</h1>
        <p>{post.body}</p>
    
        </div>
        <div className="post-btn">

          <button onClick={() => remove(post)}> Delete </button>

        </div>
           
      
    </div>
    )
}

export default PostItem