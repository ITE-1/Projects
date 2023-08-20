import React from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';
import Train from '../AT/train';

const App = () => {

    const data = [
            {name: "John.S", salary: "1000", id: 1},
            {name: "Mikle.J", salary: "1350", id: 2},
            {name: "Lucy.K", salary: "1500", id: 3},
    ]


   const deleteItem = (id) => {
        
    }

    const addPerson = () => {}

    return (
        <div className="app">
        <AppInfo/>

        <div className='search-panel'>
            <SearchPanel />
            <AppFilter />

        </div>
        <EmployersList 
        data={data}
        />
        <EmployersAddForm />

        <div className='train'>
            <Train />
        </div>
    </div>
   

    )
    }
    
export default App