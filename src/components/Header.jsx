import React, { useEffect, useState } from 'react';
import { getImages } from './Api';



const Header = () => {

    const [image, setImage] = useState([])

    useEffect( () => {
 async function img () {
    try {
        const images = await getImages(876)
        setImage(result => image.concat(result))
      } catch (error) {
        console.error("Error fetching data:", error);
      }
 }

 
    
      
    }, [])

    
    return (
        <div>
            Header
        </div>
    );
}

export default Header;
