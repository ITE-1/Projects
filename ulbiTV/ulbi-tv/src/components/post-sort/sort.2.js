


const SortPosts2 = ({option, defaultValue, onChange, value}) => {


    return (
        <select
         value={value}
            onChange={(event) => onChange(event.target.value)}>
            <option disabled >{defaultValue}</option>
            {option.map(item => 
                <option key={item.value} value={item.value}>{item.name}</option>
                )}
        </select>
    )
}

export default SortPosts2