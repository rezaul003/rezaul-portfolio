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
                        return <div key={index}>
                            <a href={work.live_link}>
                                <img src={work.w_img}></img>
                            </a>

                            <div className='mywork-buttons'>
                                <button>
                                    <a href={work.live_link}>Live Link</a>
                                </button>
                                <button>
                                    <a href={work.github_link}>Github Link</a>
                                </button>
                            </div>
                        </div>
                    })
                }
            </div>


        </div>
    );
};

export default MyWorks;