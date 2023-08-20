import './employers-add-form.css';
import { useState } from 'react';

const EmployersAddForm = ({updateData, data}) => {

        const [value, setValue] = useState({
            id: '',
            name: '',
            salary: '',
            increase: 'false',
        }
        
        )
        const addItem = (e) => {
            e.preventDefault()
            const newItem = {...value, id: data.length + 1}
           updateData([...data, newItem])
            setValue({
                id: '',
                name: '',
                salary: '',
            })
            
        }

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form 
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" 
                        value={value.name}
                        onChange={(e) => setValue({...value, name: e.target.value})}
                        name='name'
                       />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        value={value.salary}
                        onChange={(e) => setValue({...value, salary: e.target.value})}
                        name='salary' 
                        />
                    <button type="submit"
                        className="btn btn-outline-light"
                        onClick={addItem}

                    >Добавить</button>
                    </form>
            </div>
        )
            
       
    }
       


export default EmployersAddForm;