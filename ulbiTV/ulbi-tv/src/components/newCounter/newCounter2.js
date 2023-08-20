import React, { useState, useEffect } from "react";
import AppCounter from "./newCounterMain/app-counter/appCounter";
import AddForm from "./newCounterMain/app-form-add/AddForm";
import AppList from "./newCounterMain/app-list/AppList";
import SearchForm from "./newCounterMain/search-form/SearchForm";

const NewCounter = () => {
  const [data, setData] = useState([
    { id: 1, head: 'Alex', body: '28 years old', increase: true },
    { id: 2, head: 'Mark', body: '26 years old', increase: false },
    { id: 3, head: 'Leroy', body: '24 years old', increase: true },
  ]);

  const newPerson = (newdata) => {
    setData([...data,  newdata,])
  }
  
  const deletePost = (post) => {
    setData(data.filter( p => p.id !== post.id))
  }

  const changeIncrease = (id) => {
    setData((prevData) => {
      const updateData = prevData.map((item) => {
        if(item.id === id) {
          console.log(item.id, item, item.increase)
          return {...item, increase: !item.increase}
        
        } 
        return item
      })
      return updateData
    })
  
    
  }

  const peopleOnIncrease = data.filter(item => item.increase).length;
  const peopleInList = data.filter(item => item).length
  console.log(peopleInList)

  return (
    <div className="train" style={{ padding: '0px 15px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
     <AppCounter peopleCounter = {peopleOnIncrease} peopleInList = {peopleInList}/>
      <SearchForm />
      <div className="list">
        <AppList data={data} increaseCounter={peopleOnIncrease} add={newPerson} changeIncrease={changeIncrease} remove={deletePost}/>
      </div>
      
      <div className="train-form" style={{ marginTop: '20px' }}>
       <AddForm add={newPerson}/>
      </div>
    </div>
  );
};

export default NewCounter