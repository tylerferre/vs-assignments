import React from 'react'

const BlogPost = (props) =>{
    return(
        <div className='post'>
            <a href='' className='title'>{props.item.title}</a>
            <p></p>
            <a href='' className='subTitle'>{props.item.subTitle}</a>
            <p className='info'>Posted by <a href="">{props.item.author}</a> on {props.item.date}</p>
            <hr className='border'/>
        </div>
    )
}

export default BlogPost