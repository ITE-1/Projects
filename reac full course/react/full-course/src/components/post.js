

const PostItem = ({id, name, surname, email, adress}) => {

    return (
        <div>
            <h1>{id}</h1>
            <h2>{name}, {surname}</h2>
            <p>{email}</p>
            <p>{adress}</p>
        </div>
    )
}


export default PostItem