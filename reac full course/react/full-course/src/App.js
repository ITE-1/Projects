import React, {useEffect, useState} from 'react'
import './styles/app.css'
import Wrapper from './components/Wrapper'
import PostsList from './components/posts'


const fetchDataFromServer = () => {
 return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .catch(error => {
          console.error('Ошибка', error)
          throw error
        })
}
 
const App = () => {
  console.log('начало рендера компонента APP 1')

  const [data, setData] = useState(null)
  useEffect(() => {

    const cachedData = localStorage.getItem('cachedData')
    if (cachedData) {
   
      setData(JSON.parse(cachedData))
    } else {
      fetchDataFromServer()
      .then(json => {
        localStorage.setItem('cachedData', JSON.stringify(json))
        setData(json)
      })
     
    }
  }, [])

  return (
   
    <div className='container'>
     {data && <PostsList data={data} /> } 
    </div>
  )

}




export default App