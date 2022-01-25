import React from 'react'
import './Nav.scss'
import Vector from './img/Vector.png'

export default function Nav(){
    return(
        <div className='nav'>
            <span className='logo'>
                <div className='label-header'>Codelândia</div>
                <div className='label-header'>Blog</div>
            </span>
            <div className='search-bar'>
                <img src={Vector} alt="Search" className='img-search' />
                <input type="text" className='search-input' placeholder='Pesquisar no blog' autoComplete='none'/>
            </div>
        </div>
    )
}