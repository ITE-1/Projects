import './employers-list-item.css';
import { useState } from 'react';

const EmployersListItem = ({data, onDelete}) => {
   const [increase, setIncrease] = useState(false)
   const [select, setSelect] = useState(data.increase)
    console.log(select)
    const handleDelete = () => {
        onDelete(data.id)
    }
    const onIncrease = () => {
       setSelect((liked) => !liked)
       
    }
    
     return (
        <li className={`list-group-item ${increase ? 'increase' : '' } d-flex justify-content-between ${select ? 'like' : ''}`}>
            <span className="list-group-item-label" onClick={onIncrease}>{data.id}. {data.name}</span>
            <input 
                type="text" 
                className="list-group-item-input" 
                placeholder={data.salary + '$'}
                
                />
            <div className="d-flex justify-content-center align-items-center">
                <button type="button"
                    className="btn-cookie btn-sm"
                    onClick={() => {
                        setIncrease((previousClicked) => !previousClicked)
                    }}
                    >
                        <i className="fas fa-cookie"></i>
                    
                </button>

                <button type="button"
                    className="btn-trash btn-sm"
                    onClick={handleDelete}
                >
                        <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployersListItem;