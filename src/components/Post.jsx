import React from 'react'
import './Post.scss'

export default function Post(props){
    return(
        <div className='post'>
            <div className='date'>{props.date}</div>
            <div className='title'>{props.title}</div>
            <div  className='text'>{props.text}</div>
        </div>
    )
}