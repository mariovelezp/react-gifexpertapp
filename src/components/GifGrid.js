// import React, {useState, useEffect} from 'react'
import React from 'react'
//import { getGifs } from '../helpers/GetGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import {GifGridItem} from "./GifGridItem";

export const GifGrid = ({category}) => {
    
    // const [images, setImages] = useState([]);
    // useEffect(() => {
    //     //getGifs();
    //     getGifs(category)
    //     //.then(imgs => setImages(imgs))
    //     .then(setImages)  //Es lo mismo que linea anterior
    // },[category])
    
    //getGifs();

    const {data: images, loading} = useFetchGifs(category);//renombro "data" a "images"

    return (
        <>
            <h3>{category}</h3>
            {/* {loading ? <p>Loading...</p> : null} */}
            { loading && <p>Loading...</p> }
            <div className="card-grid">
                {               
                    images.map(img => (
                        <GifGridItem 
                        key={img.id} 
                        {...img}  //destructurado objeto
                        />
                        //<li key={img.id}>{img.title}</li>
                    ))
                }                           
            </div>
        </>
    )
}
