import aboutMe from '../../../assets/img/header-img/aboutMe.png'
const Header = () => {


    return (
        <div className="header">
            <div className='header-row'>
                <div className='header-logo'>Logo</div>
                    <div className='header-nav'>
                    <ul className='nav-list'>
                        <li className='nav-item'><a style={{color: '#fffff'}} href='google.com'>About-Me</a></li>
                        <li className='nav-item'><a href='google.com'>Skills</a></li>
                        <li className='nav-item'><a href='google.com'>Projects</a></li>
                        <li className='nav-item'><a href='google.com'>Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="header-main-list">
                <div className="header-main-item">
                    AboutMe
                    <img src={aboutMe} alt='img' />
                </div>
            </div>

        </div>
    )
   
}

export default Header