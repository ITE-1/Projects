import SortPosts2 from "../post-sort/sort"
import MyInput from "../UI/my-input/my-input"

const PostFilter = ({filter, setFilter}) => {

    return (

        <div>
            <MyInput placeholder='поиск...' value={searchQuerry} onChange={(e) => setSearchQuerry(e.target.value)}/>
            <SortPosts2 
                defaultValue='сортировка'
                value={selectedSort}
                onChange={sortPosts}
                option={[
                {value: 'title' , name: 'По названию'},
                {value: 'body', name: 'По описанию'}
                ]}
            />
        </div>
    )

}

export default PostFilter