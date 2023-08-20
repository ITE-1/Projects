import './header-wrapper.css';

const HeaderWrapper = () => {

    return (
        <div className="header-wrapper">
            <div className="header-logo">
                <a href="google.com">Logo</a>
            </div>
            <div className='header-nav'>
                <ul className='header-nav-list'>
                    <li className='header-nav-item'><a href="#">Первый пункт</a></li>
                    <li className='header-nav-item'><a href="#">Второй пункт</a></li>
                    <li className='header-nav-item'><a href="#">Третий пункт</a></li>
                    <li className='header-nav-item'><a href="#">Четвертый пункт</a></li>
                </ul>
                </div>
            </div>
      
    )
}
export default HeaderWrapper;