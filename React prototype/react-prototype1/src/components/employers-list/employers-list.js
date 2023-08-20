
import EmployersListItem from "../employers-list-item/employers-list-item";
import './employers-list.css';

const EmployersList = ({ data, updateData }) => {

    const handleDelete = (id) => {
        const newData = data.filter((item) => item.id !==id)
        updateData(newData)
    }

    

    return (
            <ul className="app-list list-group">
                 {data.map((data, index) => {
                    return  <EmployersListItem key={index + 1} data={data} onDelete={handleDelete} />
                    }
                 )
                }
            </ul> 
          
        )
        }
    
                    

export default EmployersList;