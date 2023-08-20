import './app-info.css';


const AppInfo = ({data}) => {

    const onIncrease = data.filter( (item) => item.increase).length
    console.log(onIncrease)
    
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании </h1>
            <h2>Общее число сотрудников: {data.length}</h2>
            <h2>Премию получат: {onIncrease} </h2>
        </div>
    );
}

export default AppInfo;