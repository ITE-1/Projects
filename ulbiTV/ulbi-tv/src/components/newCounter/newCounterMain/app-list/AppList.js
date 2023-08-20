
import AppItem from "../app-item/AppItem"
const AppList = ({data, increaseCounter, changeIncrease, remove}) => {

    return (
        <div>

            {data.map((item, index) => {
                return <AppItem 
                remove={remove}
                peopleCounter={increaseCounter}
                changeIncrease={changeIncrease}
                data={data}
                head={item.head}
                body={item.body}
                increase={item.increase}
                id={index + 1}
                key={item.id}
                 />
            })}

        </div>
    )
}

export default AppList