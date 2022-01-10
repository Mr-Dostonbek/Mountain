import React from 'react';
import './style.scss';

const BlogItem = (data) => {
    return (
        <div className='col col-sm-6 col-md-4 mb-4 blog-card'>
            <div className='card'>
                <div className='card-img'>
                    <a href={data.videoURL}>
                        <img src={data.img} alt="card-img" />
                    </a>
                </div>
                <div className='card-content'>
                    <h1 className='card-title'>{data.title}</h1>
                    <div className='footer'>
                        <a href="${data.videoURL}">
                            <img src='./assets/img/Blog/video-play.svg' alt='video-play' />
                            Videoni ko'rish
                        </a>
                        <span>{data.videoTime}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogItem;