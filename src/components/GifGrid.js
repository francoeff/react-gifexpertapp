// import React, {useState, useEffect} from "react";
import React from "react";
import {useFetchGifs} from "../hooks/useFetchGifs";
import {GifGridItem} from './GifGridItem';

export const GifGrid = ({categoria}) => {

    const {data:images, loading} = useFetchGifs(categoria);

    const printImages = () => {
        return images.map(img =>{
            return (
                <GifGridItem
                    key={ img.id }
                    { ...img }
                />
            )
        })
    }

    return (
        <>
            <h3 className='titulo-categoria animate__animated animate__fadeIn'>{categoria}</h3>
            { loading && 'Cargando...'}
            {printImages()}
        </>
    )
}