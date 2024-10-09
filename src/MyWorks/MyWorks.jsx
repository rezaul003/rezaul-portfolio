import React from 'react';
import './MyWorks.css'
import mywork_data from '../assets/mywork_data';
import arrow_icon from '../assets/arrow_icon.svg'

const MyWorks = () => {
    return (
        <div id='portfolio' className='mywork'>
            <div className="mywork-title">
                <h1>My Latest Work</h1>
            </div>
            <div className="mywork-container">
                {
                    mywork_data.map((work, index) => {
                        return <img key={index} src={work.w_img}></img>
                    })
                }
            </div>
           

        </div>
    );
};

export default MyWorks;