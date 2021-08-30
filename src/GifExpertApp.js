import React, {useState} from 'react'
import {AddCategory} from './components/AddCategory';
import {GifGrid} from './components/GifGrid';

export const GifExpertApp = () => {
    const categoriesInitial = [
                                'One Punch'/*,
                                'Samurai X',
                                'Dragon Ball'*/
                              ];

    const [categories, setCategories] = useState(categoriesInitial);
    /*
    const handleAdd = () => {
        //setCategories(['categoria', ...categories ]); Add to start
        //setCategories([...categories, 'categoria']); //Add to end
        setCategories(e => [...e, 'categoria']);
    };
    */
    
    return (
        <>
          <h2>GifExpertApp</h2>  
          <AddCategory setCategories={setCategories} />
          <hr />
          
          <ol>
              {
                  categories.map((category, idx) => (
                     <GifGrid 
                        key={idx} 
                        category={category} 
                     />
                  ))
              }
          </ol>
        </>
    )
}
