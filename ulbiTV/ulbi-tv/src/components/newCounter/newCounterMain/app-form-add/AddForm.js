import { useState } from "react"


const AddForm = ({add, data}) => {
    const [post, setPost] = useState( {head: '', body: '' } )
   

    const addNewPerson = (e) => {
        e.preventDefault()
        const newItem = {
           ...post, increase: false, 
        }
        setPost({head: '', body: ''})
        add(newItem)
    }

    return (
        <div>
            <form>
                <input type="text" placeholder="enter your name" onChange={(e => setPost({...post, head: e.target.value}))} value={post.head} />
                <input type="text" placeholder="enter your ages" onChange={(e => setPost({...post, body: e.target.value}) )} value={post.body} />
                <button onClick={addNewPerson} >Add</button>
            </form>
        </div>
    )
}

export default AddForm