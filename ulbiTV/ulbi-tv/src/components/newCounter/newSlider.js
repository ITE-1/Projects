import './newSlider.css'
import React, { useRef, useState } from 'react'

const SlideItem = () => {
    const [index, setIndex] = useState(0)
   
    const tabcontentItems = useRef([])
    
    const hideContent = () => {
        tabcontentItems.forEach(element => {
            element.style.display = 'none'
        });
    }
    hideContent()

    return (
        <div className="tab">
           <div className="tabheader">
                <ul className='tabheader-list'>
                    <li className='tabheader-item' ><a href='google.com'>Статья 1</a></li>
                    <li className='tabheader-item'><a href='google.com'>Статья 2</a></li>
                    <li className='tabheader-item'><a href='google.com'>Статья 3</a></li>
                    <li className='tabheader-item'><a href='google.com'>Статья 4</a></li>
                </ul>
           </div>
            <div className="tabcontent" ref={tabcontentItems}>
                <div className='tabcontent-item'>
                    <h2>Привет меня зовут Алексей, 
                        и раз уж ты некоторым способом, 
                        смог добраться до этой статьи, 
                        то позволь мне, слегка наглым образом 
                        расскажу о себе. В свою очередь могу тебя предупредить,
                        это путешествие ввиде моего рассказа
                         будет немного захватывающим, возможно даже волнующим, поэтому давай скорее.</h2>
                </div>
                <div className='tabcontent-item'>
                    <h2>Привет меня зовут Алексей, 
                        и раз уж ты некоторым способом, 
                        смог добраться до этой статьи, 
                        то позволь мне, слегка наглым образом 
                        расскажу о себе. Но не сомневайся 
                        это путешествие будет немного захватывающим.</h2>
                </div>
                <div className='tabcontent-item' >
                    <h2>Привет меня зовут Алексей, 
                        и раз уж ты некоторым способом, 
                        смог добраться до этой статьи, 
                        то позволь мне, слегка наглым образом 
                        расскажу о себе. Но не сомневайся 
                        это путешествие будет немного захватывающим.</h2>
                </div>
                <div className='tabcontent-item' >
                    <h2>Привет меня зовут Алексей, 
                        и раз уж ты некоторым способом, 
                        смог добраться до этой статьи, 
                        то позволь мне, слегка наглым образом 
                        расскажу о себе. Но не сомневайся 
                        это путешествие будет немного захватывающим.</h2>
                </div>
            </div>
        </div>
    )
        
    


}

export default SlideItem