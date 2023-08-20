import React, {useState} from "react"

import MyButton from "../UI/my-btn/my-btn"
import MyInput from "../UI/my-input/my-input"

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        // console.log(bodyInputRef.current.value)
        const newPost = {
            ...post, id: Date.now()
        }
        setPost({title: '', body: ''})
        create(newPost)
      }
     

return (
<form>
    <MyInput 
      value={post.title} 
      type='text' 
      placeholder='Название поста' 
      onChange={ e => setPost({...post, title: e.target.value})}
      
    />
    
    <MyInput 
        // ref={bodyInputRef} 
        value={post.body} 
        type='text' 
        placeholder='Описание поста'
        onChange={e => setPost({...post, body: e.target.value})}
      />
    <MyButton onClick={addNewPost} type='submit' > send </MyButton>
  </form>
)
    
}

export default PostForm