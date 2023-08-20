
import './AppItem.css'
const AppItem = ({data, head, body, id, increase, changeIncrease, remove}) => {

   
    return (
        <div className="app-item">

            <h1>{head}, {body}</h1>
            <p>id: {id}</p>
            <h2>На повышение - {increase ? 'True' : 'False'} </h2>
            <button onClick={() => changeIncrease(id)} className='btn'> increase </button>
            <button onClick={() => remove(data)} className='btn'>delete</button> 
         
        </div>
    )
}

export default AppItem