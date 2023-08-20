import React, {useState} from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';
import Train from '../AT/train';

const App = () => {
   
    const [data, setData] = useState( [
        {name: "John.S", salary: "1000", id: 1, increase: false},
        {name: "Mikle.J", salary: "1350", id: 2, increase: true},
        {name: "Lucy.K", salary: "1500", id: 3, increase: false},
]) 
   

    const updateData = (newData) => {

        setData(newData)

    }
    
    const changeIncrease = (post) => {


        
    }


    return (
        <div className="app">
        <AppInfo data={data} />

        <div className='search-panel'>
            <SearchPanel />
            <AppFilter />

        </div>
        <EmployersList 
        data={data} updateData={updateData}
        />
        <EmployersAddForm  data={data} updateData={updateData}/>

        <div className='train'>
            <Train />
        </div>
    </div>
   

    )
    }
    
export default App