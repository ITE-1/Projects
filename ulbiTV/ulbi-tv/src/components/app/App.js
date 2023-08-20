import React, { useState, useMemo } from 'react';
import '../app/App.css';
// import NewCounter from '../newCounter/newCounter2';
import Counter from "../counter/counter";
import PostItem from '../post-item/post-item';
import PostList from '../post-list/post-list';
import MyButton from '../UI/my-btn/my-btn';
import MyInput from '../UI/my-input/my-input';
import PostForm from '../post-form/post-form';
import SortPosts from '../post-sort/sort';
import SortPosts2 from '../post-sort/sort.2';
import PostFilter from '../postFilter/postFilter';
// import NewCounter from '../newCounter/newCounter2';
// import SlideItem from '../newCounter/newSlider';

const App = () => {
  const [posts, setPosts] = useState([
    { id:1,
      title:'A',
      body:'sdasdasdma'},
    

    { id:2,
      title:'D',
      body:'sdgsdgsdgsd'},
    
    { id:3,
      title:'Б',
      body:'Реаdsgsdgкт'},
    
  ])

 
  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuerry, setSearchQuerry] = useState('')

    
    

  const sortedPosts = useMemo(() => {
    console.log('Функция getSortedPosts')
    if(selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  
  }, [selectedSort, posts])

const sortedAndSearchPosts = useMemo(() => {

  return sortedPosts.filter(post => post.title.toLocaleLowerCase().includes(searchQuerry))

}, [searchQuerry, sortedPosts] )

  const sortPosts = (sort) => {
    console.log(sort)
   setSelectedSort(sort)
  
  }

  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))

  }
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  return (
    <div className="App">
    
      <PostForm create={createPost}/>
    
      <hr style={{margin: '15px 0'}} />

      <PostFilter />
     
    
  
      {sortedAndSearchPosts.length !== 0
      ? <PostList post={sortedAndSearchPosts} remove={deletePost}/> 
      : 'Посты не найдены'}
    </div>
  );
}

export default App;
