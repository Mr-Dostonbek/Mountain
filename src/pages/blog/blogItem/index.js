import React from 'react';

const BlogItem = () => {
    return (
        <div className='col col-sm-6 col-md-4'>
            <div className='card'>
                <div className='card-img'>
                    <img src='./assets/img/Blog/blog-1.png' alt='card-img' />
                </div>
                <div className='card-content'>
                    <h1 className='card-title'>Brendda logotipning o'rni qanday?</h1>
                </div>
            </div>
        </div>
    );
}

export default BlogItem;