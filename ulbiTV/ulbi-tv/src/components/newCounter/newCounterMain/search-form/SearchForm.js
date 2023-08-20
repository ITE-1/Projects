

const SearchForm = () => {
    return (
        <div>
            <form >
            <label>
            <h1>Введите имя для поиска</h1>
            <input type='search' placeholder="search"/>
            </label>
            <label>
          <input type="checkbox"/>
          показать только повышенных
        </label>
        <button>Поиск</button>
      </form>
        </div>
    )
}

export default SearchForm