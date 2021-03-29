import React from "react";

export const GifGridItem = ({title, url}) =>{
    return (
        <div className='col-3 animate__animated animate__rubberBand'>
            <h4>{title}</h4>
            <img src={url} alt={title}/>
        </div>
    )
}