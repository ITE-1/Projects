

const AppCounter = ({peopleCounter, peopleInList}) => {
    

    return (
        <div>
                <h1>Всего людей в списке: {peopleInList}</h1>
                <h2>Количество людей в списке со значением increase: {peopleCounter}</h2>
        </div>
    )
}

export default AppCounter