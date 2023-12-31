import './employers-list-item.css';
import { useState } from 'react';

const EmployersListItem = (props) => {
   
    return (
        <li className={`list-group-item  d-flex justify-content-between`}>
            <span className="list-group-item-label"></span>
            <input type="text" className="list-group-item-input" />
            <div className="d-flex justify-content-center align-items-center">
                <button type="button"
                    className="btn-cookie btn-sm"
                    >
                        <i className="fas fa-cookie"></i>
                    
                </button>

                <button type="button"
                    className="btn-trash btn-sm"
                >
                        <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployersListItem;