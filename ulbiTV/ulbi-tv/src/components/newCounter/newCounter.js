import React, {useState} from "react"

const NewCounter = () => {

    const [data, setData] = useState([
        {id: 1, head: 'Alex', body: '28 years old', increase: true},
        {id: 2, head: 'Mark', body: '26 years old', increase: false},
        {id: 3, head: 'Leroy', body: '24 years old', increase: true},
    ]
    )

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    //**Form Search */
    const [checked, setChecked] = useState(false)
    const [searchTerm, setSearchTerm] = useState('');
    const newDataCheked = () => {
      const newDataCheked =  data.filter((item => item.increase))
      setData(newDataCheked)
    }
    const changeIncreaseChecked = (e) => {
        setChecked(e.target.checked)
        newDataCheked()
    }
    const handleSearchChange = (e) => {
    setSearchTerm(e.target.value) 
    }

    const fileterdData = data.filter((item) => {
        if(searchTerm && !item.head.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
            return false
        }
        if (checked && !item.increase) {
            return false
        }
        return true

    })
   
    //**End-Form Search */
    const addNewPeroson = (e) => {
        e.preventDefault()
        const NewPerson = {
            id: Date.now(),
            head: name,
            body: age,
            increase: false,
            } 
    setData(prevData => [...prevData, NewPerson])
    }

    const changePersonIncrease = (id) => {
        setData(prevData => {
            const updateData = prevData.map(item => {
                if(item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item
            })
            return updateData
        })
    }
    const peopleOnIncrease = data.filter(item => item.increase).length

    const deletePerson = (id) => {
        setData((prevData => prevData.filter( ((item) => item.id !== id))
        ))
    }

        return (
            <div className="train" style={{padding:'0px 15px' , display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <div>Всего людей в списке: {data.length} </div>
                <div>Количество людей в списке со значением incrase: {peopleOnIncrease}</div>
                <form style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                    <label style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                        <h1>Введите имя для поиска</h1>
                        <input style={{width: '100%', padding: '15px'}} type='search' placeholder="search" value={searchTerm} onChange={handleSearchChange}/>
                    </label>
                    <label>
                        <input type="checkbox" checked={checked} onChange={changeIncreaseChecked}/>
                        показать только повышенных
                    </label>
                    <button style={{marginLeft: '10px'}} onClick={newData}>Поиск</button>
                </form>
                {data.map(item => {
                    return (
                        <div className="train-item" style={{marginTop: '10px', display: 'flex', columnGap: '20px', border: '2px solid black', alignItems: "center"}}>
                            <h1>{item.head}, {item.body}</h1>
                            <p>id:{item.id}</p>
                            <h2>На повышение - {
                                item.increase ? 'Да' : 'Нет'
                            }</h2>
                            <button onClick={() => changePersonIncrease(item.id)}>{item.increase ? 'Понизить' : 'Повысить'}</button>
                            <button onClick={() => deletePerson(item.id)}
                            style={{width: '55px', height: '25px', display: 'flex', justifyContent: 'center', alignItems: "center"}}>delete</button>
                        </div>
                    )
                })}
            
                <div className="train-form" style={{marginTop: '20px'}}>
                    <form>
                        <input type="text" placeholder="enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
                        <input type="text" placeholder="enter your ages" value={age} onChange={(e) => setAge(e.target.value)}/>
                    
                        <button onClick={addNewPeroson}>Add</button>
                    </form>
                </div>
            </div>
            
        )
}
